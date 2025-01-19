import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-SMmAHfDY2bF9zR0ow63195tD4TOqy2.jpeg"
              alt="Mongolian Cultural Center Logo"
              width={100}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/language-school" 
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              LANGUAGE SCHOOL
            </Link>
            <Link 
              href="/events" 
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              EVENTS & PROGRAMS
            </Link>
            <Link 
              href="/visit" 
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              VISIT
            </Link>
            <Link 
              href="/get-involved" 
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              GET INVOLVED
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              MONGOLIAN SHOP
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/donate"
              className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md text-sm tracking-wider"
            >
              DONATE
            </Link>
            <Link href="/cart" className="text-gray-900 hover:text-brand-blue relative">
              <span className="absolute -top-1 -right-1 bg-brand-red text-white rounded-full h-4 w-4 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

