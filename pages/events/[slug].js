"use client"

import EventArchive from "../../components/events/EventArchive"
import { loadPublished } from "../../lib/content"
import { archiveYear } from "../../lib/public-routes.mjs"
import { getPublicClient } from "../../lib/supabase/server"
import EmailSignup from "../../components/shared/EmailSignup"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventPage({ event, year, events }) {
  if (year) return <EventArchive year={year} events={events} />
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, the event you're looking for doesn't exist.</p>
          <Link href="/events" className="bg-brand-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">{event.title}</h1>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.date}</span>
                </div>
                {event.time && <div className="flex items-center text-gray-600">
                  <Clock className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.time}</span>
                </div>}
                {event.location && <div className="flex items-center text-gray-600">
                  <MapPin className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.location}</span>
                </div>}
              </div>

              <p className="text-gray-600 mb-4 whitespace-pre-wrap">{event.description}</p>
              <p className="text-gray-600 mb-8 whitespace-pre-wrap">{event.details}</p>

              {event.registration_open && <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Register for this Event</h2>
                <EmailSignup eventId={event.id} />
              </section>}


              <div className="flex justify-between items-center">
                <Link href="/events" className="text-brand-blue hover:text-blue-700 font-semibold">
                  ← Back to Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const year=archiveYear(params.slug)
  if(year) return { props: { year, events: await loadPublished('events',{year}) } }
  const { data: event, error } = await getPublicClient().from('events').select('*')
    .eq('slug', params.slug).eq('published', true).is('deleted_at', null).maybeSingle()
  if (error) throw new Error('Unable to load event.')
  if (!event) return { notFound: true }
  return { props: { event } }
}
