import Link from "next/link"
import ExpandableDescription from "../shared/ExpandableDescription"
import Image from "next/image"

export default function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="relative h-48">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <Link href={`/programs/${program.slug}`}>{program.title}</Link>
        </h3>
        <ExpandableDescription description={program.description} details={program.details} />
        <Link
          href={`/programs/${program.slug}`}
          className="inline-block mt-4 text-brand-blue font-semibold"
        >
          View program →
        </Link>
      </div>
    </div>
  )
}
