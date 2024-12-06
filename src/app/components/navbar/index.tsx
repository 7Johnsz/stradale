"use client"

import Logo from "@/public/logo.png"
import Image from "next/image";
import { useState, useEffect } from 'react'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: "home", label: "Inicio" },
  { to: "about", label: "Sobre nós" },
  { to: "experience", label: "Stradale Experience" },
  { to: "contact", label: "Contato" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'
    }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={scrollToTop}>
            <Image
              src={Logo}
              alt="Stadale Logo"
              width={40}
              height={40}
            />
          </button>
          <div className="hidden md:flex space-x-4 text-sm">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy
              smooth
              offset={-70}
              duration={500}
              className="block text-white hover:text-gray-300 py-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
