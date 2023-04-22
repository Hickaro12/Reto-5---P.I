import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Balls from './Balls'
import Floor from './Floor'
import { useRef } from 'react'
import Imagenes from './Imagenes'
import Video from './Video'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper,  SpotLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

export default function Experience() {
    const directionalLightRef = useRef()
    const hemispherelLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()
    
 
    //useHelper(directionalLightRef, DirectionalLightHelper, 1)
    //useHelper(hemispherelLightRef, HemisphereLightHelper, 8)
    useHelper(pointLightRef, PointLightHelper, 2.8)
    //useHelper(rectAreaLightRef, RectAreaLightHelper, 1)
    //useHelper(spotLightRef, SpotLightHelper, 10)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/*<directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} 
        intensity={1.5} />*/}
        {/*<hemisphereLight ref={hemispherelLightRef} castShadow intensity={1.5} />*/}
        {<pointLight  ref={pointLightRef} castShadow position={[2, 15, -15]} 
        intensity={1.5} />}
        {/*<rectAreaLight  ref={rectAreaLightRef} castShadow position={[0, 0, 0]} 
        intensity={10} />*/}
         {/*<spotLight ref={spotLightRef} castShadow position={[10, 6, -1]} 
        intensity={1.5} />*/}
        <ambientLight intensity={0.25} />
        <Imagenes/>
        <Video/>
        {/*<Balls/>*/}
        {/*<Floor/>*/}
    </>
}