import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState } from "react";

export default function Imagenes() {

    const PATH = "/static/textures/image/"
    const imagenes = ["spiderman.jpg", "ironman.jpg", "batman.jpg", "flash.jpg"];
    var idImage = 0;
    const [textureUrl, setTextureUrl] = useState(imagenes[idImage]);



    const props = useTexture({
        map: PATH + textureUrl
    })

    const changeImage = () => {
        const idAnterior = textureUrl
        do {
            idImage = Math.floor(Math.random() * imagenes.length);
        } while (idAnterior == imagenes[idImage]);

        setTextureUrl(imagenes[idImage])
    }

    return (
        <mesh receiveShadow position-x={ 5 } position-y={ 2 }  onPointerOver={changeImage}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}