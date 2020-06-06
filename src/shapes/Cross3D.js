import React, {useRef} from 'react'
import { useFrame } from 'react-three-fiber'

import { getMouseDegrees } from '../helpers/getMouseDegrees'
import '../materials/ThreeColorShaderMaterial'

function Cross({ rotation, mouse, position, size, weight, depth=0.2, color, color2="#000000", color3="#FF0000" }) {

  const ref = useRef()

  useFrame(() => {
    const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.5)

    ref.current.rotation.x = y
    ref.current.rotation.y = x
  })

  return (
    <group ref={ref} position={position} rotation={rotation}>
    <mesh>
      <boxBufferGeometry attach="geometry" args={[size, weight, depth ]} />
      <threeColorShaderMaterial attach="material" color={color} color2={color2} color3={color3} />
    </mesh>
    <mesh>
      <boxBufferGeometry attach="geometry" args={[weight, size, depth ]} />
      <threeColorShaderMaterial attach="material" color={color} color2={color2} color3={color3} />
    </mesh>
    </group>
  )
}

export default Cross
