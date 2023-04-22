import { useVideoTexture } from "@react-three/drei"
import { useState } from "react"
import { DoubleSide } from "three"



export default function Video() {
    
    const [pause, setPause] = useState(false)
    
    const props = {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause
    }
    
    const videoTexture = useVideoTexture("./static/textures/video/spiderman-bailando.mp4", props)

    const playVideo = () =>{
        setPause(true)
    }

    return (
        <mesh receiveShadow position-z={ -5 } position-y={ 2 } position-x={0} rotation-y={ Math.PI * 0.5 } onClick={playVideo}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={videoTexture} side={DoubleSide} />
        </mesh>
    )
}