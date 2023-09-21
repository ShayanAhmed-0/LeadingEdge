'use client'
import './BookFlip.css'
import React from 'react'
import { useEffect } from 'react';

const BookFlip = () => {
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
          <div className="lg:flex lg:flex-col">
      {/* Image */}
      <div className="lg:w-full lg:p-4">
        <img
          src="https://imgd.aeplcdn.com/1200x900/cw/ec/22085/BMW-i8-Protonic-red-Right-Front-Three-Quarter-67333.jpg?wm=0&t=120929860&t=120929860" 
          alt="Image"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="lg:w-full lg:p-4">
        <p className="lg:text-xl text-xs ">Welcome to Our Website</p>
        <p className="text-black text-xs lg:text-lg">
          1. REACT JS<br/>
          2. TAILWIND CSS<br/>
          3. MONGO DB<br/>
        </p>
      </div>
    </div>
          </div>
          <div className="page"><h1>PAge2</h1></div>
          <div className="page"><h1>PAge3</h1></div>
          <div className="page"><h1>PAge4</h1></div>
          <div className="page"><h1>PAge5</h1></div>
          <div className="page"><h1>PAge6</h1></div>    
        </div>
      </div>
      
      );
}

export default BookFlip