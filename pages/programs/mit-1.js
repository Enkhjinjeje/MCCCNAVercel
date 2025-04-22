import Image from "next/image"
import Link from "next/link"

export default function Programs() {
  // Define the programs from the dropdown
  const programItems = [
    {
      name: "MIT 1",
      href: "/programs/mit-1",
      description:
        "Mongolian Identity-Mongolian Talent Phase 1 project supporting children who speak, read, and write in Mongolian.",
    },
    {
      name: "MIT 2",
      href: "/programs/mit-2",
      description:
        "The second phase of our Mongolian Identity-Mongolian Talent initiative, building on the success of MIT 1.",
    },
    {
      name: "Summer Camp",
      href: "/programs/summer-camp",
      description: "Immersive summer programs for children to learn about Mongolian culture, language, and traditions.",
    },
    {
      name: "Adult Volunteering",
      href: "/programs/adult-volunteering",
      description: "Opportunities for adults to contribute their skills and time to support our cultural center.",
    },
    {
      name: "TED x Project",
      href: "/programs/tEDx-project",
      description: "Inspiring talks and presentations showcasing Mongolian culture, innovation, and ideas.",
    },
    {
      name: "Arts Project",
      href: "/programs/arts-project",
      description: "Creative initiatives celebrating traditional and contemporary Mongolian arts and crafts.",
    },
    {
      name: "College Apps",
      href: "/programs/college-apps",
      description: "Support and guidance for students applying to colleges and universities.",
    },
    {
      name: "Amazon Book Reading",
      href: "/programs/amazon-book",
      description: "Reading programs featuring Mongolian literature available through Amazon.",
    },
    {
      name: "Field Trips",
      href: "/programs/field-trips",
      description: "Educational excursions to cultural sites, museums, and events related to Mongolian heritage.",
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src="/placeholder.svg" alt="Mongolian Cultural Center Programs" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl">
              Discover and engage with Mongolian culture through our diverse educational programs
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programItems.map((program) => (
              <div key={program.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg" alt={program.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link href={program.href} className="text-brand-red hover:text-red-600 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-lg shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image src="/placeholder.svg" alt="MIT 1 Program" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Featured: MIT 1 Program</h3>
                <p className="text-gray-100 mb-6">
                  Our flagship Mongolian Identity-Mongolian Talent program supports children who speak, read, and write
                  in Mongolian, carrying their cultural heritage. These talented children, who have earned national and
                  regional championship awards, are the pride of Mongolia.
                </p>
                <Link
                  href="/programs/mit-1"
                  className="bg-white text-brand-blue hover:bg-gray-100 font-bold py-2 px-6 rounded-md inline-block self-start"
                >
                  Explore MIT 1
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Cultural Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Enroll in one of our programs today and begin your exploration of Mongolian culture.
          </p>
          <Link
            href="/get-involved"
            className="bg-brand-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg inline-block"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}

