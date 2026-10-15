import Link from "next/link"
import ExpandableDescription from "../shared/ExpandableDescription"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventCard({ event }) {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {" "}
        {/* 16:9 aspect ratio */}
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2"><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
          <span>{event.date}</span>
        </div>
        {event.time && (
          <div className="flex items-center text-gray-600 mb-2">
            <Clock className="h-5 w-5 mr-2 text-brand-blue" />
            <span>{event.time}</span>
          </div>
        )}
        {event.location && (
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
            <span>{event.location}</span>
          </div>
        )}
        <ExpandableDescription description={event.description} details={event.details} />
        <Link href={`/events/${event.slug}`} className="text-brand-blue font-semibold" style={{display:"inline-block",marginTop:16}}>View event →</Link>
      </div>
    </div>
  )
}

