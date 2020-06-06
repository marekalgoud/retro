import React from 'react'
import Triangle from './Triangle'

function RectangleOfTriangle({ position, width, height, color, rotation }) {

  const triangles = []
  for(let x = 0; x <=  width; x += 0.5) {
    for(let y = 0; y <= height; y += 0.5) {
        triangles.push(
            <Triangle key={'RectangleOfTriangle' + x + '-' + y} position={[x, -y + height + 0.15, 0]} width={0.15} height={0.15} color={color} />
          )
    }
  }
  return (
    <group position={position} rotation={rotation}>
      {triangles}
    </group>

  )
}

export default RectangleOfTriangle
