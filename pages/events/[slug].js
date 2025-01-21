import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react'

// This would typically come from a database or API
const eventDetails = {
  'naadam-festival-2024': {
    title: "Naadam Festival 2024",
    date: "July 11-13, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Seattle Center",
    image: "/placeholder.svg",
    description: "Experience the excitement of Mongolia's largest cultural festival featuring traditional sports, music, and dance performances. The Naadam Festival, known as 'The Three Games of Men', celebrates Mongolian culture through competitions in wrestling, horse racing, and archery.",
    activities: [
      "Traditional Mongolian Wrestling Tournament",
      "Horse Racing Exhibition",
      "Archery Demonstrations and Competitions",
      "Traditional Music and Dance Performances",
      "Mongolian Cuisine Food Stalls",
      "Cultural Workshops and Exhibitions"
    ],
    ticketInfo: "Tickets: $20 for adults, $10 for children (6-12), Free for children under 6",
    capacity: "Expected attendance: 5,000+",
    tags: ["Cultural Festival", "Traditional Sports", "Music", "Dance", "Food"]
  },
}

export default function EventDetail() {
  const router = useRouter()
  const { slug } = router.query
  const event = eventDetails[slug]

  if (!event) return <div>Event not found</div>

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
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
                <div className="flex items-center text-gray-600">
                  <Clock className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.capacity}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8">{event.description}</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Activities</h2>
              <ul className="list-disc pl-5 mb-8 text-gray-600">
                {event.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>

              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ticket Information</h3>
                <p className="text-gray-600">{event.ticketInfo}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {event.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-blue text-white">
                    <Tag className="h-4 w-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href="/events"
                  className="text-brand-blue hover:text-blue-700 font-semibold"
                >
                  ← Back to Events
                </Link>
                <Link
                  href="#"
                  className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Related Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* You would typically map through related events here */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/placeholder.svg"
                  alt="Related Event 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Music Concert</h3>
                <p className="text-gray-600 mb-4">Enjoy an evening of traditional Mongolian music performed by renowned artists.</p>
                <Link 
                  href="#"
                  className="text-brand-red hover:text-red-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            {/* Add more related events as needed */}
          </div>
        </div>
      </section>
    </div>
  )
}

