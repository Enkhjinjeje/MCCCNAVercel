import { getPublicClient } from "../../lib/supabase/server"
import { buildNavigation } from "../../lib/public-routes.mjs"

export default async function navigation(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).end()
  }
  const client = getPublicClient()
  const [events, programs] = await Promise.all([
    client.from("events").select("year").eq("published", true).is("deleted_at", null),
    client
      .from("programs")
      .select("slug,title")
      .eq("published", true)
      .is("deleted_at", null)
      .order("sort_order")
      .order("created_at"),
  ])
  res.setHeader("Cache-Control", "no-store")
  if (events.error || programs.error)
    return res.status(503).json({ error: "Navigation is temporarily unavailable." })
  return res.status(200).json(buildNavigation(events.data, programs.data))
}
