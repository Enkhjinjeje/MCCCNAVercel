import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { parse, serialize } from 'cookie'

export function getPublicClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
}

export function getServerClient(req, res) {
  // Authenticated responses must never be shared by a CDN or another browser.
  res.setHeader('Cache-Control', 'private, no-store')
  const cookies = parse(req.headers.cookie || '')
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      getAll: () => Object.entries(cookies).map(([name, value]) => ({ name, value })),
      setAll: (updates) => {
        for (const { name, value } of updates) cookies[name] = value
        const existing = res.getHeader('Set-Cookie') || []
        res.setHeader('Set-Cookie', [
          ...(Array.isArray(existing) ? existing : [existing]),
          ...updates.map(({ name, value, options }) => serialize(name, value, options)),
        ])
      },
    },
  })
}

export async function requireAdmin(context) {
  const supabase = getServerClient(context.req, context.res)
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) return { redirect: { destination: '/admin/login', permanent: false } }
  const { data: admin, error: adminError } = await supabase.from('admin_users').select('user_id').eq('user_id', user.id).maybeSingle()
  if (adminError) throw new Error('Unable to check administrator access.')
  if (!admin) return { redirect: { destination: '/admin/login?denied=1', permanent: false } }
  return { supabase, user }
}
