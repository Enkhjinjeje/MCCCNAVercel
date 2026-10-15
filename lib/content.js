import { getPublicClient } from './supabase/server'

export async function loadPublished(table, { year, upcoming = false } = {}) {
  if (!['events', 'programs'].includes(table)) throw new Error('Unknown content type.')
  let query = getPublicClient().from(table).select('*').eq('published', true).is('deleted_at', null)
  if (year !== undefined) query = query.eq('year', year)
  if (upcoming) query = query.gte('starts_at', new Date().toISOString()).order('starts_at')
  else query = query.order('sort_order').order('created_at')
  const { data, error } = await query
  if (error) throw new Error(`Unable to load ${table}.`)
  return data
}

export function groupEvents(events) {
  return events.reduce((groups, event) => {
    ;(groups[event.year] ||= []).push(event)
    return groups
  }, {})
}
