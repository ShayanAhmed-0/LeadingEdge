"use client"
import Navbar from '@/layout/navbar/Navbar'
import './anim2.css'
import Footer from '@/layout/footer/Footer'
import { useEffect } from 'react'

const Page = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
          import("scrollreveal").then((module) => {
            const ScrollReveal = module.default;
            const scrollReveal = ScrollReveal();
    
            // Configure your ScrollReveal animations
            const revealConfig = {
              origin: "left",
              distance: "120px",
              duration: 1500,
              delay: 100,
              reset: true,
            };
    
            const revealConfig1 = {
              origin: "right",
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
  return (
    
    <div> 
      <Navbar/>  
        
    {/* <h1 className='mt-6 mb-6 shead'>Unlock Your Digital Potential with Our Expertise</h1> */}
    <h1
       id="h1z"    className="flex flex-col items-center justify-center mt-12 mb-12 text-4xl antialiased font-extrabold tracking-wide text-center text-transparent uppercase bg-center bg-cover bg-clip-text textsm:text-7xl shead"
          style={{
            backgroundImage:
              "url(https://media.giphy.com/media/KX5nwoDX97AtPvKBF6/giphy.gif)",
          }}>
          Unlock Your Digital Potential with Our Expertise
        </h1>
<ul className='sul'>
<li className='sl1 hello' >
    <div class="sdate">Building Tomorrows Websites Today</div>
    <div class="stitle">WEBSITE DEVELOPMENT</div>
    <div class="sdescr">Response and Animated E-Commerce Websites.</div>
</li>
<li className='sl2 hello1' >
    <div class="sdate">Data Optimization Expertise</div>
    <div class="stitle">DATABASE MANAGEMENT</div>
    <div class="sdescr">SQL and NoSQL database management.</div>
</li>
<li className='sl3 hello' >
    <div class="sdate">System Management Excellence</div>
    <div class="stitle">MANAGEMENT SYSTEMS</div>
    <div class="sdescr">Hospitals, Schools Restaurants, and Marts.</div>
</li>
<li className='sl4 hello1' >
    <div class="sdate">Resolving Bugs with Expertise</div>
    <div class="stitle">DEBUGGING</div>
    <div class="sdescr">Detect Errors and Glitches in your site.</div>
</li>
<li className='sl5 hello' >
    <div class="sdate">Content Management Made Easy</div>
    <div class="stitle">CONTENT MANAGEMENT SYSTEMS (CMS)</div>
    <div class="sdescr">WordPress, Update and Manage data.</div>
</li>
<li className='sl6 hello1' >
    <div class="sdate">Elevate Your Web Experience</div>
    <div class="stitle">WEBSITE TECHNICALITIES</div>
    <div class="sdescr">Website Maintenance and Support</div>
</li>
<li className='sl7 hello' >
    <div class="sdate">Dominate Search Rankings</div>
    <div class="stitle">SEARCH ENGINE OPTIMIZATION (SEO)</div>
    <div class="sdescr">Enhancing SEO with Website Maintenance.</div>
</li>
<li className='sl8 hello1' >
    <div class="sdate">Maximize Website Efficiency</div>
    <div class="stitle">WEBSITE PERFORMANCE OPTIMIZATION</div>
    <div class="sdescr">Enhance Website Loading Speed, Performance, and Security.</div>
</li>
<li className='sl9 hello' >
    <div class="sdate">Empower Your E-commerce</div>
    <div class="stitle">E-COMMERCE INTEGRATION</div>
    <div class="sdescr">Integrate third-party tools i.e Payment gateways, Shipping solutions.</div>
</li>
<li className='sl10 hello1' >
    <div class="sdate">Your Logo, Our Artistry</div>
    <div class="stitle">LOGO DESIGNING</div>
    <div class="sdescr">Elevating Brand Identity.</div>
</li>
<li className='sl11 hello' >
    <div class="sdate">Elevate User Experiences</div>
    <div class="stitle">UI/UX DESIGN AND OPTIMIZATION</div>
    <div class="sdescr">Improved User-Interface Applications.</div>
</li>
<li className='sl12 hello1' >
    <div class="sdate">Connecting Your Digital World</div>
    <div class="stitle">API INTEGRATION</div>
    <div class="sdescr">Integration of APIs (Application Programming Interface) to Enhance Website Functionality.</div>
</li>
</ul>
{/* <div class="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div> */}
    
    
    <Footer/>
    </div>
    
  )
}

export default Page