import pic1 from '/public/images_hexa/pica.png'
import pic2 from '/public/images_hexa/picb.png'
import pic3 from '/public/images_hexa/picc.png'
import pic4 from '/public/images_hexa/picd.png'
import pic5 from '/public/images_hexa/pice.png'
import pic6 from '/public/images_hexa/picf.png'
import pic7 from '/public/images_hexa/picg.png'
import pic8 from '/public/images_hexa/pich.png'
import pic9 from '/public/images_hexa/pici.png'
import pic10 from '/public/images_hexa/picj.png'
import pic11 from '/public/images_hexa/pick.png'
import pic12 from '/public/images_hexa/picl.png'


import './service1.css'
import Image from 'next/image'
import My_Btn from '@/ani_btn/btn'
import Link from 'next/link'

export default function page(){

    return(

<div className='bod'>    
<Link href="/">
<My_Btn/>    
</Link>
        <div className="main">	
	
 <h1>  Unlock Your Digital Potential with Our Expertise</h1> 
  <section>
		<article>
			<figure>
				{/* <h2>'Creative'</h2> */}
				<br/>
				<p>Building Tomorrows Websites Today</p>
			</figure>
			 <Image alt src={pic1}/>
			 </article>
		<article>


        <figure>
		<br/>
				<p>Data Optimization Expertise</p>
			</figure>
			<Image alt src={pic2}/>
		</article>
	 <article>
			<figure>
				<br/>
			<p>System Management Excellence</p>
			</figure>
			<Image alt src={pic3}/>
		</article>  
		 <article>
			<figure>
				<br/>
			<p>Resolving Bugs with Expertise</p>
			</figure>
			<Image alt src={pic4}/>
		</article> 
		<article>
			<figure>
				<br/>
					<p>Content Management Made Easy</p>
			</figure>
			<Image alt src={pic5}/>
		</article> 
		 <article>
			<figure>
				<br/>
				<p>Elevate Your Web Experience</p>
			</figure>
			<Image alt src={pic6}/>
		</article>
	 <article>
			<figure>
				<br/>
				<p>Dominate Search Rankings</p>
			</figure>
			<Image alt src={pic7}/>
		</article>
		<article>
			<figure>
				<br/>
				<p>Maximize Website Efficiency</p>
			</figure> 
			<Image alt src={pic8}/>
		</article>
		<article>
			<figure>
		<br/>
				<p>Empower Your E-commerce</p>
			</figure>
			<Image alt src={pic9}/>
	</article>
		<article>
			<figure>
			<br/>
				<p>Your Logo, Our Artistry</p>
			</figure>
			<Image alt src={pic10}/>
	</article> 
		<article>
			<figure>
				<br/>
				<p>Elevate User Experiences</p>
			</figure>
			<Image alt src={pic11}/>
		</article>
		<article>
			<figure>
			<br/>
				<p>Connecting Your Digital World</p>
			</figure>
			<Image alt src={pic12}/>
		</article> 
  </section>

			
  <svg width="0" height="0">
  <defs>
    <clipPath id="hexagono" clipPathUnits="objectBoundingBox">
      <polygon points=".25 0, .75 0, 1 .5, .75 1, .25 1, 0 .5" />
    </clipPath>
  </defs>
</svg>



        </div>

		</div>        
    )
}
