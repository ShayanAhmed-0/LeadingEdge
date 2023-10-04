import BookFlip from "@/components/book/BookFlip";
import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/navbar/Navbar";
import React from "react";
const page = () => {
  return(
    <div>
      <Navbar/> 
  <BookFlip />
  <Footer/>
  </div>
  );
};

export default page;
