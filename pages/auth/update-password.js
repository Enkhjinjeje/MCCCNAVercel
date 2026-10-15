import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getBrowserClient } from '../../lib/supabase/browser'
import styles from '../../styles/admin.module.css'

export default function UpdatePassword() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [message, setMessage] = useState('Checking your link…')
  const [busy, setBusy] = useState(false)
  useEffect(() => {
    const client = getBrowserClient()
    let active = true
    async function check() {
      try {
        const { data: { user }, error } = await client.auth.getUser()
        if (error || !user) throw new Error('This link has expired. Request a new password reset from the sign-in page.')
        window.history.replaceState({}, '', '/auth/update-password')
        if (active) { setReady(true); setMessage('Choose a password for your admin account.') }
      } catch (error) { if (active) setMessage(error.message) }
    }
    check()
    return () => { active = false }
  }, [])
  async function save(e) {
    e.preventDefault()
    if (password !== confirmation) { setMessage('Passwords do not match.'); return }
    setBusy(true)
    try {
      const { error } = await getBrowserClient().auth.updateUser({ password })
      if (error) throw error
      await router.replace('/admin')
    } catch (error) { setMessage(error.message) }
    finally { setBusy(false) }
  }
  return <div className={styles.login}><h1>Set your password</h1><p role="status">{message}</p>
    {ready && <form className={styles.form} onSubmit={save}>
      <label>New password<input type="password" autoComplete="new-password" minLength={12} required value={password} onChange={e=>setPassword(e.target.value)} /></label>
      <label>Confirm password<input type="password" autoComplete="new-password" minLength={12} required value={confirmation} onChange={e=>setConfirmation(e.target.value)} /></label>
      <button disabled={busy}>{busy ? 'Saving…' : 'Save password'}</button>
    </form>}
    <a href="/admin/login">Back to sign in</a>
  </div>
}
