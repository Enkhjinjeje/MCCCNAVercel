import Link from "next/link"
import Image from "next/image"
import facebook from "../photos/social/icons8-facebook-50.png"
import instagram from "../photos/social/icons8-instagram-50.png"
import youtube from "../photos/social/icons8-youtube-50.png"
import tiktok from "../photos/social/icons8-tiktok-50.png"
import threads from "../photos/social/icons8-threads-50.png"
import medium from "../photos/social/icons8-medium-30.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6 "
          >
            <Image src={facebook || "/placeholder.svg"} height={25} width={25} alt="Facebook" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6"
          >
            <Image src={instagram || "/placeholder.svg"} height={25} width={25} alt="Instagram" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6"
          >
            <Image src={youtube || "/placeholder.svg"} height={25} width={25} alt="Youtube" />
            <span className="sr-only">Youtube</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6"
          >
            <Image src={tiktok || "/placeholder.svg"} height={25} width={25} alt="Tiktok" />
            <span className="sr-only">Tiktok</span>
          </a>
          <a
            href="https://www.threads.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6"
          >
            <Image src={threads || "/placeholder.svg"} height={25} width={25} alt="Threads" />
            <span className="sr-only">Threads</span>
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white sm:px-6"
          >
            <Image src={medium || "/placeholder.svg"} height={25} width={25} alt="Medium" />
            <span className="sr-only">Medium</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-SMmAHfDY2bF9zR0ow63195tD4TOqy2.jpeg"
              alt="Mongolian Cultural Center Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-400">
              Promoting and preserving Mongolian culture in North America through education, arts, and community
              engagement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-yellow">Visit Us</h3>
            <address className="text-gray-400 not-italic">
              <p>9634 Thoorsk St.</p>
              <p>Bothell, WA 98011</p>
              <p className="mt-2">Phone: (206) 209 9437</p>
              <p>Email: waculturalcenter@gmail.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-yellow">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4 text-sm">
            MCC is recognized by the state of Washington and IRS as a 501(c)3 non-profit organization. Our tax ID
            number is 99-5003658.
          </p>
          <p>&copy; {new Date().getFullYear()} Mongolian Cultural Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

