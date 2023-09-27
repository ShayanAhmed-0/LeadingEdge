'use client'
import Image from 'next/image';
import './bookFlip.css'
import React from 'react'
import Navbar from '@/layout/navbar/Navbar';
import Footer from '@/layout/footer/Footer';
import { useEffect, useState } from 'react';
import logo from '/public/Logo/Logos.png'
import pic from '/public/Images/LEcover.jpg'
import pic2 from '/public/Images/EndingPg.jpg'
import pic3 from '/public/Images/TitlePg.jpg'
import Typewriter from 'typewriter-effect';
import My_Team from '@/team/team';


const BookFlip = () => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 5000); // Set the duration for typing

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i;
      }
    }

    for (let i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      pages[i].addEventListener('click', function () {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('flipped');
          const previousSibling = this.previousElementSibling;
          if (previousSibling) {
            previousSibling.classList.remove('flipped');
          }
        } else {
          this.classList.add('flipped');
          const nextSibling = this.nextElementSibling;
          if (nextSibling) {
            nextSibling.classList.add('flipped');
          }
        }
      });
    }
  }, []);


  return (
<div> 
  <Navbar/>
  <br/>
  <br/>
  <br/>

    <div className="book">
      <div id="pages" className="pages">
        <div className="page">
          <div className="h-full bg-black lg:flex lg:flex-col">
            <Image
              src={pic}
              height={800}
              width={500}
            />
          </div>
        </div>
        <div className="flex items-center page">
        <div className="h-full bg-black bg-center lg:flex lg:flex-col">
            <Image 
              className='lg:pt-16 md:pt-14 sm:pt-12 tab:pt-8 ipad:pt-5 mobile:pt-10'
              src={logo}
              height={800}
              width={500}
            />
            <div></div>
          </div>
        </div>
        <div className="flex items-center page">
          <div className='text-center lg:text-xxl md:text-lg sm:text-sm mobile:text-xs line-h-10'>
            <Typewriter
              options={{
                strings: ['Four friends, united by web development passion, turned dreams into a thriving reality in one year, showcasing the boundless possibilities of their craft.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="page">
        <div className="h-full bg-black lg:flex lg:flex-col">
            <Image
              src={pic3}
              height={800}
              width={500}
            />
          </div>
        </div>
        <div className="page">
          <My_Team />
        </div>
        <div className="page">
        <div className="h-full bg-black lg:flex lg:flex-col">
            <Image
              src={pic2}
              height={800}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    
    <Footer/>
    </div>
  );
}

export default BookFlip