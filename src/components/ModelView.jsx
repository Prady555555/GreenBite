import { Html, OrbitControls, View } from "@react-three/drei"
import { Suspense } from "react"
import Iphone from "./Iphone"
import * as THREE from "three";
const ModelView = ({index , groupRef , gsapType, controlRef , setRotationState , item , size}) => {
  return (
    <View index={index} id={gsapType} className={` absolute mb-0 w-full h-full ${index===2 ? 'right-[-100%]' : ''}`}>
    <directionalLight position={[2, 2, 2]} intensity={2} />
    <ambientLight intensity={0.4}/>
    <perspectiveCamera  position={[0,3,4]}/>
    <OrbitControls 
    makeDefault
    ref={controlRef}
    enableZoom={false}
    enablePan={false}
    rotateSpeed={0.4}
    target={new THREE.Vector3(0,-2,0)}
    onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
    />
    <group ref={groupRef} name={`${index===1}?'small' : "large"`} position={[0,-2,0]}>
    <Suspense fallback={<Html><div>Loading...</div></Html>}>
    <Iphone  scale={index===1 ?[0.2,0.2,0.2]:[0.3,0.3,0.3]}
    item={item}
    size={size}
    
    />
    </Suspense>
    </group>
    
    </View>
  )
}

export default ModelView