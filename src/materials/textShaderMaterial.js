import * as THREE from "three"
import { extend } from "react-three-fiber"

class TextShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTexture: { type: "t", value: undefined },
      },
      vertexShader: /*glsl*/ `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main () {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }P
      `,

      fragmentShader: /*glsl*/ `
        varying vec2 vUv;

        uniform sampler2D uTexture;

        void main() {
          vec3 texture = texture2D(uTexture, vUv).rgb;

          gl_FragColor = vec4(1. - texture, 1.0);
        }
      `
    })
  }
  get uTexture() {
    console.log(this.uniforms)
    return this.uniforms.uTexture.value
  }

}

extend({ TextShaderMaterial })
