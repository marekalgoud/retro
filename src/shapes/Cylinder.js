import React, {useRef} from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'

import '../materials/TwoColorShaderMaterial'

function Cylinder({ mouse, position, rotation, width, height, color, color2 }) {
  const ref = useRef()

  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.6)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
      ref.current.rotation.z = x * 4
    }
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <cylinderBufferGeometry attach="geometry" args={[width, width, height, 32]} />
      <twoColorShaderMaterial attach="material" color={color} color2={color2} />
    </mesh>
  )
}

export default Cylinder
