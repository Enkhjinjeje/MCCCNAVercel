import EventCard from "../../components/events/EventCard"
import { loadPublished, groupEvents } from "../../lib/content"
import Image from "next/image"
import background from "../../photos/backgrounds/bg1.jpg"


export default function Events({ eventsByYear }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={background} alt="Mongolian cultural events" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Events &amp; Projects</h1>
            <p className="text-xl">Explore our past and upcoming events, and discover our ongoing projects</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Events</h2>
          {Object.keys(eventsByYear).length === 0 && <p className="text-center text-gray-600">New events will be announced here.</p>}
          {Object.entries(eventsByYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, events]) => (
            <div key={year} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{year} Events</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const events = await loadPublished("events")
  return { props: { eventsByYear: groupEvents(events) } }
}
