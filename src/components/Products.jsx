
import VideoCarousel from "./VideoCarousel"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Products = () => {
  useGSAP(()=>{
    gsap.to('#product', {y:0 , opacity:1,delay:2.8})
    },[])
  
  return (
    
    <section className="  w-full h-full overflow-hidden  max-sm:pl-4  sm:pl-8 max-sm:pr-2 sm:pr-6  mt-5 ">
    
      <div className="mt-5   flex-wrap mb-5 " >
        <h1 id="product" className="product-title " >
          Products
        </h1>
       
      </div>
      <VideoCarousel/>
    
    </section>
  )
}

export default Products