import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { requireAdmin } from '../../lib/supabase/server'
import { getBrowserClient } from '../../lib/supabase/browser'
import { localDateTime } from '../../lib/public-routes.mjs'
import { slugify, validateContent } from '../../lib/validation.mjs'
import styles from '../../styles/admin.module.css'

const sections = ['events', 'programs', 'reviews', 'registrations', 'newsletter']
const blank = () => ({ title:'', slug:'', description:'', details:'', image:'/placeholder.svg', date:'', year:new Date().getFullYear(), time:'', starts_at:'', location:'', published:false, registration_open:false, sort_order:0 })
const labels = { events:'Events', programs:'Programs', reviews:'Reviews', registrations:'Registrations', newsletter:'Newsletter' }

export default function Admin({ initialData, email }) {
  const router = useRouter()
  const [records,setRecords] = useState(initialData)
  const [section,setSection] = useState('events')
  const [editor,setEditor] = useState(null)
  const [search,setSearch] = useState('')
  const [trash,setTrash] = useState(false)
  const [busy,setBusy] = useState(false)
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')
  const isContent = section === 'events' || section === 'programs'
  async function perform(work,success) {
    setBusy(true); setError(''); setMessage('')
    try { await work(); setMessage(success) }
    catch(e) { setError(e.code === '23505' ? 'That URL name is already in use. Choose a different one.' : (e.message || 'Unable to save. Please try again.')) }
    finally { setBusy(false) }
  }
  async function refresh() {
    const client = getBrowserClient()
    const result = await Promise.all(['events','programs','reviews','event_registrations','newsletter_subscribers'].map(table => client.from(table).select('*').order('created_at',{ascending:false})))
    const failed = result.find(r=>r.error)
    if (failed) throw failed.error
    setRecords(Object.fromEntries(sections.map((name,index)=>[name,result[index].data])))
  }
  function changeSection(next) {
    if (editor && !window.confirm('Discard your unsaved changes?')) return
    setSection(next);setEditor(null);setSearch('');setTrash(false);setMessage('');setError('')
  }
  async function save(e) {
    e.preventDefault()
    await perform(async()=>{
      const payload = validateContent(section,editor)
      const client = getBrowserClient()
      const query = editor.id ? client.from(section).update(payload).eq('id',editor.id) : client.from(section).insert(payload)
      const { error } = await query.select('id').single()
      if(error) throw error
      setEditor(null); await refresh()
    }, 'Saved. Published changes are visible on the website immediately.')
  }
  async function updateRecord(table,id,patch,success) {
    await perform(async()=>{
      const {error} = await getBrowserClient().from(table).update(patch).eq('id',id).select('id').single()
      if(error) throw error
      await refresh()
    },success)
  }
  async function upload(e) {
    const file = e.target.files?.[0]
    if(!file) return
    await perform(async()=>{
      const extensions = {'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}
      if(!extensions[file.type] || file.size > 10*1024*1024) throw new Error('Choose a JPG, PNG, or WebP image up to 10 MB.')
      const client = getBrowserClient()
      const path = `${section}/${crypto.randomUUID()}.${extensions[file.type]}`
      const {error} = await client.storage.from('content-images').upload(path,file,{contentType:file.type,upsert:false})
      if(error) throw error
      const {data} = client.storage.from('content-images').getPublicUrl(path)
      setEditor(prev=>({...prev,image:data.publicUrl}))
    },'Image uploaded. Save the form to apply it.')
    e.target.value=''
  }
  async function signOut() {
    await perform(async()=>{
      const {error} = await getBrowserClient().auth.signOut()
      if(error) throw error
      await router.replace('/admin/login')
    },'Signed out.')
  }
  const filtered = records[section].filter(record => {
    if((isContent || section==='reviews') && Boolean(record.deleted_at)!==trash) return false
    return `${record.title || ''} ${record.name || ''} ${record.email || ''} ${record.comment || ''}`.toLowerCase().includes(search.toLowerCase())
  })
  const field = (name,label,options={}) => <label>{label}<input {...options} value={editor[name]} onChange={e=>setEditor({...editor,[name]:e.target.value})} /></label>
  return <main className={styles.shell}>
    <Head><title>Admin | Mongolian Cultural Center</title><meta name="robots" content="noindex,nofollow" /></Head>
    <header className={styles.header}><div><p className={styles.eyebrow}>COMMUNITY MANAGEMENT</p><h1>Admin dashboard</h1><p className={styles.muted}>{email}</p></div><div className={styles.actions}><Link href="/">View website ↗</Link><button className={styles.secondary} onClick={signOut} disabled={busy}>Sign out</button></div></header>
    <nav className={styles.tabs} aria-label="Admin sections">{sections.map(item=><button key={item} disabled={busy} aria-pressed={section===item} onClick={()=>changeSection(item)}>{labels[item]} <span>({records[item].filter(r=>!r.deleted_at).length})</span></button>)}</nav>
    {message && <p role="status" className={styles.notice}>{message}</p>}
    {error && <p role="alert" className={`${styles.notice} ${styles.error}`}>{error}</p>}
    {editor ? <section className={styles.panel}><h2>{editor.id?'Edit':'Add'} {section==='events'?'event':'program'}</h2>
      <form className={styles.form} onSubmit={save}><fieldset disabled={busy} style={{display:'contents'}}>
        <label>Title<input required maxLength={500} value={editor.title} onChange={e=>setEditor({...editor,title:e.target.value,...(!editor.id && editor.slug===slugify(editor.title) ? {slug:slugify(e.target.value)} : {})})} /></label>
        {field('slug','URL name',{required:true,maxLength:200,pattern:'[a-z0-9]+(-[a-z0-9]+)*'})}
        <p className={styles.muted}>Use lowercase letters, numbers, and hyphens. Changing an existing event URL will change its public link.</p>
        {section==='events' && <div className={styles.grid}>{field('date','Display date',{placeholder:'June 8–9, 2027',maxLength:200})}{field('year','Event year',{type:'number',required:true,min:1900,max:2200})}{field('starts_at','Start date & time (your local time)',{type:'datetime-local'})}{field('time','Time',{maxLength:200})}{field('location','Location',{maxLength:500})}</div>}
        <label>Description<textarea required maxLength={20000} value={editor.description} onChange={e=>setEditor({...editor,description:e.target.value})} /></label>
        <label>Additional details<textarea maxLength={50000} value={editor.details} onChange={e=>setEditor({...editor,details:e.target.value})} /></label>
        <label>Photo<input type="file" accept="image/jpeg,image/png,image/webp" onChange={upload} /></label><p className={styles.muted}>JPG, PNG, or WebP, up to 10 MB. Uploaded photos are publicly accessible.</p>
        {editor.image && <img className={styles.preview} src={editor.image} alt="Selected content photo" />}
        <button type="button" className={styles.secondary} onClick={()=>setEditor({...editor,image:'/placeholder.svg'})}>Remove photo from this item</button>
        {field('sort_order','Display order',{type:'number',min:-100000,max:100000})}
        <label className={styles.check}><input type="checkbox" checked={editor.published} onChange={e=>setEditor({...editor,published:e.target.checked})} />Published on the website</label>
        {section==='events' && <label className={styles.check}><input type="checkbox" checked={editor.registration_open} onChange={e=>setEditor({...editor,registration_open:e.target.checked})} />Accept event registrations</label>}
        <div className={styles.actions}><button type="submit">{busy?'Saving…':'Save changes'}</button><button type="button" className={styles.secondary} onClick={()=>{if(window.confirm('Discard your unsaved changes?'))setEditor(null)}}>Cancel</button></div>
      </fieldset></form>
    </section> : <>
      <div className={styles.toolbar}><h2>{labels[section]}{trash?' · Trash':''}</h2><div className={styles.actions}><input className={styles.search} type="search" aria-label={`Search ${section}`} placeholder={`Search ${section}…`} value={search} onChange={e=>setSearch(e.target.value)} />{(isContent || section==='reviews') && <button className={styles.secondary} onClick={()=>setTrash(!trash)}>{trash?'Show active':'View trash'}</button>}{isContent && <button onClick={()=>{setEditor(blank());setMessage('');setError('')}}>Add {section==='events'?'event':'program'}</button>}</div></div>
      {(isContent || section==='reviews') ? <div className={styles.list}>{filtered.map(record=><article className={styles.row} key={record.id}>
        <div><h3>{record.title || `${record.name} · ${record.rating}/5 stars`}</h3>{isContent ? <><p className={styles.muted}>{record.date || ''}</p><span className={styles.badge}>{record.published?'Published':'Draft'}</span>{section==='events' && <span className={styles.badge}>{record.registration_open?'Registration open':'Registration closed'}</span>}</> : <><p>{record.comment}</p><span className={styles.badge}>{record.approved?'Approved':'Pending approval'}</span></>}</div>
        <div className={styles.actions}>{trash ? <button disabled={busy} onClick={()=>updateRecord(section,record.id,{deleted_at:null},'Restored successfully.')}>Restore</button> : <>
          {isContent ? <button disabled={busy} className={styles.secondary} onClick={()=>{setEditor({...record,starts_at:localDateTime(record.starts_at)});setMessage('');setError('')}}>Edit</button> : <button disabled={busy} className={styles.secondary} onClick={()=>updateRecord('reviews',record.id,{approved:!record.approved},record.approved?'Review hidden.':'Review approved.')}>{record.approved?'Unpublish':'Approve'}</button>}
          <button disabled={busy} className={styles.danger} onClick={()=>{if(window.confirm(`Move this ${isContent?'item':'review'} to trash? It will disappear from the website and can be restored later.`))updateRecord(section,record.id,{deleted_at:new Date().toISOString()},'Moved to trash.')}}>Remove</button>
        </>}</div>
      </article>)}</div> : <div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Email</th>{section==='registrations' && <th>Event</th>}<th>Submitted</th></tr></thead><tbody>{filtered.map(record=><tr key={record.id}><td>{record.email}</td>{section==='registrations' && <td>{records.events.find(e=>e.id===record.event_id)?.title || 'Event unavailable'}</td>}<td>{record.created_at.slice(0,10)}</td></tr>)}</tbody></table></div>}
      {!filtered.length && <p className={styles.empty}>No {labels[section].toLowerCase()} to show.</p>}
    </>}
  </main>
}

export async function getServerSideProps(context) {
  const access = await requireAdmin(context)
  if(access.redirect) return access
  const results = await Promise.all(['events','programs','reviews','event_registrations','newsletter_subscribers'].map(table=>access.supabase.from(table).select('*').order('created_at',{ascending:false})))
  if(results.some(result=>result.error)) throw new Error('Unable to load admin data.')
  return {props:{email:access.user.email,initialData:Object.fromEntries(sections.map((section,index)=>[section,results[index].data]))}}
}
