import { Canvas } from "@react-three/fiber";
import RotateCube from "./rotateCube/RotateCube";

const App = () => {
  return (
    <div className="mt-12">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <RotateCube />
      </Canvas>
    </div>
  )
}

export default App;