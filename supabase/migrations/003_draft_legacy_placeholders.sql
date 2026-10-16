begin;
-- Keep unfinished legacy content editable in the admin dashboard.
-- Limit the change to known imported records that still have placeholder images.
update public.events set published = false
where slug in ('winter-solstice-2022', 'tulga-poetry-festival', 'mongolian-language-classes', 'traditional-crafts-workshop', 'naadam-festival-2022')
  and image = '/placeholder.svg' and deleted_at is null;
update public.programs set published = false
where slug in ('mit-2', 'summer-camp', 'adult-volunteering', 'tedx-project', 'arts-project', 'college-apps', 'amazon-book', 'field-trips')
  and image = '/placeholder.svg' and deleted_at is null;
commit;
