import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from "three";


const RotateCube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => { 
    if (cubeRef.current) { 
      // cubeRef.current.rotation.x += 0.1
      // For rotation
      cubeRef.current.rotation.y += 0.1

      // for position
      // cubeRef.current.position.x += 0.1
      
      // cubeRef.current.rotation.z += 0.1
    }
  })

  return (
    <mesh ref={ cubeRef } scale={[4,4,4]}>
      <boxGeometry args={[1, 1, 1]}  />
      <meshStandardMaterial color='red' wireframe />
    </mesh>
  )
}

export default RotateCube