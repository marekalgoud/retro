import React, {useRef, useMemo} from 'react'
import { useFrame, createPortal } from 'react-three-fiber'
import { Text } from 'drei'
import * as THREE from 'three'

import '../materials/textShaderMaterial'

function Sphere({  position, rotation, size, color, onClick, text }) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.01
  })

  const [scene, target, camera] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#FFFFFF')
    const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight)
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.z = 5
    return [scene, target, camera]
  }, [])

  useFrame(state => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)
  })

  return (
    <>
    {createPortal(
        <Text
          color="#000000"
          fontSize={1}
          textAlign="justify"
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          {text}
        </Text>,
        scene
      )}
    <mesh ref={ref} position={position} rotation={rotation} onPointerDown={onClick} onClick={onClick}>
      <sphereBufferGeometry attach="geometry" args={[size, 64, 64]}  />
      <textShaderMaterial attach="material" texture={target.texture} color={color} map={target.texture} />
      {/* <meshStandardMaterial attach="material" color={color} map={target.texture} /> */}
    </mesh>
    </>
  )
}

export default Sphere
