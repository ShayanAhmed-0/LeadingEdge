"use client"
import React, { useState } from 'react'
import My_Animated_Btn from '../../components/My_Animated_Btn'
import Link from 'next/link'

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(

        <div className='flex justify-center'>

    <header className="w-full lg:w-4/5 mb-4 text-white shadow-xl rounded-lg bg-stone-500 body-font">

      {/* :DESKTOP MENU */}
      <div className="container flex items-center justify-between px-7 mx-auto py-4">
        {/* ::Site logo and Name */}
        <a href="#link" className="flex items-center flex-shrink-0 font-medium text-gray-900 title-font md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2 text-white rounded-full bg-gradient-to-br from-black to-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="ml-3 text-xl antialiased font-semibold text-yellow-50">LeadingEdge</span>
        </a>
        {/* ::Navbar */}
        <nav className="flex-wrap items-center justify-center hidden text-base tracking-wide md:flex">
          <a href="#link" className="mr-8 hover:text-yellow-50">Home</a>
          <a href="#link" className="mr-8 hover:text-yellow-50">Prices</a>
          <a href="#link" className="mr-8 hover:text-yellow-50">About</a>
          <Link href="/contactus" className="mr-8 hover:text-yellow-50">Contact</Link>
        </nav>
        {/* ::Avatar */}
        <div className="hidden ml-auto mr-4 cursor-pointer sm:inline-flex md:ml-0 md:mr-0">
          <My_Animated_Btn/>
        </div>
        {/* ::Burger icon standard */}
        <button 
          className="rounded-md md:hidden active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-50 rounded-md bg-gradient-to-br from-black to-white hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="rounded-lg flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase md:hidden bg-gray-50">
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-yellow-50 hover:bg-black">Solutions</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-yellow-50 hover:bg-black">Prices</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-yellow-50 hover:bg-black">About</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-yellow-50 hover:bg-black">Contact</a>
        </div>
      }
    </header>
 
        </div>
    )

}