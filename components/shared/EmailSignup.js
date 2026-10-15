import { useState } from 'react'
import { getBrowserClient } from '../../lib/supabase/browser'

export default function EmailSignup({ eventId, variant = "default", className }) {
  const [email,setEmail] = useState('')
  const [busy,setBusy] = useState(false)
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')
  async function submit(e) {
    e.preventDefault();setBusy(true);setMessage('');setError('')
    try {
      const client=getBrowserClient()
      const {error} = eventId
        ? await client.rpc('register_for_event',{registration_event_id:eventId,registration_email:email})
        : await client.rpc('subscribe_newsletter',{subscriber_email:email})
      if(error) throw error
      setEmail('');setMessage(eventId?'Your registration has been saved. Thank you!':'Your subscription has been saved. Thank you!')
    } catch {setError(eventId?'Unable to register. Registration may have closed; please try again later.':'Unable to subscribe. Please try again later.')}
    finally {setBusy(false)}
  }
  return <form onSubmit={submit} className={className || "space-y-4"}>
    <label style={variant === 'footer' ? undefined : {display:'block'}}>Email address<input aria-label={eventId?'Registration email':'Newsletter email'} type="email" maxLength={254} required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" style={variant === 'footer' ? undefined : {display:'block',width:'100%',padding:'10px 12px',border:'1px solid #cbd5e1',borderRadius:6,color:'#172334',background:'#fff',marginTop:6}} /></label>
    <p style={variant === 'footer' ? undefined : {fontSize:12}}>{variant === 'footer' ? 'Your email is kept private.' : eventId?'We’ll store your email for event registration. Only administrators can view it.':'We’ll store your email for newsletter updates. Only administrators can view it.'}</p>
    <button type="submit" disabled={busy} className={variant === "footer" ? undefined : "w-full bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"}>{busy?'Saving…':eventId?'Register':'Subscribe'}</button>
    {message && <p role="status">{message}</p>}{error && <p role="alert">{error}</p>}
  </form>
}
