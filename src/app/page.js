import ContactusComp from '@/components/ContactusComp'
import My_Hero_Section from '@/components/My_Hero_Section'
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
   <>
   <div className='bg-stone-700'> 
   {/* <My_Hero_Section/> */}
   {/* <My_Contact_Form/> */}
{/* <My_Service1/> */}



   <ContactusComp/>
   </div>
   </>
  )
}
