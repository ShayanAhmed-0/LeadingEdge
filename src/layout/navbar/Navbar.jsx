"use client"
import React, { useState, useEffect } from 'react'
import My_Animated_Btn from '../../components/My_Animated_Btn'
import Link from 'next/link'
import Image from 'next/image'
// import logo from '/public/Logo/2-modified.png'
import logo from '../../../public/Logo/2-modified.png'

// import logo_main from '/public/images_hexa/2-modified.png'
import { usePathname } from 'next/navigation';
import Messenger from '@/components/Messenger'



function applyanim(bt){
  // useEffect(() => {
    const button = document.getElementById(bt)
    if (button) {
    const textButton = button.textContent
    button.textContent = "";
    
    [...textButton].map((letter, index) => {
      let duration
      index === 0 ? duration = "0.05s" : duration = `${(index + 1) * 0.05}s`
      let newSpan = document.createElement("span")
      newSpan.classList.add("backface-hidden", "not-italic", "transition-all", "duration-150", "ease-linear", "transform", "group-hover:animate-jump")
      newSpan.style.animationDelay = `${duration}` // Animation delay
      newSpan.setAttribute("aria-hidden", "true")
      newSpan.innerHTML = `${letter === " " ? "&nbsp;" : letter}` // Keep space between words

      return button.appendChild(newSpan)
    })
  // }, [])
    }
}
export default function Navbar(){
  

    const [isOpen, setIsOpen] = useState(false)
    // function applyanim(bt){
    //   useEffect(() => {
    //     const button = document.getElementById(bt)
    //     const textButton = button.textContent
    //     button.textContent = "";
        
    //     [...textButton].map((letter, index) => {
    //       let duration
    //       index === 0 ? duration = "0.05s" : duration = `${(index + 1) * 0.05}s`
    //       let newSpan = document.createElement("span")
    //       newSpan.classList.add("backface-hidden", "not-italic", "transition-all", "duration-150", "ease-linear", "transform", "group-hover:animate-jump")
    //       newSpan.style.animationDelay = `${duration}` // Animation delay
    //       newSpan.setAttribute("aria-hidden", "true")
    //       newSpan.innerHTML = `${letter === " " ? "&nbsp;" : letter}` // Keep space between words
    
    //       return button.appendChild(newSpan)
    //     })
    //   }, [])
    // }
    useEffect(() => {
      applyanim('bt1');
      applyanim('bt2');
      applyanim('bt3');
      applyanim('bt4');
    }, []); 

    const [showMessenger, setShowMessenger] = useState(false); // Initialize the state

  const toggleMessenger = () => {
    console.log('clicked')
    setShowMessenger(!showMessenger);
  };

  const pathname = usePathname()

  if (pathname === '/') {
    return null;
  }

    return(
<>
        <div className='flex justify-center'>

    <header className="w-full mb-4 text-white border-none rounded-lg shadow-lg shadow-black/75 lg:w-4/5 bg-gradient-to-tr from-stone-900 to-stone-600 body-font">

      {/* :DESKTOP MENU */}
      <div className="flex items-center justify-between py-3 mx-auto px-7">
        {/* ::Site logo and Name */}
        <a href="/home" className="flex items-center flex-shrink-0 font-medium text-gray-900 title-font md:mb-0">
<Image src={logo} className='w-16 h-16 rounded-full'/>
<span className='text-yellow-50 text-[22px] ml-2'>LeadingEdge</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2 text-white rounded-full from-stone-600 to-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg> */}
        </a>
        {/* ::Navbar */}
        <nav className="flex-wrap items-center justify-center hidden text-base tracking-wide md:flex">
        <Link href="/home" ><button id="bt1" className="group relative px-5 py-2.5 flex justify-center outline-none border-none rounded bg-transparent font-bold font-lg hover:text-black hover:text-xl hover:font-extrabold text-base text-white tracking-wide transition duration-500 transform hover:-translate-y-1 active:top-0.5">

          HOME</button></Link>
          <Link href="/technologies"><button id="bt2" className="group relative px-5 py-2.5 flex justify-center outline-none border-none rounded bg-transparent font-bold font-lg hover:text-black hover:text-xl hover:font-extrabold text-base text-white tracking-wide transition duration-500 transform hover:-translate-y-1 active:top-0.5">
          TECHNOLOGIES</button></Link>
          <Link href="/about" ><button id="bt3" className="group relative px-5 py-2.5 flex justify-center outline-none border-none rounded bg-transparent font-bold font-lg hover:text-black hover:text-xl hover:font-extrabold text-base text-white tracking-wide transition duration-500 transform hover:-translate-y-1 active:top-0.5">
          ABOUT</button></Link>
          <Link href="/contactus"><button id="bt4" className="group relative px-5 py-2.5 flex justify-center outline-none border-none rounded bg-transparent font-bold font-lg hover:text-black hover:text-xl hover:font-extrabold text-base text-white tracking-wide transition duration-500 transform hover:-translate-y-1 active:top-0.5">
          CONTACT
          </button></Link>
        </nav>
        {/* ::Avatar */}
        <div onClick={toggleMessenger} className="hidden ml-auto mr-4 cursor-pointer sm:inline-flex md:ml-0 md:mr-0">
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
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase rounded-lg bg-gray-200/40 md:hidden">
          <Link href="/home" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">Home</Link>
          <Link href="/technologies" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">Technologies</Link>
          <Link href="/about" className="block px-3 py-2 font-bold text-black rounded-md font-base hover:text-yellow-50 hover:bg-black/70">About</Link>
          <Link href="/contactus" className="block px-3 py-2 font-bold text-black rounded-md font-lg hover:text-yellow-50 hover:bg-black/70">Contact</Link>
          <div onClick={toggleMessenger} className="flex justify-center w-full mt-1 md:hidden sm:hidden lg:hidden">
    <My_Animated_Btn/>
  </div>
        </div>
      }
    </header>
 
        </div>
        {showMessenger && <Messenger/>}
        </>
    )

}