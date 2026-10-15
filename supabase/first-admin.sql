-- Run once after creating the Supabase Auth user with this verified email.
-- The check fails rather than silently succeeding if the account is missing.
begin;
do $$
declare admin_id uuid;
begin
  select id into admin_id from auth.users
  where lower(email) = 'enkhjinjeje@gmail.com' and email_confirmed_at is not null;
  if admin_id is null then
    raise exception 'Create and confirm the Supabase Auth user enkhjinjeje@gmail.com first.';
  end if;
  insert into public.admin_users(user_id) values(admin_id) on conflict(user_id) do nothing;
end;
$$;
commit;
