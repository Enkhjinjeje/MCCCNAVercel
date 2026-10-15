import Link from "next/link"
import ExpandableDescription from "../shared/ExpandableDescription"
import Image from "next/image"

export default function ProjectCard({ project }) {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2"><Link href={`/programs/${project.slug}`}>{project.title}</Link></h3>
        <ExpandableDescription description={project.description} details={project.details} />
        <Link href={`/programs/${project.slug}`} className="text-brand-blue font-semibold" style={{display:"inline-block",marginTop:16}}>View program →</Link>
      </div>
    </div>
  )
}

