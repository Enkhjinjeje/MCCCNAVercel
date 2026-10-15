begin;

create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;
grant select on public.admin_users to authenticated;
create policy "Admins can read their membership" on public.admin_users for select to authenticated using (user_id = (select auth.uid()));

create function public.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.admin_users where user_id = (select auth.uid()));
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 200),
  title text not null check (length(trim(title)) between 1 and 500),
  description text not null check (length(trim(description)) between 1 and 20000),
  details text not null default '' check (length(details) <= 50000),
  image text not null default '/placeholder.svg' check (length(image) <= 2000),
  date text not null default '' check (length(date) <= 200),
  year integer not null check (year between 1900 and 2200),
  time text not null default '' check (length(time) <= 200),
  location text not null default '' check (length(location) <= 500),
  published boolean not null default false,
  registration_open boolean not null default false,
  sort_order integer not null default 0,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 200),
  title text not null check (length(trim(title)) between 1 and 500),
  description text not null check (length(trim(description)) between 1 and 20000),
  details text not null default '' check (length(details) <= 50000),
  image text not null default '/placeholder.svg' check (length(image) <= 2000),
  published boolean not null default false,
  sort_order integer not null default 0,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create function public.touch_updated_at() returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end;
$$;
create trigger events_updated before update on public.events for each row execute function public.touch_updated_at();
create trigger programs_updated before update on public.programs for each row execute function public.touch_updated_at();

alter table public.events enable row level security;
alter table public.programs enable row level security;
revoke all on public.events, public.programs from anon, authenticated;
grant select on public.events, public.programs to anon, authenticated;
grant insert, update on public.events, public.programs to authenticated;
create policy "Read published events or administer" on public.events for select using ((published and deleted_at is null) or (select public.is_admin()));
create policy "Admins create events" on public.events for insert to authenticated with check ((select public.is_admin()));
create policy "Admins edit events" on public.events for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Read published programs or administer" on public.programs for select using ((published and deleted_at is null) or (select public.is_admin()));
create policy "Admins create programs" on public.programs for insert to authenticated with check ((select public.is_admin()));
create policy "Admins edit programs" on public.programs for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) between 1 and 100),
  rating integer not null check (rating between 1 and 5),
  comment text not null check (length(trim(comment)) between 1 and 3000),
  approved boolean not null default false,
  deleted_at timestamptz,
  created_at timestamptz not null default now()
);
create table public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id),
  email text not null check (length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  created_at timestamptz not null default now(),
  unique(event_id, email)
);
create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  created_at timestamptz not null default now()
);
alter table public.reviews enable row level security;
alter table public.event_registrations enable row level security;
alter table public.newsletter_subscribers enable row level security;
revoke all on public.reviews, public.event_registrations, public.newsletter_subscribers from anon, authenticated;
grant select on public.reviews to anon, authenticated;
grant update on public.reviews to authenticated;
grant select on public.event_registrations, public.newsletter_subscribers to authenticated;
create policy "Read approved reviews or moderate" on public.reviews for select using ((approved and deleted_at is null) or (select public.is_admin()));
create policy "Admins moderate reviews" on public.reviews for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admins read registrations" on public.event_registrations for select to authenticated using ((select public.is_admin()));
create policy "Admins read subscribers" on public.newsletter_subscribers for select to authenticated using ((select public.is_admin()));

-- Narrow submission functions prevent visitors from approving reviews or reading emails.
create function public.submit_review(reviewer_name text, review_rating integer, review_comment text)
returns void language sql security definer set search_path = '' as $$
  insert into public.reviews(name, rating, comment) values(trim(reviewer_name), review_rating, trim(review_comment));
$$;
create function public.subscribe_newsletter(subscriber_email text)
returns void language sql security definer set search_path = '' as $$
  insert into public.newsletter_subscribers(email) values(lower(trim(subscriber_email))) on conflict(email) do nothing;
$$;
create function public.register_for_event(registration_event_id uuid, registration_email text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if not exists(select 1 from public.events where id = registration_event_id and published and deleted_at is null and registration_open) then
    raise exception 'Registration is closed for this event.';
  end if;
  insert into public.event_registrations(event_id, email) values(registration_event_id, lower(trim(registration_email))) on conflict(event_id,email) do nothing;
end;
$$;
revoke all on function public.submit_review(text,integer,text), public.subscribe_newsletter(text), public.register_for_event(uuid,text) from public;
grant execute on function public.submit_review(text,integer,text), public.subscribe_newsletter(text), public.register_for_event(uuid,text) to anon, authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('content-images','content-images',true,10485760,array['image/jpeg','image/png','image/webp']);
create policy "Admins upload content images" on storage.objects for insert to authenticated with check (bucket_id = 'content-images' and (select public.is_admin()));
create policy "Admins inspect content images" on storage.objects for select to authenticated using (bucket_id = 'content-images' and (select public.is_admin()));

commit;
