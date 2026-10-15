begin;
-- Extend the existing database for accurate upcoming-event filtering.
alter table public.events add column if not exists starts_at timestamptz;
-- Preserve additional public content from the deployed repository; do not replace existing edits.
-- This record already exists as a draft in the earlier migration; the deployed archive publishes it.
update public.events set published=true where slug='winter-solstice-2022' and deleted_at is null;
insert into public.events (title,date,time,location,description,details,slug,year,published,sort_order,image) values ('Tulga Poetry Festival','October 15, 2022','3:00 PM - 7:00 PM','Seattle Public Library','A celebration of Mongolian poetry featuring readings from local Mongolian-American poets.','The ''Tulga'' poetry festival brought together Mongolian poets living and working in the United States. All participating authors generously donated their books to our library collection, enriching our cultural resources. The event included poetry readings, discussions about Mongolian literature, and networking opportunities for the Mongolian-American literary community.

Category: Arts & Literature
Attendees: 60
Featured event','tulga-poetry-festival',2022,true,22,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.events (title,date,location,description,details,slug,year,published,sort_order,image) values ('Mongolian Language Classes','September - December 2022','MCCCW Center','Weekly Mongolian language classes for children and adults of all proficiency levels.','Our Mongolian language program offered classes for beginners to advanced learners, focusing on reading, writing, and conversation skills. The curriculum incorporated cultural elements to provide a comprehensive understanding of the language in its cultural context. Classes were held every Saturday morning and were taught by experienced language instructors.

Category: Education
Attendees: 45','mongolian-language-classes',2022,true,23,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.events (title,date,time,location,description,details,slug,year,published,sort_order,image) values ('Traditional Crafts Workshop','August 27, 2022','1:00 PM - 4:00 PM','MCCCW Center','Hands-on workshop teaching traditional Mongolian crafts and art techniques.','Participants learned traditional Mongolian crafts including felt making, traditional pattern design, and basic leatherwork. The workshop was led by skilled artisans who shared their knowledge and techniques. All materials were provided, and participants took home their completed projects. The event was suitable for all skill levels and ages 12 and up.

Category: Workshop
Attendees: 30','traditional-crafts-workshop',2022,true,24,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.events (title,date,location,description,details,slug,year,published,sort_order,image) values ('Naadam Festival 2022','July 9-10, 2022','Magnuson Park','Annual celebration of Mongolian culture featuring traditional sports, music, and food.','The 2022 Naadam Festival featured traditional Mongolian wrestling, archery, and horse racing demonstrations. Attendees enjoyed authentic Mongolian cuisine, traditional music and dance performances, and cultural exhibits. The event attracted over 500 visitors from the greater Seattle area and provided an opportunity to showcase Mongolian heritage and traditions to the broader community.

Category: Cultural Celebration
Attendees: 500
Featured event','naadam-festival-2022',2022,true,25,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('mit-2','MIT 2','The second phase of our Mongolian Identity-Mongolian Talent initiative, building on the success of MIT 1.',true,21,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('summer-camp','Summer Camp','Immersive summer programs for children to learn about Mongolian culture, language, and traditions.',true,22,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('adult-volunteering','Adult Volunteering','Opportunities for adults to contribute their skills and time to support our cultural center.',true,23,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('tedx-project','TED x Project','Inspiring talks and presentations showcasing Mongolian culture, innovation, and ideas.',true,24,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('arts-project','Arts Project','Creative initiatives celebrating traditional and contemporary Mongolian arts and crafts.',true,25,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('college-apps','College Apps','Support and guidance for students applying to colleges and universities.',true,26,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('amazon-book','Amazon Book Reading','Reading programs featuring Mongolian literature available through Amazon.',true,27,'/placeholder.svg') on conflict(slug) do nothing;
insert into public.programs (slug,title,description,published,sort_order,image) values ('field-trips','Field Trips','Educational excursions to cultural sites, museums, and events related to Mongolian heritage.',true,28,'/placeholder.svg') on conflict(slug) do nothing;
commit;
