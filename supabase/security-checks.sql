-- Run as postgres in the SQL Editor. Every test record is rolled back.
begin;
insert into auth.users(id,email) values ('10000000-0000-4000-8000-000000000001','admin-check@example.invalid'),('10000000-0000-4000-8000-000000000002','visitor-check@example.invalid');
insert into public.admin_users(user_id) values ('10000000-0000-4000-8000-000000000001');
insert into public.events(id,slug,title,description,year,published,registration_open) values ('20000000-0000-4000-8000-000000000001','verification-event','Verification event','Temporary test event',2027,true,true);
insert into public.events(id,slug,title,description,year,published) values ('20000000-0000-4000-8000-000000000002','verification-draft','Verification draft','Temporary draft',2027,false);

set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin
  if public.is_admin() then raise exception 'Anonymous visitor became admin'; end if;
  if exists(select 1 from public.events where slug='verification-draft') then raise exception 'Anonymous visitor read draft'; end if;
  if not exists(select 1 from public.events where slug='verification-event') then raise exception 'Published event is inaccessible'; end if;
  begin
    insert into public.events(slug,title,description,year) values ('unauthorized','Unauthorized','Must fail',2027);
    raise exception 'Anonymous visitor inserted event';
  exception when insufficient_privilege then null; end;
  begin
    perform * from public.newsletter_subscribers;
    raise exception 'Anonymous visitor read private emails';
  exception when insufficient_privilege then null; end;
  begin
    perform * from public.event_registrations;
    raise exception 'Anonymous visitor read registrations';
  exception when insufficient_privilege then null; end;
end; $$;
select public.submit_review('Verification visitor',5,'Temporary moderation test');
select public.subscribe_newsletter('verification@example.invalid');
select public.subscribe_newsletter('verification@example.invalid');
select public.register_for_event('20000000-0000-4000-8000-000000000001','verification@example.invalid');
select public.register_for_event('20000000-0000-4000-8000-000000000001','verification@example.invalid');
do $$ begin
  if exists(select 1 from public.reviews where comment='Temporary moderation test') then raise exception 'Pending review exposed'; end if;
end; $$;

reset role;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$ declare touched integer; begin
  if public.is_admin() then raise exception 'Ordinary account became admin'; end if;
  if exists(select 1 from public.events where slug='verification-draft') then raise exception 'Ordinary account read draft'; end if;
  if exists(select 1 from public.newsletter_subscribers) then raise exception 'Ordinary account read subscriber emails'; end if;
  if exists(select 1 from public.event_registrations) then raise exception 'Ordinary account read registrations'; end if;
  begin
    insert into public.admin_users(user_id) values ('10000000-0000-4000-8000-000000000002');
    raise exception 'Ordinary account granted itself admin';
  exception when insufficient_privilege then null; end;
  update public.events set title='Unauthorized change' where slug='verification-event';
  get diagnostics touched = row_count;
  if touched <> 0 then raise exception 'Ordinary account changed content'; end if;
  begin
    insert into storage.objects(bucket_id,name) values('content-images','unauthorized-check.jpg');
    raise exception 'Ordinary account uploaded an image';
  exception when insufficient_privilege then null; end;
end; $$;

reset role;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$ declare touched integer; begin
  if not public.is_admin() then raise exception 'Admin not recognized'; end if;
  if not exists(select 1 from public.events where slug='verification-draft') then raise exception 'Admin cannot read drafts'; end if;
  if (select count(*) from public.newsletter_subscribers where email='verification@example.invalid') <> 1 then raise exception 'Newsletter deduplication failed'; end if;
  if (select count(*) from public.event_registrations where email='verification@example.invalid') <> 1 then raise exception 'Registration deduplication failed'; end if;
  insert into public.programs(slug,title,description) values('verification-program','Test program','Temporary program');
  update public.programs set title='Edited program' where slug='verification-program';
  get diagnostics touched = row_count;
  if touched <> 1 then raise exception 'Admin could not edit program'; end if;
  update public.events set deleted_at=now() where slug='verification-event';
  get diagnostics touched = row_count;
  if touched <> 1 then raise exception 'Admin could not remove event'; end if;
  update public.reviews set approved=true where comment='Temporary moderation test';
end; $$;

reset role;
set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin
  if exists(select 1 from public.events where slug='verification-event') then raise exception 'Removed event remains public'; end if;
  if not exists(select 1 from public.reviews where comment='Temporary moderation test') then raise exception 'Approved review not public'; end if;
  begin
    perform public.register_for_event('20000000-0000-4000-8000-000000000001','closed-check@example.invalid');
    raise exception 'Registration accepted for removed event';
  exception when raise_exception then
    if SQLERRM <> 'Registration is closed for this event.' then raise; end if;
  end;
end; $$;

reset role;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
update public.events set deleted_at=null where slug='verification-event';
reset role;
set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin
  if not exists(select 1 from public.events where slug='verification-event') then raise exception 'Restore did not republish event'; end if;
end; $$;
reset role;
rollback;
select 'PASS: public reads, draft isolation, private submissions, moderation, admin CRUD, trash/restore, and ordinary-user denial' as security_checks;
