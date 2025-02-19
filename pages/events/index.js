import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

const eventsByYear = {
  2024: [
    {
      id: 1,
      slug: "naadam-festival-2024",
      title: "Naadam Festival 2024",
      date: "July 11-13, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Seattle Center",
      image: "/placeholder.svg",
      description:
        "Experience the excitement of Mongolia's largest cultural festival featuring traditional sports, music, and dance performances.",
    },
    {
      id: 2,
      slug: "lunar-new-year-2024",
      title: "Lunar New Year Celebration",
      date: "February 10, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "MCCCW Center",
      image: "/placeholder.svg",
      description: "Welcome the Year of the Dragon with traditional ceremonies, performances, and festive activities.",
    },
    {
      id: 3,
      slug: "music-workshop-2024",
      title: "Traditional Music Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "MCCCW Music Hall",
      image: "/placeholder.svg",
      description: "Learn about Mongolian musical instruments and throat singing in this interactive workshop.",
    },
  ],
  2023: [
    {
      id: 4,
      slug: "summer-festival-2023",
      title: "Mongolian Summer Festival 2023",
      date: "August 5-6, 2023",
      time: "11:00 AM - 7:00 PM",
      location: "Magnuson Park",
      image: "/placeholder.svg",
      description: "A celebration of Mongolian culture with food, music, and traditional games.",
    },
    {
      id: 5,
      slug: "art-exhibition-2023",
      title: "Contemporary Mongolian Art Exhibition",
      date: "May 20-June 10, 2023",
      time: "Gallery Hours: 10:00 AM - 5:00 PM",
      location: "MCCCW Gallery",
      image: "/placeholder.svg",
      description: "Explored modern interpretations of traditional Mongolian art forms by local artists.",
    },
  ],
  2022: [
    {
      id: 6,
      slug: "winter-solstice-2022",
      title: "Winter Solstice Celebration 2022",
      date: "December 21, 2022",
      time: "6:00 PM - 9:00 PM",
      location: "MCCCW Center",
      image: "/placeholder.svg",
      description: "Celebrated the winter solstice with traditional Mongolian customs and warm fellowship.",
    },
  ],
}

const mitProject = {
  title: "MIT App Inventor Project",
  description: "A showcase of innovative mobile applications developed by our young learners using MIT App Inventor.",
  presentations: [
    {
      id: 1,
      name: "Batbayar Enkhbold",
      age: 14,
      projectTitle: "Mongolian Language Learning App",
      description:
        "An interactive app designed to teach basic Mongolian phrases and vocabulary through games and quizzes.",
    },
    {
      id: 2,
      name: "Oyunbileg Gantumur",
      age: 15,
      projectTitle: "Mongolian Cultural Heritage Explorer",
      description: "A virtual tour app showcasing Mongolia's historical sites and cultural landmarks.",
    },
    {
      id: 3,
      name: "Tsogt-Ochir Batbold",
      age: 13,
      projectTitle: "Nomadic Lifestyle Simulator",
      description: "An educational game that simulates the daily life and challenges of Mongolian nomads.",
    },
  ],
}

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative h-48">
      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2 text-brand-blue" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
          <span>{event.location}</span>
        </div>
      </div>
      <Link href={`/event/${event.slug}`} className="text-brand-red hover:text-red-600 font-semibold">
        View Details →
      </Link>
    </div>
  </div>
)

export default function Events() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src="/placeholder.svg" alt="Mongolian cultural events" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Events & Projects</h1>
            <p className="text-xl">
              Explore our past and upcoming events, and discover innovative projects by our community
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Events</h2>
          {Object.entries(eventsByYear).map(([year, events]) => (
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

        {/* MIT Project Section */}
        <section className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">{mitProject.title}</h2>
          <p className="text-lg text-center mb-12">{mitProject.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mitProject.presentations.map((presentation) => (
              <div key={presentation.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{presentation.projectTitle}</h3>
                <p className="text-gray-600 mb-4">
                  By {presentation.name}, Age {presentation.age}
                </p>
                <p className="text-gray-700">{presentation.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

