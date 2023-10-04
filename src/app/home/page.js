import My_Hero_Section from '@/components/My_Hero_Section'
import React from 'react'
import '@/components/home_page.css'
import Navbar from '@/layout/navbar/Navbar'
import Footer from '@/layout/footer/Footer'

const page = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
        <My_Hero_Section/>
        <Footer/>
    </div>
  )
}

export default page