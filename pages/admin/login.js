import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getBrowserClient } from '../../lib/supabase/browser'
import styles from '../../styles/admin.module.css'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  async function signIn(e) {
    e.preventDefault(); setBusy(true); setMessage('')
    try {
      const client = getBrowserClient()
      const { error } = await client.auth.signInWithPassword({ email, password })
      if (error) throw error
      const { data, error: accessError } = await client.rpc('is_admin')
      if (accessError) throw accessError
      if (!data) { await client.auth.signOut(); throw new Error('This account does not have administrator access.') }
      await router.replace('/admin')
    } catch (error) { setMessage(error.message || 'Unable to sign in. Please try again.') }
    finally { setBusy(false) }
  }
  async function resetPassword() {
    if (!email) { setMessage('Enter your email address first.'); return }
    setBusy(true); setMessage('')
    try {
      const { error } = await getBrowserClient().auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth/update-password` })
      if (error) throw error
      setMessage('If this account exists, a password reset email has been sent.')
    } catch { setMessage('Unable to send a reset email. Please try again later.') }
    finally { setBusy(false) }
  }
  return <div className={styles.login}>
    <Head><title>Admin sign in | Mongolian Cultural Center</title><meta name="robots" content="noindex,nofollow" /></Head>
    <p className={styles.eyebrow}>MONGOLIAN CULTURAL CENTER</p><h1>Admin sign in</h1>
    <p>Manage community events, programs, and submissions.</p>
    {router.query.denied && <p role="alert" className={styles.notice}>Your account does not have administrator access.</p>}
    <form onSubmit={signIn} className={styles.form}>
      <label>Email<input type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} /></label>
      <label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} /></label>
      <button disabled={busy}>{busy ? 'Please wait…' : 'Sign in'}</button>
      <button type="button" className={styles.secondary} onClick={resetPassword} disabled={busy}>Forgot password?</button>
    </form>
    {message && <p role="status" className={styles.notice}>{message}</p>}
  </div>
}
