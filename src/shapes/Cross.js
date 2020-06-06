import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'

function Cross({ position, size, weight, color, mouse }) {

  const ref = useRef()
  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.5)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh >
        <planeBufferGeometry attach="geometry" args={[size, weight]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[weight, size]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  )
}

export default Cross
