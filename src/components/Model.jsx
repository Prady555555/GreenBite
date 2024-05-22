import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useEffect, useState } from "react"
import {RectangleYellow} from "../assets/images"
import { useRef } from "react"
import * as THREE from "three";
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { models, sizes } from "../constant"
import{animateWithGsapTimeline} from "../constant/animation"
const Model = () => {

    const [size, setSize] = useState('small');
    const [model , setModel] = useState({
        title:'Experience the enchantment of our stunning 3D Apple Basket.',
        color: ["#D3C43E", "#ffe7b9", "#6f6c64"],
        img:RectangleYellow,
    })
    const camerControllSmall = useRef();
    const camerControllLarge = useRef();
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    const [smallRotation,setSmallRotation] = useState(0);
    const [largeRotation,setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(()=>{
    if (size==="large") {
      animateWithGsapTimeline(tl,small,smallRotation,'#view1','#view2',{
        transform:'translateX(-100%)',
        duration:2
      })
    }
    if (size==="small") {
      animateWithGsapTimeline(tl,large,largeRotation,'#view2','#view1',{
        transform:'translateX(0)',
        duration:2
      })
    }

    },[size])

    useGSAP(()=>{
    gsap.to('#heading', {y:0 , opacity:1,delay:1.5})
    },[])
  return (
    <div className="max-sm:pl-4  sm:pl-8 max-sm:pr-2 sm:pr-6  mt-10">
     <div className="w-full h-full">
        <p id="heading" className="product-title">Take a closer Look
        </p>
        <div className="flex flex-col items-center mt-5">
            <div className=" w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
             <ModelView
             index={1}
             groupRef={small}
             gsapType='view1'
             controlRef={camerControllSmall}
             setRotaionState={setSmallRotation}
             item={model}
             size={size}
             />
               <ModelView
             index={2}
             groupRef={large}
             gsapType='view2'
             controlRef={camerControllLarge}
             setRotaionState={setLargeRotation}
             item={model}
             size={size}
             />
             <Canvas className="w-full h-full" style={{
                position:'fixed',
                top:0,
                right:0,
                left:0,
                rigth:0,
                overflow:'hidden'

             }}
             eventSource={document.getElementById('root')}
             >
               <View.Port/>
             </Canvas>
            </div>
            <div className=" relative flex items-center flex-col justify-center   bottom-[200px] cursor-pointer ">
             <p className=" text-center mb-10 text-xl font-medium ">{model.title}</p>
             <div className="flex-center">
              <ul className="color-container">
               {models.map((item,i)=>(
                <li key={i} className="w-6 h-6 rounded-full mx-2 " style={{backgroundColor:item.color[0]}} onClick={()=> setModel(item)} />
               ))}
              </ul>
              <button className="size-btn-container">
               {sizes.map(({label,value})=>(
                <span key={label} className="size-btn" style={{backgroundColor:size=== value ? 'white' : "transparent" , color:size=== value ? 'black' : 'white'}} onClick={()=> setSize(value)}>
                 {label}
                </span>
               ))}
              </button>
             </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Model