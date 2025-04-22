"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { CSSTransition } from "react-transition-group"

const NavItem = ({ href, text, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300) // Delay in milliseconds
  }

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center">
        <Link href={href} className="text-gray-900 hover:text-brand-blue font-bold text-sm tracking-wider">
          {text}
        </Link>
        {children && (
          <button className="ml-1 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
            <ChevronDown className="h-4 w-4" />
          </button>
        )}
      </div>
      {children && (
        <div
          className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

const DropdownItem = ({ href, text }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    role="menuitem"
  >
    {text}
  </Link>
)

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
            <NavItem href="/library/membership" text="ABC LIBRARY">
              <DropdownItem href="/library/membership" text="Membership" />
              <DropdownItem href="/library/book-review" text="Book Review" />
              <DropdownItem href="/library/book-catalog" text="Book Catalog" />
            </NavItem>
            <NavItem href="/school/mongolian-alphabet" text="LANGUAGE & CULTURE SCHOOL">
              <DropdownItem href="/school/mongolian-alphabet" text="Mongolian Alphabet Class" />
              <DropdownItem href="/school/reading-class" text="Reading Class" />
              <DropdownItem href="/school/speaking-class" text="Speaking Class" />
              <DropdownItem href="/school/creative-writing" text="Creative Writing Class" />
              <DropdownItem href="/school/bilingual-exam-prep" text="Bilingual Exam Preparation Class" />
              <DropdownItem href="/school/dairy-meal-cooking" text="Dairy Meal/Food Cooking Class" />
              <DropdownItem href="/school/art-class" text="Art Class" />
              <DropdownItem href="/school/felt-craft" text="Felt Craft Class" />
            </NavItem>
            <NavItem href="/programs/mit-1" text="PROGRAMS">
              <DropdownItem href="/programs/mit-1" text="MIT 1" />
              <DropdownItem href="/programs/mit-2" text="MIT 2" />
              <DropdownItem href="/programs/summer-camp" text="Summer Camp" />
              <DropdownItem href="/programs/adult-volunteering" text="Adult Volunteering" />
              <DropdownItem href="/programs/tEDx-project" text="TED x Project" />
              <DropdownItem href="/programs/arts-project" text="Arts Project" />
              <DropdownItem href="/programs/college-apps" text="College Apps" />
              <DropdownItem href="/programs/amazon-book" text="Amazon Book Reading" />
              <DropdownItem href="/programs/field-trips" text="Field Trips" />
            </NavItem>
            <NavItem href="/events/upcoming-events" text="EVENTS">
              <DropdownItem href="/events/upcoming-events" text="Upcoming Events" />
              <DropdownItem href="/events/2025" text="2025" />
              <DropdownItem href="/events/2024" text="2024" />
              <DropdownItem href="/events/2023" text="2023" />
              <DropdownItem href="/events/2022" text="2022" />
            </NavItem>
            <NavItem href="/get-involved/volunteer" text="GET INVOLVED">
              <DropdownItem href="/get-involved/volunteer" text="Volunteer" />
              <DropdownItem href="/get-involved/donate" text="Donate" />
              <DropdownItem href="/get-involved/intership" text="Interships" />
              <DropdownItem href="/get-involved/subscription" text="Subscription" />
              <DropdownItem href="/get-involved/monthly-newletter" text="Monthly Newsleeter" />
            </NavItem>
            <NavItem href="/shop/books" text="MONGOLIAN SHOP">
              <DropdownItem href="/shop/books" text="Books" />
              <DropdownItem href="/shop/souvenirs" text="Souvenirs" />
              <DropdownItem href="/shop/reviews" text="Reviews" />
              <DropdownItem href="/shop/gifts" text="Gifts" />
            </NavItem>
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
              href="/language-culture-school"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              LANGUAGE & CULTURE SCHOOL
            </Link>
            <Link
              href="/programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              PROGRAMS
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              EVENTS
            </Link>
            <Link
              href="/get-involved"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              GET INVOLVED
            </Link>
            <Link
              href="/mongolian-shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-brand-blue hover:bg-gray-50"
            >
              MONGOLIAN SHOP
            </Link>
          </div>
        </div>
      </CSSTransition>
    </header>
  )
}

