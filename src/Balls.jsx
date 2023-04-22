import { RoundedBox, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Balls() {
    const PATH = "/static/textures/balls/"
    
    const props = useTexture({

        roughnessMap: PATH + "Glass_Window_001_roughness.jpg",
        map: PATH + "Glass_Window_001_basecolor.jpg",
       // displacementMap: PATH + "Glass_Window_001_height.png",
        normalMap: PATH + 'Glass_Window_001_normal.jpg',
        metalnessMap: PATH + "Glass_Window_001_glass.jpg",
        aoMap: PATH + 'Glass_Window_001_ambientOcclusion.jpg',
        
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12} receiveShadow = {true}>
            <sphereGeometry />
           <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}