export const programAliases = { 'mit-1': 'program-1', 'tEDx-project': 'tedx-project' }
export function archiveYear(slug) {
  return /^\d{4}$/.test(slug) && Number(slug) >= 1900 && Number(slug) <= 2200 ? Number(slug) : null
}
export function buildNavigation(events, programs) {
  return {
    years: [...new Set(events.map(event => event.year))].sort((a,b)=>b-a),
    programs: programs.map(({slug,title})=>({href:`/programs/${slug}`,text:title})),
  }
}
// datetime-local uses the administrator's browser time zone. Store a UTC instant.
export function localDateTime(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  return new Date(date.getTime() - date.getTimezoneOffset()*60000).toISOString().slice(0,16)
}
