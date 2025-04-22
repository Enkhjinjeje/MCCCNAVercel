"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Music,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const events2022 = [
  {
    id: 21,
    title: "Winter Solstice Celebration 2022",
    date: "December 21, 2022",
    time: "6:00 PM - 9:00 PM",
    location: "MCCCW Center",
    description: "Celebrated the winter solstice with traditional Mongolian customs and warm fellowship.",
    details:
      "Join us for a magical evening as we celebrate the winter solstice in true Mongolian style. Experience traditional rituals, enjoy warming foods, and participate in cultural activities that honor this important time of year. This event is a wonderful opportunity to connect with the community and learn about Mongolian winter traditions.",
    category: "Cultural Celebration",
    icon: <Award className="h-6 w-6 text-brand-yellow" />,
    attendees: 75,
    images: [
      "/placeholder.svg",
      "/placeholder.svg?text=Winter+Celebration",
      "/placeholder.svg?text=Solstice+Event",
      "/placeholder.svg?text=Cultural+Activities",
    ],
  },
  {
    id: 22,
    title: "Tulga Poetry Festival",
    date: "October 15, 2022",
    time: "3:00 PM - 7:00 PM",
    location: "Seattle Public Library",
    description: "A celebration of Mongolian poetry featuring readings from local Mongolian-American poets.",
    details:
      "The 'Tulga' poetry festival brought together Mongolian poets living and working in the United States. All participating authors generously donated their books to our library collection, enriching our cultural resources. The event included poetry readings, discussions about Mongolian literature, and networking opportunities for the Mongolian-American literary community.",
    category: "Arts & Literature",
    icon: <Music className="h-6 w-6 text-brand-blue" />,
    attendees: 60,
    highlight: true,
    images: [
      "/placeholder.svg",
      "/placeholder.svg?text=Poetry+Reading",
      "/placeholder.svg?text=Author+Signing",
      "/placeholder.svg?text=Literary+Discussion",
      "/placeholder.svg?text=Book+Collection",
    ],
  },
  {
    id: 23,
    title: "Mongolian Language Classes",
    date: "September - December 2022",
    location: "MCCCW Center",
    description: "Weekly Mongolian language classes for children and adults of all proficiency levels.",
    details:
      "Our Mongolian language program offered classes for beginners to advanced learners, focusing on reading, writing, and conversation skills. The curriculum incorporated cultural elements to provide a comprehensive understanding of the language in its cultural context. Classes were held every Saturday morning and were taught by experienced language instructors.",
    category: "Education",
    icon: <Users className="h-6 w-6 text-brand-green" />,
    attendees: 45,
    images: ["/placeholder.svg", "/placeholder.svg?text=Language+Class", "/placeholder.svg?text=Students+Learning"],
  },
  {
    id: 24,
    title: "Traditional Crafts Workshop",
    date: "August 27, 2022",
    time: "1:00 PM - 4:00 PM",
    location: "MCCCW Center",
    description: "Hands-on workshop teaching traditional Mongolian crafts and art techniques.",
    details:
      "Participants learned traditional Mongolian crafts including felt making, traditional pattern design, and basic leatherwork. The workshop was led by skilled artisans who shared their knowledge and techniques. All materials were provided, and participants took home their completed projects. The event was suitable for all skill levels and ages 12 and up.",
    category: "Workshop",
    icon: <Users className="h-6 w-6 text-brand-green" />,
    attendees: 30,
    images: [
      "/placeholder.svg",
      "/placeholder.svg?text=Craft+Making",
      "/placeholder.svg?text=Workshop+Activities",
      "/placeholder.svg?text=Finished+Projects",
    ],
  },
  {
    id: 25,
    title: "Naadam Festival 2022",
    date: "July 9-10, 2022",
    location: "Magnuson Park",
    description: "Annual celebration of Mongolian culture featuring traditional sports, music, and food.",
    details:
      "The 2022 Naadam Festival featured traditional Mongolian wrestling, archery, and horse racing demonstrations. Attendees enjoyed authentic Mongolian cuisine, traditional music and dance performances, and cultural exhibits. The event attracted over 500 visitors from the greater Seattle area and provided an opportunity to showcase Mongolian heritage and traditions to the broader community.",
    category: "Cultural Celebration",
    icon: <Award className="h-6 w-6 text-brand-yellow" />,
    attendees: 500,
    highlight: true,
    images: [
      "/placeholder.svg",
      "/placeholder.svg?text=Wrestling+Match",
      "/placeholder.svg?text=Archery+Competition",
      "/placeholder.svg?text=Horse+Racing",
      "/placeholder.svg?text=Cultural+Performance",
      "/placeholder.svg?text=Traditional+Food",
      "/placeholder.svg?text=Festival+Crowd",
    ],
  },
]

// 2022 Year in Review highlights
const yearHighlights = [
  {
    title: "Community Growth",
    description: "Our community grew by 35% in 2022, welcoming new families and individuals to our cultural center.",
    icon: <Users className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Cultural Preservation",
    description: "We launched 3 new initiatives focused on preserving Mongolian traditions and language.",
    icon: <Award className="h-8 w-8 text-brand-yellow" />,
  },
  {
    title: "Educational Impact",
    description: "Over 100 students participated in our language and cultural education programs.",
    icon: <Users className="h-8 w-8 text-brand-green" />,
  },
]

const ImageGallery = ({ images }) => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative mt-6 mb-4">
      {images.length > 3 && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </>
      )}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 hide-scrollbar gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-none w-64 h-48 relative rounded-lg overflow-hidden">
            <Image src={src || "/placeholder.svg"} alt={`Event image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

const EventItem = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`mb-12 p-6 rounded-lg border-2 ${event.highlight ? "border-brand-yellow" : "border-gray-200"} shadow-md`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center">
          {event.icon}
          <span className="ml-2 text-sm font-medium text-gray-600">{event.category}</span>
          {event.highlight && (
            <span className="ml-auto bg-brand-yellow text-white px-3 py-1 rounded-full text-sm font-bold">
              Featured Event
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
            <span className="text-sm">{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-2 text-brand-blue" />
              <span className="text-sm">{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <MapPin className="h-4 w-4 mr-2 text-brand-blue" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
          {event.attendees && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <Users className="h-4 w-4 mr-2 text-brand-blue" />
              <span className="text-sm">{event.attendees} Attendees</span>
            </div>
          )}
        </div>

        {/* Image Gallery */}
        {event.images && event.images.length > 0 && <ImageGallery images={event.images} />}

        <div className="text-gray-700">
          {isExpanded ? (
            <>
              <p className="whitespace-pre-wrap mb-4">{event.description}</p>
              {event.details && <p className="whitespace-pre-wrap">{event.details}</p>}
            </>
          ) : (
            <p className="whitespace-pre-wrap">{event.description}</p>
          )}
        </div>

        {event.details && (
          <button
            className="text-brand-blue hover:text-blue-700 font-semibold flex items-center w-fit"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
            {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Events2022() {
  // Sort events by date (most recent first)
  const sortedEvents = [...events2022].sort((a, b) => {
    // Extract month from date string for sorting
    const getMonth = (dateStr) => {
      if (dateStr.includes("January")) return 1
      if (dateStr.includes("February")) return 2
      if (dateStr.includes("March")) return 3
      if (dateStr.includes("April")) return 4
      if (dateStr.includes("May")) return 5
      if (dateStr.includes("June")) return 6
      if (dateStr.includes("July")) return 7
      if (dateStr.includes("August")) return 8
      if (dateStr.includes("September")) return 9
      if (dateStr.includes("October")) return 10
      if (dateStr.includes("November")) return 11
      if (dateStr.includes("December")) return 12
      return 0
    }
    return getMonth(b.date) - getMonth(a.date)
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src="/placeholder.svg" alt="2022 Mongolian events" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">2022 Events</h1>
            <p className="text-xl">A year of cultural celebration and community building</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Year in Review Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">2022 Year in Review</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              2022 was a pivotal year for the Mongolian Cultural Center as we expanded our programs, welcomed new
              community members, and strengthened our cultural preservation efforts.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {yearHighlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-700 italic">
                "2022 laid the foundation for our future growth and cultural impact in the community."
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">2022 Events</h2>

          <div className="space-y-8">
            {sortedEvents.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/events" className="text-brand-blue hover:text-blue-700 font-semibold">
            ← Back to All Events
          </Link>
        </div>
      </div>
    </div>
  )
}

