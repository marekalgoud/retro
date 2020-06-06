import React, {useRef} from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { OrthographicCamera } from "drei"
import { Link } from "@reach/router"
import random from 'canvas-sketch-util/random'

import Square from '../shapes/Square'
import Cross from '../shapes/Cross'
import Ring from '../shapes/Ring'


const COLORS = [
  '#00EBEA', // blue
  '#F3FF2B', // yellow
  '#FF0092', // pink
  '#FF7F34', // orange,
  '#6AFFA0', // green
]

const DEG = Math.PI / 180

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

function Profile () {

  const objects = []
  for(let i = 0; i < 10; i++) {
    const x = random.range(-40, 40)
    const y = random.range(-30, 30)
    const angle = random.range(0, 360)
    objects.push(
      <Square position={[x, y, 0]} size={2} rotation={[0, 0, DEG * angle]} color={random.pick(COLORS)} color2={random.pick(COLORS)} />
    )
  }

  for(let i = 0; i < 40; i++) {
    const x = random.range(-40, 40)
    const y = random.range(-30, 30)
    const size = random.range(0.3, 1)
    objects.push(
      <Ring position={[x, y, 0]} size={size} weight={0.1} color={random.pick(COLORS)} color2={random.pick(COLORS)} />
    )
  }
  for(let i = 0; i < 20; i++) {
    const x = random.range(-40, 40)
    const y = random.range(-30, 30)
    const angle = random.range(0, 360)
    const size = random.range(0.5, 2)
    objects.push(
      <Cross position={[x, y, 0]} rotation={[0, 0, DEG * angle]} size={size} weight={0.1} color={random.pick(COLORS)} />
    )
  }

  return (
    <>
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
    <Canvas>
      <Camera />
      <ambientLight intensity={1} />
      {objects}
    </Canvas>
    </div>
    <div className="bg-blur min-h-screen">
      <div className="max-w-screen-lg mx-auto p-20 relative z-10">
        <h1 className="font-title text-6xl text-turquoise text-shadow">Hello world !</h1>
        <p className="mt-10 text-xl">I'm Marek Algoud a frontend developer living in France, Lyon. I love trying new stuff with all the frontend ecosystem, from the js framework (vue, react, angluar) to more creative coding with three.js !</p>

        <h2 className="font-title text-4xl text-turquoise text-shadow mt-20">Personal works</h2>
        {/* Portfolio 90's*/}
        <div className="flex mt-2">
          <div className="m-2 w-1/4">
            <Link to="/"><img src={require('../assets/img/portfolio.png')} alt="" /></Link>
          </div>
          <div className="m-2 w-3/4">
            <h3 className="font-title text-2xl"><Link to="/">Portfolio based on 90's style</Link></h3>
            <p className="text-xl">I seen <a  className="underline" href="https://www.vectorstock.com/royalty-free-vector/set-design-of-90s-style-vector-13364825">this picture</a> and I tough : "Hey, could be a funny portfolio !" So I tried to do something close :)</p>
            <p className="text-lg"><strong>technologies</strong>: react, react-three-fiber, shader, reach-router, tailwindcss</p>
          </div>
        </div>
        {/* Puppy */}
        <div className="flex mt-2">
          <div className="m-2 w-1/4">
            <a href="https://elzebu-puppy.netlify.app/"><img src={require('../assets/img/puppy.png')} alt="" /></a>
          </div>
          <div className="m-2 w-3/4">
            <h3 className="font-title text-2xl"><a href="https://elzebu-puppy.netlify.app/">A Simple three.js Puppy</a></h3>
            <p className="text-xl">Inspired by @yakudoo works, a simple 3D puppy build with react-three-fiber. <br />The goal was to learn more about three and react-three-fiber, shadows and simple interaction.</p>
            <p className="text-lg"><strong>technologies</strong>: react, react-three-fiber</p>
          </div>
        </div>
        {/* Real cv */}
        <div className="flex mt-2">
          <div className="m-2 w-1/4">
            <a href="https://marekalgoud.netlify.app/"><img src={require('../assets/img/cv.png')} alt="" /></a>
          </div>
          <div className="m-2 w-3/4">
            <h3 className="font-title text-2xl"><a href="https://marekalgoud.netlify.app/">My "Real" CV</a></h3>
            <p className="text-xl">Simple CV made with react / material design</p>
            <p className="text-lg"><strong>technologies</strong>: react</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
