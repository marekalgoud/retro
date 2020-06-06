import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'

import '../materials/TwoColorShaderMaterial'

function Cone({ mouse, position, width, height, color, color2, rotation }) {
  const ref = useRef()

  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.5)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
      ref.current.rotation.z = -x * 4
    }
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <coneBufferGeometry attach="geometry" args={[width, height, 32]} />
      <twoColorShaderMaterial attach="material" color={color} color2={color2} />
    </mesh>
  )
}

export default Cone
