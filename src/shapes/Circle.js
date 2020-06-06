import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'

function Circle({ mouse, position, size, color, onClick }) {

  const ref = useRef()
  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.1)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
    }
  })

  return (
    <mesh ref={ref} position={position} onClick={onClick}>
      <circleBufferGeometry attach="geometry" args={[size, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Circle
