import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative h-[600px]">
        <Image
          src="/placeholder.svg"
          alt="Mongolian cultural celebration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Mongolian Cultural Center in North America</h1>
            <p className="text-xl mb-8">Preserving and sharing the rich cultural heritage of Mongolia with communities across North America</p>
            <Link 
              href="/about" 
              className="bg-brand-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg inline-block"
            >
              Discover Our Center
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Experience Mongolian Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/placeholder.svg" 
                  alt="Learn Mongolian" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Learn Mongolian</h3>
                <p className="text-gray-600 mb-4">Join our language classes and discover the beauty of the Mongolian language</p>
                <Link 
                  href="/language-school"
                  className="text-brand-red hover:text-red-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/placeholder.svg" 
                  alt="Cultural Events" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Cultural Events</h3>
                <p className="text-gray-600 mb-4">Experience traditional festivals, music, dance, and authentic Mongolian cuisine</p>
                <Link 
                  href="/events"
                  className="text-brand-red hover:text-red-600 font-semibold"
                >
                  View Events →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/placeholder.svg" 
                  alt="Art & Crafts" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Art & Crafts</h3>
                <p className="text-gray-600 mb-4">Explore traditional Mongolian arts, crafts, and cultural workshops</p>
                <Link 
                  href="/programs"
                  className="text-brand-red hover:text-red-600 font-semibold"
                >
                  Discover More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Latest News</h3>
              <Link 
                href="/news" 
                className="bg-white text-brand-blue hover:bg-gray-100 font-bold py-2 px-6 rounded-md inline-block"
              >
                Read Our Blog
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <Link 
                href="/membership" 
                className="bg-white text-brand-blue hover:bg-gray-100 font-bold py-2 px-6 rounded-md inline-block"
              >
                Become a Member
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
              <Link 
                href="/donate" 
                className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md inline-block"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

