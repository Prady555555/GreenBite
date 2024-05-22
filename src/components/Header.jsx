import { topImage } from "../assets/images"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Header = () => {

    useGSAP(()=>{
    gsap.to("#title",{opacity:1,delay:1.5,y:0})
    gsap.to("#subtitle",{opacity:1, y:0,delay:1.8})
    gsap.to("#headerImage",{opacity:1,delay:2.5})
    },[])
  return (
    <header className="max-sm:pl-4  sm:pl-8 max-sm:pr-2 sm:pr-6   ">
        <div className="flex flex-row gap-6">
            <div>
                
                    <p className="title-Text mb-5 " id="title">
                      Discover <span className="text-lime-200">GreenBite</span>  Your Destination for Fresh, Organic Bliss.
                    </p>

                    <p className="header-Text" id="subtitle">
                    At <span className="text-lime-200 font-semibold">GreenBite</span>, we are passionate about bringing you the freshest organic produce and health-conscious meal kits right to your doorstep. Experience the convenience of healthy living today.
                   
                    </p>

                    
                
            </div>
            <div className="w-[2800px] h-[482px] max-sm:hidden opacity-0 mt-8 mr-3" id="headerImage">
                <img src={topImage} alt="header Image" className="w-full h-full" />
            </div>
        </div>
        
    </header>
  )
}

export default Header