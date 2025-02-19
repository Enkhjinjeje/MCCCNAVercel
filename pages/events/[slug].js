"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

const eventData = {
  "naadam-festival-2024": {
    id: 1,
    slug: "naadam-festival-2024",
    title: "Naadam Festival 2024",
    date: "July 11-13, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Seattle Center",
    image: "/placeholder.svg",
    description:
      "Experience the excitement of Mongolia's largest cultural festival featuring traditional sports, music, and dance performances.",
    details:
      "The Naadam Festival, known as 'The Three Games of Men', celebrates Mongolian culture through competitions in wrestling, horse racing, and archery. Join us for this vibrant celebration of Mongolian heritage and enjoy traditional food, music, and crafts alongside the exciting competitions.",
  },
  "lunar-new-year-2024": {
    id: 2,
    slug: "lunar-new-year-2024",
    title: "Lunar New Year Celebration",
    date: "February 10, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "MCCCW Center",
    image: "/placeholder.svg",
    description: "Welcome the Year of the Dragon with traditional ceremonies, performances, and festive activities.",
    details:
      "Celebrate the Lunar New Year with us as we welcome the Year of the Dragon. Enjoy traditional Mongolian and Asian performances, participate in cultural workshops, and savor delicious festive cuisine. This family-friendly event is a perfect way to experience the rich traditions of Lunar New Year celebrations.",
  },
  "music-workshop-2024": {
    id: 3,
    slug: "music-workshop-2024",
    title: "Traditional Music Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "MCCCW Music Hall",
    image: "/placeholder.svg",
    description: "Learn about Mongolian musical instruments and throat singing in this interactive workshop.",
    details:
      "Immerse yourself in the world of traditional Mongolian music with our expert instructors. This hands-on workshop will introduce you to various Mongolian instruments such as the morin khuur (horsehead fiddle) and the yatga (zither). You'll also get a chance to learn about the unique art of Mongolian throat singing. Suitable for all levels of musical experience.",
  },
  "summer-festival-2023": {
    id: 4,
    slug: "summer-festival-2023",
    title: "Mongolian Summer Festival 2023",
    date: "August 5-6, 2023",
    time: "11:00 AM - 7:00 PM",
    location: "Magnuson Park",
    image: "/placeholder.svg",
    description: "A celebration of Mongolian culture with food, music, and traditional games.",
    details:
      "Join us for a weekend of Mongolian culture at our annual Summer Festival. Enjoy authentic Mongolian cuisine, watch traditional dance and music performances, and participate in fun cultural games and activities. This family-friendly event is a great opportunity to experience the warmth and vibrancy of Mongolian hospitality.",
  },
  "art-exhibition-2023": {
    id: 5,
    slug: "art-exhibition-2023",
    title: "Contemporary Mongolian Art Exhibition",
    date: "May 20-June 10, 2023",
    time: "Gallery Hours: 10:00 AM - 5:00 PM",
    location: "MCCCW Gallery",
    image: "/placeholder.svg",
    description: "Explored modern interpretations of traditional Mongolian art forms by local artists.",
    details:
      "This exhibition showcases the work of contemporary Mongolian-American artists, blending traditional Mongolian artistic techniques with modern themes and mediums. From paintings and sculptures to multimedia installations, this exhibition offers a unique perspective on the evolving Mongolian-American cultural identity.",
  },
  "winter-solstice-2022": {
    id: 6,
    slug: "winter-solstice-2022",
    title: "Winter Solstice Celebration 2022",
    date: "December 21, 2022",
    time: "6:00 PM - 9:00 PM",
    location: "MCCCW Center",
    image: "/placeholder.svg",
    description: "Celebrated the winter solstice with traditional Mongolian customs and warm fellowship.",
    details:
      "Join us for a magical evening as we celebrate the winter solstice in true Mongolian style. Experience traditional rituals, enjoy warming foods, and participate in cultural activities that honor this important time of year. This event is a wonderful opportunity to connect with the community and learn about Mongolian winter traditions.",
  },
}

export default function EventPage({ event }) {
  const [registrationEmail, setRegistrationEmail] = useState("")

  const handleRegistration = (e) => {
    e.preventDefault()
    // Here you would typically send the registration to your backend
    console.log("Registered email:", registrationEmail)
    setRegistrationEmail("")
    alert("Thank you for registering!")
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, the event you're looking for doesn't exist.</p>
          <Link href="/event/events" className="bg-brand-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
                <div className="flex items-center text-gray-600">
                  <Clock className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-6 w-6 mr-2 text-brand-blue" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8">{event.details}</p>

              <form onSubmit={handleRegistration} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Register for this Event</h3>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={registrationEmail}
                    onChange={(e) => setRegistrationEmail(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="flex justify-between items-center">
                <Link href="/event/events" className="text-brand-blue hover:text-blue-700 font-semibold">
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

export async function getStaticPaths() {
  const paths = Object.keys(eventData).map((slug) => ({
    params: { slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const event = eventData[params.slug]

  return {
    props: {
      event,
    },
  }
}

