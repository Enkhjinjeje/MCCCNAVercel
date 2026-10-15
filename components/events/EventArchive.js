import Image from 'next/image'
import Link from 'next/link'
import { Users, Award } from 'lucide-react'
import EventCard from './EventCard'
import background from '../../photos/backgrounds/bg1.jpg'

// Editorial year-in-review copy remains static; event records come from Supabase.
const highlights2022 = [
  {title:'Community Growth',description:'Our community grew by 35% in 2022, welcoming new families and individuals to our cultural center.',icon:Users},
  {title:'Cultural Preservation',description:'We launched 3 new initiatives focused on preserving Mongolian traditions and language.',icon:Award},
  {title:'Educational Impact',description:'Over 100 students participated in our language and cultural education programs.',icon:Users},
]

export default function EventArchive({ year, events }) {
  return <div className="bg-white min-h-screen">
    <section className="relative h-[400px]">
      <Image src={background} alt={`${year} Mongolian events`} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><div className="text-center text-white max-w-4xl px-4"><h1 className="text-5xl font-bold mb-6">{year} Events</h1><p className="text-xl">A year of cultural celebration and community building</p></div></div>
    </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {year===2022 && <section className="mb-16"><h2 className="text-3xl font-bold text-center mb-8">2022 Year in Review</h2><div className="bg-gray-50 rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">2022 was a pivotal year for the Mongolian Cultural Center as we expanded our programs, welcomed new community members, and strengthened our cultural preservation efforts.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">{highlights2022.map(({title,description,icon:Icon})=><div key={title} className="bg-white p-6 rounded-lg shadow-md text-center"><div className="flex justify-center mb-4"><Icon className="h-8 w-8 text-brand-blue" /></div><h3 className="text-xl font-bold mb-2">{title}</h3><p className="text-gray-600">{description}</p></div>)}</div>
        <p className="text-gray-700 italic text-center">“2022 laid the foundation for our future growth and cultural impact in the community.”</p>
      </div></section>}
      <h2 className="text-3xl font-bold text-center mb-8">{year} Events</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{events.map(event=><EventCard key={event.id} event={event} />)}</div>
      {!events.length && <p className="text-center text-gray-600">No published events for {year} yet.</p>}
      <div className="mt-12 text-center"><Link href="/events" className="text-brand-blue font-semibold">← Back to All Events</Link></div>
    </div>
  </div>
}
