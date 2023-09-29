"use client"
import ContactusComp from '@/components/ContactusComp'
import Explorecontent from '@/components/explorecon/Explorecontent'
import Messenger from '@/components/Messenger'
import My_Hero_Section from '@/components/My_Hero_Section'
import Footer from '@/layout/footer/Footer'
import Navbar from '@/layout/navbar/Navbar'

import Image from 'next/image'
// import Navbar from './layout/navbar/Navbar'
// import Footer from './layout/footer/Footer'
// import My_Contact_Form from '@/components/My_Contact_Form'
// import My_Hero_Section from '../components/My_Hero_Section'
// import My_FAQS from './components/My_FAQS'
// import Test from './components/test/Test'
// import My_Anni_Cards from './components/cards/anni_card'
// import PricingCard from './components/PricingCard'

export default function Home() {
  

  return (

   <div className='bg-white'> 
   <Navbar/>
   <My_Hero_Section/>
   {/* <Explorecontent/> */}
   <Footer/>
   {/* <My_Contact_Form/> */}
{/* <My_Service1/> */}



   {/* <ContactusComp/> */}
   {/* <BookFlip /> */}
   </div>
 
  )
}
