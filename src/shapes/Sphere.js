import React, {useRef, useMemo} from 'react'
import { useFrame, createPortal } from 'react-three-fiber'
import {OrthographicCamera, Text } from 'drei'
import * as THREE from 'three'

import '../materials/textShaderMaterial'

function Sphere({  position, rotation, size, color, onClick, text }) {
  const ref = useRef()
  const cam = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.01
  })

  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('white')
    const target = new THREE.WebGLRenderTarget(2048, 2048)
    console.log(target)
    return [scene, target]
  }, [])

  useFrame(state => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, cam.current)
    state.gl.setRenderTarget(null)
  })

  return (
    <>
    <OrthographicCamera ref={cam} position={[0, 0, 10]} zoom={10} />
    {createPortal(
        <Text
          color="#000000"
          fontSize={30}
          lineHeight={1.5}
          textAlign="justify"
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          {text}
        </Text>,
        scene
      )}
    <mesh ref={ref} position={position} rotation={rotation} onClick={onClick}>
      <sphereBufferGeometry attach="geometry" args={[size, 64, 64]}  />
      <textShaderMaterial attach="material" texture={target.texture} color={color} map={target.texture} />
      {/* <meshStandardMaterial attach="material" color={color} map={target.texture} /> */}
    </mesh>
    </>
  )
}

export default Sphere
