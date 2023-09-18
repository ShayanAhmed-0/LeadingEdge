"use client"
import Link from "next/link";
// import React from "react";
import React, { useEffect } from 'react'


const My_Hero_Section = () => {

  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n=20, start = 0) => {
      let steps = "";
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100;
        let random1 = `${Math.random()*150}px`;
        let random2 = `${Math.random()*150}px`;
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])



  return (
    <div className="relative flex justify-end w-full h-full overflow-hidden bg-white bg-gradient-to-t from-black via-transparent to-black">
      {/* :HERO IMAGE */}
      <img
        src="https://cdn.staticcrate.com/stock-hd/effects/footagecrate-low-poly-background-black-wall-prev-full.png"
        alt=""
        className="absolute object-cover object-left w-full h-full sm:object-center opacity-70"
      />

      {/* :HERO MAIN CONTAINER */}
      <div className="relative flex flex-col justify-center w-full h-full py-28 xl:py-40 md:w-2/3 lg:w-1/2">
        {/* ::Hero title & text */}
        <div className="p-8 mx-5 text-white bg-black shadow-2xl bg-opacity-70 md:mx-0 rounded-xl md:rounded-r-none">
          <h1 className="text-3xl font-extrabold sm:text-5xl font-josefin">
            Turning Dreams, <br />
            <span className="text-yellow-400 text-opacity-80">
              into Deliverables:
            </span>{" "}
              Your Work, <br />
            Our Expertise
          </h1>
          <p className="font-medium tracking-wider text-gray-100 mt-14 font-firacode space-md">
            Explore a world your aspirations become reality. At our freelancing platform,
            we are committed to transforming your dreams into tangible deliverables. With our
            expert freelancers by your side, your vision is only a click away from a becoming a
            successful reality.
          </p>
        </div>

        {/* ::Hero button */}
        {/* <button className="relative inline-flex items-center w-full m-5 overflow-hidden text-2xl text-white transition-all duration-300 transform md:w-2/3 lg:w-2/5 font-firacode hover:translate-x-4">
          <span className="relative -top-0.5 mr-2">Explore</span>
          <img
            src="https://static.thenounproject.com/png/4474576-200.png"
            alt=""
            className="absolute w-20 left-32"
          />
        </button> */}

        <button className="relative inline-flex items-center w-full m-5 overflow-hidden text-2xl text-white transition-all duration-300 transform md:w-2/3 lg:w-2/5 font-firacode hover:translate-x-4">
        <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }} ></span>
        <p className="mt-10 font-extrabold "> Explore </p>
        <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true"></span>
    
          <img
            src="https://www.freeiconspng.com/thumbs/white-arrow-png/right-arrow-png-31.png"
            alt=""
            className="absolute w-20 mt-11 left-32 "
          />
        </button>


        {/* ::Social media */}
        <div className="absolute bottom-auto inline-flex items-center justify-around text-yellow-400 transform -translate-x-1/2 top-4 sm:top-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 md:flex-col">
          {/* Twitter */}
          <a href="#link" className="mx-3 transform hover:scale-110">
            <svg
              className="w-7 h-7"
              fill="currentColor"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          {/* Linkedin */}
          <a href="#link" className="mx-3 transform hover:scale-110">
            <svg
              className="w-7 h-7"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Google + */}
          <a href="#link" className="mx-3 transform hover:scale-110">
            <svg
              className="w-7 h-7"
              fill="currentColor"
              enableBackground="new 0 0 24 24"
              height="512"
              viewBox="0 0 24 24"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
              <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* :BOTTOM OPTIONS */}
      <div className="absolute bottom-0 flex items-end justify-around w-full transform -translate-x-1/2 left-1/2 md:w-2/3">
        {/* ::Our Story */}
        <a
          href="#link"
          className="relative w-40 py-5 font-bold text-center text-gray-600 transition-all duration-300 transform bg-white bg-opacity-80 group rounded-t-xl font-firacode hover:pb-14"
        >
          Our Story
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-8 h-8 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 opacity-0 left-1/2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </a>
        {/* ::Our Shop */}
        <a
          href="#link"
          className="relative w-40 py-5 font-bold text-center text-gray-600 transition-all duration-300 transform bg-white bg-opacity-80 group rounded-t-xl font-firacode hover:pb-14"
        >
          Our Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-8 h-8 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 opacity-0 left-1/2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </a>
        {/* ::Our Contact */}
        <Link
          href="/contactus"
          className="relative w-40 py-5 font-bold text-center text-gray-600 transition-all duration-300 transform bg-white bg-opacity-80 group rounded-t-xl font-firacode hover:pb-14"
        >
          Our Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-8 h-8 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 opacity-0 left-1/2 group-hover:opacity-100 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default My_Hero_Section;
