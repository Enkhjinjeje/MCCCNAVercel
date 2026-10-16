import Image from "next/image"
import Link from "next/link"
import EventCard from "../../components/events/EventCard"
import { loadPublished } from "../../lib/content"
import background from "../../photos/backgrounds/bg1.jpg"

export default function UpcomingEvents({ events }) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[400px]">
        <Image
          src={background}
          alt="Mongolian community events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl">Join our community at an upcoming event</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {!events.length && (
          <p className="text-center text-gray-600">
            New events will be announced here. Explore our past events in the meantime.
          </p>
        )}
        <div className="mt-12 text-center">
          <Link className="text-brand-blue font-semibold" href="/events">
            View all events →
          </Link>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps() {
  return { props: { events: await loadPublished("events", { upcoming: true }) } }
}
