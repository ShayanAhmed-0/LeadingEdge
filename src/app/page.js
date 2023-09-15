import Image from 'next/image'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import My_Contact_Form from './components/My_Contact_Form'
import My_Hero_Section from './components/My_Hero_Section'
import My_FAQS from './components/My_FAQS'
import Test from './components/test/Test'
import My_Anni_Cards from './components/cards/anni_card'


export default function Home() {
  return (
   <>
   {/* <My_Hero_Section/> */}
   <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'> 
   <My_Anni_Cards/>
   <My_Anni_Cards/>
   <My_Anni_Cards/>
   </div>
   </>
  )
}
