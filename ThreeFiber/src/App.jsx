import {Canvas} from '@react-three/fiber'
import { useRef } from 'react'
function AnimatedBox(){
  const boxRef= useRef();
}
function App() {
  return (
    <div id="canvas-container" style ={{width:'100vw', height:'100vh'}}>
      <Canvas style={{ background: 'white' }}>
        <mesh>
          <sphereGeometry args={[3,64,64]}/>
          <meshToonMaterial color={0xff0000} />
          <directionalLight position={[2,5,0]}/>
        </mesh>
      </Canvas>

    </div>
  )
}

export default App
