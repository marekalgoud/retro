import React from 'react'
import * as THREE from 'three'

function Triangle({ position, width, height, color, rotation }) {

const triangleVertices = [[-width, 0, 0], [width, 0, 0], [0, height, 0]]
const triangleFaces = [[ 0, 1, 2]]

// const triangle = new THREE.Triangle([0, 0, 0], [width, 0, 0], [0, height, 0]);

// console.log(triangle.a, triangle.b, triangle.c)
  return (
    <mesh position={position} rotation={rotation}>
      <geometry attach="geometry"
        vertices={triangleVertices.map(v => new THREE.Vector3(...v))}
        faces={triangleFaces.map(f => new THREE.Face3(...f))} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Triangle
