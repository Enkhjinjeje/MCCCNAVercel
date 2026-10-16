import test from "node:test"
import assert from "node:assert/strict"
import { validateContent, slugify } from "../lib/validation.mjs"
const valid = {
  title: "Community event",
  slug: "community-event",
  description: "A gathering",
  year: 2027,
  image: "/placeholder.svg",
}
test("requires valid event content and rejects unknown tables", () => {
  assert.throws(() => validateContent("admin_users", valid))
  assert.throws(() => validateContent("events", { ...valid, title: " " }))
  assert.throws(() => validateContent("events", { ...valid, year: 0 }))
  assert.throws(() => validateContent("events", { ...valid, slug: "../admin" }))
})
test("ignores fields that must not be set through content forms", () => {
  const value = validateContent("events", {
    ...valid,
    id: "injected",
    deleted_at: "now",
    user_id: "admin",
    published: "true",
  })
  assert.equal(value.published, false)
  assert.equal(value.id, undefined)
  assert.equal(value.deleted_at, undefined)
})
test("accepts content images from the project and rejects arbitrary hosts", () => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co"
  assert.throws(() => validateContent("events", { ...valid, image: "https://evil.test/image.jpg" }))
  assert.equal(
    validateContent("events", {
      ...valid,
      image: "https://example.supabase.co/storage/v1/object/public/content-images/a.jpg",
    }).image.endsWith("/a.jpg"),
    true
  )
})
test("programs do not carry event registration properties", () => {
  const value = validateContent("programs", { ...valid, registration_open: true })
  assert.equal(value.registration_open, undefined)
  assert.equal(value.year, undefined)
})
test("generates URL-safe slugs", () =>
  assert.equal(slugify("Children’s Day 2027!"), "children-s-day-2027"))

test("event archive URLs cannot be shadowed by content slugs", () => {
  assert.throws(() => validateContent("events", { ...valid, slug: "2024" }))
  assert.throws(() => validateContent("events", { ...valid, slug: "2200" }))
  assert.throws(() => validateContent("programs", { ...valid, slug: "mit-1" }))
  assert.throws(() => validateContent("events", { ...valid, slug: "upcoming-events" }))
})
test("event start times are stored as UTC and may be omitted", () => {
  assert.equal(
    validateContent("events", { ...valid, starts_at: "2027-06-01T10:00:00-07:00" }).starts_at,
    "2027-06-01T17:00:00.000Z"
  )
  assert.equal(validateContent("events", valid).starts_at, null)
  assert.throws(() => validateContent("events", { ...valid, starts_at: "not a date" }))
})
