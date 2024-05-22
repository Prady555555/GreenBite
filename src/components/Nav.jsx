import { useState } from "react";
import { logo } from "../assets/images"
import { MdFormatListBulleted } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  const [navbar , setNavbar] = useState(false);

  const openNav =()=>{
   setNavbar(!navbar)
  }
  useGSAP(()=>{
   gsap.to('#navlogo',{opacity:1,delay:1.2})
   gsap.to('#navlist',{opacity:1,delay:1.2})
   gsap.to('#nav-bar',{opacity:1,delay:1.2})
  },[])
  return (
    < >
        <header className=" w-full p-4  flex justify-between items-center pr-6 opacity-0" id="navlogo" >
            <div>
                 <img src={logo} alt="logo" className=" sm:w-[100px] w-[70px] sm:h-[100px] h-[70px] pt-1 rounded-full" /> 
            </div>
         
           <div className="flex gap-12 text-center max-sm:hidden pr-5 opacity-0 mr-10" id="navlist">
            <p className="logo-Text">Home</p>
            <p className="logo-Text">About Us</p>
            <p className="logo-Text">Testimonials</p>
            <p className="logo-Text">Contacts</p>
           </div>
           <div className="sm:hidden max-sm:flex pr-4" onClick={openNav}>
            {navbar ? <MdOutlineClose /> : <MdFormatListBulleted />  }
           </div>
        </header>
        <div className={navbar ? `max-sm:flex sm:hidden opacity-0 flex-col text-center mb-8 gap-1 `: `hidden`} id="nav-bar">
            <p className="logo-Text">Home</p>
            <p className="logo-Text">About Us</p>
            <p className="logo-Text">Testimonials</p>
            <p className="logo-Text">Contacts</p>
           </div>

    
    </>
  )
}

export default Nav