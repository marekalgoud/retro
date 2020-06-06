import React, {useRef} from 'react'
import { useFrame } from 'react-three-fiber'

import { getMouseDegrees } from '../helpers/getMouseDegrees'
import '../materials/ThreeColorShaderMaterial'

function Bar3D({ rotation, mouse, position, size, weight, number = 2, depth=0.2, color, color2="#000000", color3="#FF0000" }) {

  const ref = useRef()

  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.1)
      ref.current.rotation.x = x
      // ref.current.rotation.y = y
    }
  })

  const bar = []
  for(let i = 0; i < number; i++) {
    let angle = 0
    if(i % 2 === 1) {
      angle = (Math.PI / 180) * 90
    }
    bar.push(
      <mesh key={'bar3D-' + i} position={[(size / 2 - weight / 2 + 0.01) * i, (size / 2 - weight / 2 + 0.01) * i, 0]} rotation={[0, 0, angle]}>
        <boxBufferGeometry attach="geometry" args={[size, weight, depth ]} />
        <threeColorShaderMaterial attach="material" color={color} color2={color2} color3={color3} />
      </mesh>
    )
  }

  return (
    <group ref={ref} position={position} rotation={rotation}>
      { bar }
    </group>
  )
}

export default Bar3D
