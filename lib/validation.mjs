import { archiveYear, programAliases } from './public-routes.mjs'

export const contentTables = ['events', 'programs']
export const slugify = (value) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 180).replace(/-$/,'')
export function validateContent(kind, input) {
  if (!contentTables.includes(kind)) throw new Error('Unknown content type.')
  const value = {}
  for (const [key, max, required] of [['title',500,true],['slug',200,true],['description',20000,true],['details',50000,false],['image',2000,false]]) {
    value[key] = String(input[key] || '').trim()
    if ((required && !value[key]) || value[key].length > max) throw new Error(`Please check ${key} (maximum ${max} characters).`)
  }
  if (kind === 'events' && (archiveYear(value.slug) !== null || value.slug === 'upcoming-events')) throw new Error('That URL name is reserved for event listings.')
  if (kind === 'programs' && programAliases[value.slug]) throw new Error('That URL name is reserved for an existing program link.')
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(value.slug)) throw new Error('The URL name must use lowercase letters, numbers, and hyphens.')
  if (value.image && value.image !== '/placeholder.svg') {
    const url = new URL(value.image)
    if (url.protocol !== 'https:' || url.origin !== new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).origin || !url.pathname.startsWith('/storage/v1/object/public/content-images/')) throw new Error('Please upload an image using the image picker.')
  }
  value.image ||= '/placeholder.svg'
  value.published = input.published === true
  value.sort_order = Number(input.sort_order || 0)
  if (!Number.isInteger(value.sort_order) || Math.abs(value.sort_order) > 100000) throw new Error('Display order must be a whole number between -100000 and 100000.')
  if (kind === 'events') {
    value.year = Number(input.year)
    if (!Number.isInteger(value.year) || value.year < 1900 || value.year > 2200) throw new Error('Please enter a valid event year.')
    for (const [key,max] of [['date',200],['time',200],['location',500]]) {
      value[key] = String(input[key] || '').trim()
      if (value[key].length > max) throw new Error(`Please shorten ${key}.`)
    }
    value.registration_open = input.registration_open === true
    value.starts_at = input.starts_at ? new Date(input.starts_at).toISOString() : null
  }
  return value
}
