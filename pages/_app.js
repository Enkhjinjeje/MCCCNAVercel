import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const type = new URLSearchParams(window.location.hash.slice(1)).get('type')
    if ((type === 'invite' || type === 'recovery') && window.location.pathname !== '/auth/update-password') {
      window.location.replace('/auth/update-password' + window.location.hash)
    }
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

