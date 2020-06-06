import React, {useRef, useState} from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'

function Ring({ mouse, position, size, weight, color, color2 }) {

  if (!color2) {
    color2 = color
  }

  const ref = useRef()

  const [hovered, setHover] = useState(false)


  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.1)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
    }
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <ringBufferGeometry attach="geometry" args={[size - weight, size, 32]} />
      <meshStandardMaterial attach="material" color={hovered? color: color2} />
    </mesh>
  )
}

export default Ring
