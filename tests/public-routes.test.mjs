import test from "node:test"
import assert from "node:assert/strict"
import {
  archiveYear,
  buildNavigation,
  programAliases,
  localDateTime,
} from "../lib/public-routes.mjs"

test("existing yearly URLs resolve as archives while event slugs remain details", () => {
  assert.equal(archiveYear("2022"), 2022)
  assert.equal(archiveYear("2025"), 2025)
  assert.equal(archiveYear("2200"), 2200)
  assert.equal(archiveYear("2201"), null)
  assert.equal(archiveYear("college-workshop-2024"), null)
  assert.equal(archiveYear("upcoming-events"), null)
})
test("navigation follows database years and program slugs without duplicated entries", () => {
  assert.deepEqual(
    buildNavigation(
      [{ year: 2022 }, { year: 2024 }, { year: 2024 }],
      [{ slug: "summer-camp", title: "Summer Camp" }]
    ),
    {
      years: [2024, 2022],
      programs: [{ href: "/programs/summer-camp", text: "Summer Camp" }],
    }
  )
  assert.equal(programAliases["mit-1"], "program-1")
})
test("optional start times survive a local editor round trip", () => {
  assert.equal(localDateTime(null), "")
  const iso = "2027-06-01T17:00:00.000Z"
  assert.equal(new Date(localDateTime(iso)).toISOString(), iso)
})
