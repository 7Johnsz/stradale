"use client"

import Logo from "@/public/logo.png"
import Image from "next/image";

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
    }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="Stadale Logo"
            width={40}
          />
          <div className="hidden md:flex space-x-4 text-sm">
            <Link href="#" className="text-white hover:text-gray-300">Home</Link>
            <Link href="#" className="text-white hover:text-gray-300">Services</Link>
            <Link href="#" className="text-white hover:text-gray-300">About</Link>
            <Link href="#" className="text-white hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
