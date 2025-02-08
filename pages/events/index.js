import Image from 'next/image'
import Link from 'next/link'
import bgImg from "../../02.jpg"
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Events() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src={bgImg}
          alt="Mongolian cultural events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Cultural Events</h1>
            <p className="text-xl">Join us in celebrating Mongolian culture through our diverse events</p>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {/* Featured Event */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:grid md:grid-cols-5 md:gap-6">
                <div className="relative h-64 md:h-full md:col-span-2">
                  <Image 
                    src="/placeholder.svg"
                    alt="Naadam Festival"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 rounded-md font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6 md:col-span-3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Naadam Festival 2024</h2>
                  <p className="text-gray-600 mb-4">Experience the excitement of Mongolia's largest cultural festival featuring traditional sports, music, and dance performances.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>July 11-13, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>Seattle Center</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/naadam-festival-2024"
                    className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular Events */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/placeholder.svg"
                    alt="Lunar New Year Celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Washington state Mongolian Parents’ Community Activities (2021-2023)</h3>
                  <p className="text-gray-600 mb-4">Mongolian parents with children studying in Washington state schools have actively worked together as a team, making 2021, 2022, and 2023 productive and successful years.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>2021 - 2023</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/lunar-new-year-2024"
                    className="text-brand-red hover:text-red-600 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/placeholder.svg"
                    alt="Traditional Music Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Music Workshop</h3>
                  <p className="text-gray-600 mb-4">Learn about Mongolian musical instruments and throat singing in this interactive workshop.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>2:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/music-workshop-2024"
                    className="text-brand-red hover:text-red-600 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/placeholder.svg"
                    alt="Cooking Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Cooking Class</h3>
                  <p className="text-gray-600 mb-4">Learn to prepare authentic Mongolian dishes in this hands-on cooking class.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>April 5, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>6:00 PM - 8:30 PM</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/cooking-class-2024"
                    className="text-brand-red hover:text-red-600 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/placeholder.svg"
                    alt="Art Exhibition"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contemporary Mongolian Art Exhibition</h3>
                  <p className="text-gray-600 mb-4">Explore modern interpretations of traditional Mongolian art forms by local artists.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>May 20-June 10, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-brand-blue" />
                      <span>Gallery Hours: 10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/art-exhibition-2024"
                    className="text-brand-red hover:text-red-600 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-brand-blue rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated on Future Events</h2>
              <p className="text-gray-100 mb-6">Subscribe to our newsletter to receive updates about upcoming events and cultural programs.</p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                />
                <button
                  type="submit"
                  className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

