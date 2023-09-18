"use client"
import React, { useState } from 'react'
import My_Animated_Btn from '../../components/My_Animated_Btn'
import Link from 'next/link'

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    return(

        <div className='flex justify-center'>

    <header className="w-full mb-4 text-white border-4 border-double rounded-lg shadow-xl lg:w-4/5 bg-stone-600 body-font border-black/40">

      {/* :DESKTOP MENU */}
      <div className="container flex items-center justify-between py-4 mx-auto px-7">
        {/* ::Site logo and Name */}
        <a href="#link" className="flex items-center flex-shrink-0 font-medium text-gray-900 title-font md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2 text-white rounded-full from-stone-600 to-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="ml-3 text-xl antialiased font-semibold text-yellow-50">LeadingEdge</span>
        </a>
        {/* ::Navbar */}
        <nav className="flex-wrap items-center justify-center hidden text-base tracking-wide md:flex">
          <a href="#link" className="mr-8 font-bold hover:text-black/80 font-lg hover:text-xl">Home</a>
          <a href="#link" className="mr-8 font-bold hover:text-black/80 font-lg hover:text-xl " >Prices</a>
          <a href="#link" className="mr-8 font-bold hover:text-black/80 font-lg hover:text-xl">About</a>
          <Link href="/contactus" className="mr-8 font-bold hover:text-black/80 font-lg hover:text-xl">Contact</Link>
        </nav>
        {/* ::Avatar */}
        <div className="hidden ml-auto mr-4 cursor-pointer sm:inline-flex md:ml-0 md:mr-0">
          <My_Animated_Btn/>
        </div>
        {/* ::Burger icon standard */}
        <button 
          className="rounded-md md:hidden active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:to-black/25"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 rounded-md text-yellow-50 from-stone-600 to-white/25 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-gray-200 rounded-lg md:hidden">
          <a href="#link" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">Solutions</a>
          <a href="#link" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">Prices</a>
          <a href="#link" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">About</a>
          <a href="#link" className="block px-3 py-2 font-bold text-black rounded-md font-lg hover:text-yellow-50 hover:bg-black/70">Contact</a>
        </div>
      }
    </header>
 
        </div>
    )

}