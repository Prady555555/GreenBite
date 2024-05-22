import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { greenbite2 } from '../assets/video'
import { animateWithGsap } from '../constant/animation'
import { apple } from '../assets/images'
import { strawberry } from '../assets/images'
import { grapes } from '../assets/images'

const Features = () => {
  const videoRef  = useRef();
    useGSAP(()=>{
      gsap.to('#exploreVideo', {
        scrollTrigger: {
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
        },
        onComplete: () => {
          videoRef.current.play();
        }
      })
      animateWithGsap('#company', {y:0 , opacity:1}),
      animateWithGsap('.farm', {y:0 , opacity:1})
      animateWithGsap('.g_grow', {scale:2 , opacity:1, ease:'power1',duration:3},{scrub:5.5})
      animateWithGsap('.g_text', {y:0 , opacity:1, ease:'power2.inOut',duration:2})
        },[])
  return (
  <section className='w-full h-full overflow-hidden  max-sm:pl-4  sm:pl-8 max-sm:pr-2 sm:pr-6  mt-5'>
    <div className='w-full h-full'>
     <div>
        <h1 className='product-title' id='company'>
        Discover the entire tale of our company's growth.
        </h1>
     </div>
     <div className=' flex flex-col  justify-center items-center overflow-hidden' >
      <div className='mt-32 sm:mb-[100px] sm:pl-24 pl-15'>
       <h2 className=' farm '>
       Farm-Fresh Bounty
       </h2>
       <h2 className=' farm '>
       Handcrafted Fruit, 
       </h2>
       <h2 className=' farm '>
       Veggie Baskets.
       </h2>
      </div>

      <div className='flex-center flex-col sm:px-10  '>
        <div className=' relative h-[50vh] w-full flex items-center'>
         <video playsInline id='exploreVideo' className=' w-full h-full object-cover object-center' preload='none' muted autoPlay ref={videoRef} >
          <source src={greenbite2} type='video/mp4'/>
         </video>
        </div>
        <div className='flex flex-col w-full relative'>
          <div className='feature-video-container'>
            <div className=' overflow-hidden flex-1 h-[50vh]'>
             <img src={apple} alt="" className='feature-video g_grow' />
            </div>
            <div className=' overflow-hidden flex-1 h-[50vh]'>
             <img src={grapes} alt="" className='feature-video g_grow' />
            </div>
          </div>
          <div className='feature-text-container overl'>
           <div className='flex-1 flex-center'>
            <p className='feature-text g_text'>
            Discover GreenBite's journey from a small startup to a thriving organic food delivery service. <span className=' text-lime-200'>Experience our commitment to fresh, sustainable living, delivered conveniently to your doorstep. </span> 
            Join us in celebrating our growth story, rooted in passion and dedicated to healthy living for all.
            </p>
           </div>
           
           <div className='flex-1 flex-center'>
            <p className='feature-text g_text'>
            GreenBite's mission is to deliver fresh fruits within 24 hours, prioritizing quality and speed. <span className='text-lime-200'>We source directly from local farms to ensure peak freshness, bringing the farm to your doorstep for ultimate convenience and satisfaction.</span>  Experience the joy of crisp, flavorful fruits, delivered swiftly to enhance your healthy lifestyle.
            </p>
           </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  </section>
  )
}

export default Features