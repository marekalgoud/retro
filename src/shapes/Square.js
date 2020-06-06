import React from 'react'
import * as THREE from 'three'

function Square({ position, size, color, rotation}) {
  return <mesh position={position} rotation={rotation}>
    <planeBufferGeometry attach="geometry" args={[size, size]} />
    <meshStandardMaterial attach="material" color={color} args={ [{ side: THREE.DoubleSide }] }/>
  </mesh>
}

export default Square
