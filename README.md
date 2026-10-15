# Mongolian Cultural Center

The production Next.js repository, combined with the Supabase backend and admin dashboard. Static branding, navigation sections, the homepage, social links, and nonprofit information are preserved from the Vercel copy. Content records and uploaded photos are managed in Supabase.

## Run locally

Use Node.js 22 or newer and npm:

```sh
npm ci
cp .env.example .env.local
# Fill in the Supabase project URL and publishable key.
npm run dev
```

The local merge already includes an ignored `.env.local` for project `nfvdtfhsxkoipcwtqvcf`. Only the publishable key is required. No privileged service key is used by the website.

```sh
npm test
npm run build
npm start
```

## Admin

Visit `/admin`. Supabase Auth verifies the account, and the `admin_users` table controls access. `enkhjinjeje@gmail.com` is already configured as the first admin. Signing up does not grant administrator privileges.

Admins can create, edit, publish, remove, and restore events and programs; upload photos; moderate reviews; open and close event registration; and view registration and newsletter email lists. Removed records go to trash and can be restored.

For upcoming events, set **Start date & time** in the event editor. It uses the administrator's local browser time zone and stores UTC. The optional **Display date** and **Time** fields control the text visitors see. Events with no start time remain visible in the full listing and year archive but do not appear on the upcoming-events page.

## Public routes

- `/events` — all published events, grouped by year.
- `/events/upcoming-events` — future published events with a start time.
- `/events/2022`, `/events/2023`, and other year URLs — database-filtered archives.
- `/events/[slug]` — event details and registration when enabled.
- `/programs` and `/programs/[slug]` — database-backed program listings and details.
- `/programs/mit-1` — permanent redirect to the existing MIT 1 record (`/programs/program-1`).
- `/shop/reviews` — preserved production URL for reviews; `/reviews` also works.

Event years and program menu entries come from the database. Adding, publishing, or removing a program updates its menu entry on the next page navigation or reload. Content changes do not require a deployment. Existing open pages do not update automatically.

## Supabase

The connected project already has the schema, content, storage bucket, and admin membership. Do not re-run the initial schema on that project.

For a new database:

1. Run `supabase/migrations/001_content_and_admin.sql` once.
2. Run `supabase/initial-content.sql` to import the original content snapshot.
3. Run `supabase/migrations/002_merge_deployed_content.sql` to add the Vercel copy's extra content and the optional event start time.
4. Upload content photos to the public `content-images` bucket and update image URLs if using a different project. The original import references the connected project's existing images.
5. Create a confirmed Supabase Auth user, then grant admin membership through the SQL Editor. `supabase/first-admin.sql` handles the specified first admin.

The second migration has been applied to the connected project. It preserves four additional 2022 events and eight program summaries from the Vercel repository, and publishes the existing Winter Solstice record used by the deployed 2022 archive. The old placeholder image galleries were removed; they contained no real photographs. Existing stored photos remain in Supabase.

Run `supabase/security-checks.sql` in the SQL Editor to verify anonymous access, private data isolation, moderation, admin edits, and trash/restore. All test changes are rolled back.

## Vercel deployment

Vercel Analytics is preserved. The merged source has not been pushed or deployed.

1. Set the Vercel Node.js version to 22.x.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` to the appropriate Vercel environments. Copy the values from `.env.local` securely; do not use a service-role or secret key in a `NEXT_PUBLIC_` variable.
3. In Supabase Authentication → URL Configuration, set the Site URL to your production domain and allow `https://YOUR-DOMAIN/auth/update-password`.
4. Deploy this repository. Environment changes require a fresh build.

Local password-recovery destinations for ports 3000 and 3010 are already allowed. Configure Supabase production email delivery before relying on password recovery for multiple admins. Password-reset links should be opened in the browser that requested them.

## Code structure

- `pages/` — Next.js routes, including admin/auth routes and public data loading.
- `pages/api/navigation.js` — public, published-only menu data.
- `components/layout/` — production header, footer, and layout.
- `components/navigation/` — database-backed menu loading.
- `components/events/`, `components/programs/`, `components/shared/` — reusable content UI.
- `lib/` — Supabase clients, access checks, content loading, validation, and route helpers.
- `photos/` — static photos still used by the homepage and branding.
- `styles/` — existing public styles and isolated admin styles.
- `supabase/` — schema, one-time content imports, and authorization checks.
- `tests/` — content validation, time conversion, and route compatibility checks.

The application contains no local event/program/review arrays, migration-generation scripts, or bundled copies of the 24 uploaded event/program photos. SQL imports are retained for recovery and new environments. npm is the package manager; the redundant Yarn lock file and unused Create React App/Lucide package were removed.

Public visitors can only read published active content and approved reviews. Registration and subscriber emails are readable only by admins. New reviews require approval. Public submission functions do not expose other submissions. Photos are public even when attached to drafts; only admins can upload JPG, PNG, or WebP files up to 10 MB.

Newsletter subscriptions and event registrations are stored; this app does not send newsletters or confirmation emails. Public forms do not currently include a CAPTCHA or dedicated anti-spam limiter. Known unfinished library, school, shop, volunteer, and informational links use the shared animated working-on-it screen. `lib/unfinished-pages.mjs` lists these temporary routes. Specific implemented pages take precedence, and unknown URLs still return 404. The screen is also available at `/coming-soon`. The public utility stylesheet is precompiled, so editing `tailwind.config.js` alone does not regenerate it.
