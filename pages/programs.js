import Link from "next/link"
import ProjectCard from "../components/programs/ProjectCard"
import { loadPublished } from "../lib/content"
import Image from "next/image"
import background from "../photos/backgrounds/04.jpg"

export default function Projects({ projects }) {
  const featured = projects.find(program => program.slug === "program-1") || projects[0]
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src={background} alt="Mongolian cultural projects" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Programs</h1>
            <p className="text-xl">Discover our ongoing programs and initiatives</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 && <p>New programs will be announced here.</p>}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
      {featured && <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-lg shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto"><Image src={featured.image || "/placeholder.svg"} alt={featured.title} fill className="object-cover" /></div>
              <div className="p-8 flex flex-col justify-center"><h2 className="text-2xl font-bold text-white mb-4">Featured: {featured.title}</h2><p className="text-gray-100 mb-6">{featured.description}</p><Link href={`/programs/${featured.slug}`} className="bg-white text-brand-blue hover:bg-gray-100 font-bold py-2 px-6 rounded-md inline-block self-start">Explore Program</Link></div>
            </div>
          </div>
        </div>
      </section>}
      <section className="py-16 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl font-bold mb-6">Ready to Start Your Cultural Journey?</h2><p className="text-xl text-gray-600 mb-8">Enroll in one of our programs today and begin your exploration of Mongolian culture.</p><Link href="/get-involved/volunteer" className="bg-brand-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg inline-block">Get Involved</Link></div></section>
    </div>
  )
}


export async function getServerSideProps() {
  return { props: { projects: await loadPublished("programs") } }
}
