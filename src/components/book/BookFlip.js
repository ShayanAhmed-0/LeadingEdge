'use client'
import Image from 'next/image';
import './BookFlip.css'
import React from 'react'
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

    <div className="book">
      <div id="pages" className="pages">
        <div className="page">
          <div className="lg:flex lg:flex-col bg-black h-full">
            <Image
              src={pic}
              height={800}
              width={500}
            />
          </div>
        </div>
        <div className="page">
        <div className="lg:flex lg:flex-col bg-black h-full">
            <Image 
              src={logo}
              height={800}
              width={500}
            />
          </div>
        </div>
        <div className="page">
          <h1 className=''>
            PAge3
          </h1>
          <div className='lg:text-xl md:text-lg mobile:text-xs'>
            <Typewriter
              options={{
                strings: ['Four friends, driven by a shared passion for web development, embarked on a freelancing journey a year ago. Their humble beginnings were marked by sleepless nights and endless coding marathons, but their dedication knew no bounds. Over time, their skills evolved, and they transformed simple websites into captivating digital experiences. Word of their talent spread, clients multiplied, and success beckoned. With unwavering teamwork and a commitment to excellence, they conquered challenges, turning dreams into a thriving reality. Today, this company stands as a testament to friendship, perseverance, and the boundless possibilities of the digital world they have harnessed.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="page">
        <div className="lg:flex lg:flex-col bg-black h-full">
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
        <div className="lg:flex lg:flex-col bg-black h-full">
            <Image
              src={pic2}
              height={800}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default BookFlip