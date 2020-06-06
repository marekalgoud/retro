import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { getMouseDegrees } from '../helpers/getMouseDegrees'
import Triangle from './Triangle'


function CircleOfTriangle({ position, size, triangleSize=0.15, color, rotation, mouse }) {

  const ref = useRef()
  useFrame(() => {
    if(mouse) {
      const {x, y} = getMouseDegrees(mouse.current.x, mouse.current.y, 0.1)

      ref.current.rotation.x = y
      ref.current.rotation.y = x
    }
  })

  const triangles = []
  for(let x = -size; x <=  size; x += (triangleSize * 4) ) {
    for(let y = -size; y <= size; y += (triangleSize * 4)  ) {
      if((x * x + y * y) < size * size) {
        triangles.push(
            <Triangle key={'CircleOfTriangle' + x + '-' + y} position={[x, y , 0]} width={triangleSize} height={triangleSize} color={color} />
          )
      }
    }
  }
  return (
    <group ref={ref} position={position} rotation={rotation}>
      {triangles}
    </group>

  )
}

export default CircleOfTriangle
