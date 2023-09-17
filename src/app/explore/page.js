"use client"

import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import Explorecontent from "../components/explorecontent";

export default function page() {
   
  return (
    <div className="">
      <Navbar/>
   <Explorecontent/>
   <div className="">
   <Footer/>
   </div>
    </div>
  )
}
