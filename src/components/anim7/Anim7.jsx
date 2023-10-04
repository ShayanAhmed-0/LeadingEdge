"use client"
import './anim7.css'
import { useEffect } from 'react'


export default function Anim7(){
    useEffect(() => {
        if (typeof window !== "undefined") {
          import("scrollreveal").then((module) => {
            const ScrollReveal = module.default;
            const scrollReveal = ScrollReveal();
    
            // Configure your ScrollReveal animations
            const revealConfig = {
              origin: "top",
              distance: "120px",
              duration: 1500,
              delay: 100,
              reset: true,
            };
    
            const revealConfig1 = {
              origin: "bottom",
              distance: "120px",
              duration: 1500,
              delay: 100,
              reset: true,
            };
    
            // Apply ScrollReveal to your elements
            scrollReveal.reveal(".hello", revealConfig);
            scrollReveal.reveal(".hello1", revealConfig1);
          });
        }
      }, []);
    return(
<div className='main'>


{/* 
<h1 className='h1a'>Technologies</h1> */}
<div className='div_a'> 
<ul>
{/* <h1 
          className="flex flex-col items-center justify-center mt-12 mb-12 text-4xl antialiased font-extrabold tracking-wide text-center text-transparent uppercase bg-center bg-cover bg-clip-text textsm:text-7xl"
          style={{
            backgroundImage:
              "url(https://media.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif)",
          }}>
          Technologies
        </h1> */}
<h1 className='h1a'>Technologies</h1>
<br/>

    <li className='li_a hello' id="li_1" >
        <div class="icon"><i class="fa-brands fa-html5"></i></div>
        <div class="title">HTML</div>
        <div class="descr">Mastering HTML for your Digital Success.</div>
    </li>
    <li className='li_a hello1' id="li_2" >
        <div class="icon"><i class="fa-brands fa-css3"></i></div>
        <div class="title">CSS</div>
        <div class="descr">Crafting Style with CSS Excellence.</div>
    </li>
    <li className='li_a hello' id="li_3" >
        <div class="icon"><i class="fa-brands fa-js"></i></div>
        <div class="title">Javascript</div>
        <div class="descr">Elevate Your Web with JavaScript Mastery.</div>
    </li>
    <li className='li_a hello1' id="li_4" >
        <div class="icon"><i class="fa-brands fa-python"></i></div>
        <div class="title">Python</div>
        <div class="descr"> Your Code, Our Expertise.</div>
    </li>
    <li className='li_a hello' id="li_5" >
        <div class="icon"><i class="fa-brands fa-java"></i></div>
        <div class="title">Java</div>
        <div class="descr">Your Applications, Our Expertise.</div>
    </li>



   
    <li className='li_a hello1' id="li_7" >
        <div class="icon"><i class="fa-brands fa-shopify"></i></div>
        <div class="title">Shopify</div>
        <div class="descr"> Fueling Your E-commerce Dreams.</div>
    </li>
    <li className='li_a hello' id="li_9">
        <div class="icon"><i class="fa-brands fa-node-js"></i></div>
        <div class="title">Nextjs</div>
        <div class="descr">Navigating Web Excellence.</div>
    </li>
    <li className='li_a hello1' id="li_8" >
        <div class="icon"><i class="fa-solid fa-database"></i></div>
        <div class="title">SQL and NoSQL DataBases</div>
        <div class="descr"> Your Data&apos;s Best Friend.</div>
    </li>
    <li className='li_a hello' id="li_6" >
        <div class="icon"><i class="fa-brands fa-php"></i></div>
        <div class="title">PHP</div>
        <div class="descr">Powering Your Web Solutions.</div>
    </li>
    <li className='li_a hello1' id="li_10" >
        <div class="icon"><i class="fa-brands fa-wordpress"></i></div>
        <div class="title">Wordpress</div>
        <div class="descr">Crafting Your Web Success.</div>
    </li>

</ul>
</div>

<br/>
<br/>










</div>
    )
}