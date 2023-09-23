"use client"
import ContactusComp from '@/components/ContactusComp'
import React from 'react'
import Navbar from '@/layout/navbar/Navbar'
import Footer from '@/layout/footer/Footer'


const page = () => {
  return (
    <div>
      <Navbar/>
      <ContactusComp/>
      <Footer/>
    </div>
  )
}

export default page
