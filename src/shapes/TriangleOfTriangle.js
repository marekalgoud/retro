import React from 'react'
import Triangle from './Triangle'

function TriangleOfTriangle({ position, width, height, color, rotation }) {

  const triangles = []
  for(let x =  -width; x <=  width; x += 0.5) {
    for(let y = 0; y <= height; y += 0.5) {
        if(y / height > Math.abs(x/width)) {
          triangles.push(
            <Triangle key={'triangle' + x + '-' + y} position={[x, -y + height + 0.15, 0]} width={0.15} height={0.15} color={color} />
          )
        }

    }
  }
  return (
    <group position={position} rotation={rotation}>
      {triangles}
    </group>

  )
}

export default TriangleOfTriangle
