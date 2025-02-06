import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { CSSTransition } from "react-transition-group"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const nodeRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md relative z-50">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/library"
              className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider"
            >
              ABC LIBRARY
            </Link>
            <Link href="/events" className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider">
              EVENTS
            </Link>
            <Link href="/programs" className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider">
              PROGRAMS
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900 hover:text-brand-blue"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <CSSTransition in={isMenuOpen} timeout={300} classNames="mobile-menu" unmountOnExit nodeRef={nodeRef}>
        <div className="md:hidden" id="mobile-menu" ref={nodeRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/library"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              ABC LIBRARY
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              EVENTS
            </Link>
            <Link
              href="/programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              PROGRAMS
            </Link>
          </div>
        </div>
      </CSSTransition>
    </header>
  )
}

