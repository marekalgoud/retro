import React, { useRef, Suspense } from 'react'
import { navigate } from "@reach/router"
import { Canvas, useThree } from 'react-three-fiber'
import { Text, OrbitControls, OrthographicCamera, HTML } from "drei"
import random from 'canvas-sketch-util/random'
import Square from '../shapes/Square'
import Cross from '../shapes/Cross'
import Cross3D from '../shapes/Cross3D'
import Circle from '../shapes/Circle'
import CircleOfTriangle from '../shapes/CircleOfTriangle'
import Ring from '../shapes/Ring'
import Triangle from '../shapes/Triangle'
import TriangleOfTriangle from '../shapes/TriangleOfTriangle'
import Cylinder from '../shapes/Cylinder'
import Cone from '../shapes/Cone'
import Bar3D from '../shapes/Bar3D'
import Sphere from '../shapes/Sphere'


const COLORS = [
  '#00EBEA', // blue
  '#F3FF2B', // yellow
  '#FF0092', // pink
  '#FF7F34', // orange,
  '#6AFFA0', // green
]

const DEG = Math.PI / 180


function getMousePos(e) {
  return { x: e.clientX, y: e.clientY }
}

function Camera() {

  const { viewport } = useThree()
  const cam = useRef()

  let zoom = 20
  if (viewport.width < 520) {
    zoom = viewport.width / 320 * 12
  }

  return (
    <OrthographicCamera ref={cam} makeDefault position={[0, -5, 20]} zoom={zoom} />
  )

}

function Home() {

  const mouse = useRef({ x: 0, y: 0 })


  return (<Canvas onMouseMove={e => (mouse.current = getMousePos(e))}>
    <Suspense fallback={<HTML>loading...</HTML>}>
      <Camera />
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={3 * Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minZoom={20}
         />
      <ambientLight intensity={1} />

      <mesh position={[0, 5, 0]}>
        <Text
          color={COLORS[2]}
          fontSize={3}
          maxWidth={500}
          lineHeight={70}
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          Marek Algoud
      </Text>
      </mesh>

      <mesh position={[0, 0, 0]}>
        <Text
          color="#000000"
          fontSize={1.5}
          maxWidth={500}
          lineHeight={70}
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          back in
        </Text>
      </mesh>

      <mesh position={[-4, -5, 0]}>
        <Text
          color="#000000"
          fontSize={4.1}
          maxWidth={500}
          lineHeight={70}
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          the 90's
        </Text>
      </mesh>

      <mesh position={[-4, -5, 0.1]}>
        <Text
          color="#00EBEA"
          fontSize={4}
          maxWidth={500}
          lineHeight={70}
          font="/font/bangers.woff"
          anchorX="center"
          anchorY="middle">
          the 90's
        </Text>
      </mesh>

      {/* {objects} */}
      <mesh position={[0, 0, -0.1]}>
        <planeBufferGeometry attach="geometry" args={[25, 20]} />
        <meshStandardMaterial attach="material" color={COLORS[1]} />
      </mesh>

      {/* Square */}
      <Square position={[-8, 12, 0]} size={2} rotation={[0, 0, DEG * 45]} color={random.pick(COLORS)} mouse={mouse} />
      <Square position={[17, -8, -1]} size={2} rotation={[0, 0, DEG * 45]} color={random.pick(COLORS)} mouse={mouse} />
      <Square position={[17, -14, -2]} size={2} color={random.pick(COLORS)} mouse={mouse} />
      <Square position={[-14, 6, 0]} size={2} color={random.pick(COLORS)} mouse={mouse} />

      {/* Ring */}
      <Ring position={[-17, 15, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-8, 16, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-1, 12, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[13, 11, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[19, 11, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[18, 8, -1]} size={1.5} weight={0.2} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[19, 0, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[12, -15, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[18, -12, -1]} size={1.5} weight={0.2} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[12, -15, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-12, -13, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-16, -14, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-16.5, 0, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[-22, 0, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[24, 10, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />
      <Ring position={[16.5, 18, -1]} size={0.3} weight={0.1} color={random.pick(COLORS)} mouse={mouse} />

      {/* Cylinder */}
      <Cylinder position={[-12, 12, 2]} color={random.pick(COLORS)} color2="#000000" width={1.2} height={3.5} mouse={mouse} />
      <Cylinder position={[16, -18, 2]} color={random.pick(COLORS)} color2="#000000" width={1.2} height={3.5} rotation={[0, 0, DEG * 35]} />
      <Cylinder position={[20, 2, 2]} color={random.pick(COLORS)} color2="#000000" width={1.2} height={3.5} />


      {/* Cross */}
      <Cross position={[3, 12, 2]} rotation={[0, 0, DEG * 45]} size={2} weight={0.3} color={random.pick(COLORS)} mouse={mouse} />
      <Cross position={[20, 8, 2]} rotation={[0, 0, DEG * 45]} size={2} weight={0.3} color={random.pick(COLORS)} />
      <Cross position={[24, 18, 2]} rotation={[0, 0, DEG * 45]} size={1} weight={0.2} color={random.pick(COLORS)} mouse={mouse} />
      <Cross position={[-20, -8, 2]} rotation={[0, 0, DEG * 45]} size={1} weight={0.3} color={random.pick(COLORS)} />
      <Cross position={[-24, -12, 2]} rotation={[0, 0, DEG * 45]} size={2} weight={0.3} color={random.pick(COLORS)} />


      {/* Cross3D */}
      <Cross3D position={[-12, -12, 2]} rotation={[0, 0, DEG * 45]} size={5} weight={0.7} depth={0.5} color={COLORS[2]} color2="#000000" color3={COLORS[1]} mouse={mouse} />

      {/* Cone */}
      <Cone position={[11, 0, 3]} color="#000000" color2={random.pick(COLORS)} width={1.7} height={5} mouse={mouse} />
      <Cone position={[-20, -2, -3]} color="#000000" color2={random.pick(COLORS)} width={1.7} height={5} rotation={[0, 0, DEG * 35]} />
      <Cone position={[11, 18, 0]} color="#000000" color2={random.pick(COLORS)} width={1} height={3} />

      {/* Triangle */}
      <Triangle position={[-7, 8, 1]} color={COLORS[0]} width={2.5} height={7} rotation={[0, 0, DEG * 135]} />
      <TriangleOfTriangle position={[-7.5, 8.25, 1]} color="#000000" width={2.5} height={7} rotation={[0, 0, DEG * 135]} />

      <TriangleOfTriangle position={[-8, -15, 1]} color={random.pick(COLORS)} width={2.5} height={7} rotation={[0, 0, DEG * -45]} />


      {/* Circle */}
      <Circle position={[7.5, -7.25, 1]} color={COLORS[4]} size={5} mouse={mouse} />
      <CircleOfTriangle position={[8, -8, 1.6]} color="#000000" size={5} rotation={[0, 0, DEG * -45]} mouse={mouse} />
      <CircleOfTriangle position={[-12, -6, 1]} color={COLORS[3]} size={4} triangleSize={0.30} rotation={[0, 0, DEG * -45]} mouse={mouse} />
      <Circle position={[-11, -11, 0]} color={random.pick(COLORS)} size={2} />
      <Circle position={[-24, 20, -3]} color={random.pick(COLORS)} size={2} />

      {/* Bar3D */}
      <Bar3D position={[7, 9, 1]} color={COLORS[2]} color2={COLORS[0]} color3="#000000" size={3} weight={0.7} depth={0.5} number={6} rotation={[0, DEG * -60, DEG * -75]} mouse={mouse} />
      <Bar3D position={[2, -12, 3]} color={COLORS[2]} color2="#000000" color3={COLORS[0]} size={3} weight={0.7} depth={0.5} number={2} rotation={[0, DEG * 30, DEG * 135]} />

      <Sphere position={[0, -17, 0]} color={COLORS[1]} size={3} onClick={() => navigate('/profile')} text="Enter" />
    </Suspense>
  </Canvas>
  )
}

export default Home
