import * as THREE from "three"
import { extend } from "react-three-fiber"

class TextShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color: { value: new THREE.Color("white") },
        texture: { type: "t", value: undefined },
      },
      vertexShader: /*glsl*/ `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main () {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,

      fragmentShader: /*glsl*/ `
        varying vec2 vUv;

        uniform sampler2D texture;
        uniform vec3 color;

        void main() {
          vec2 repeat = vec2(3.0, 1.0);
          vec2 uv = fract(vUv * repeat);

          vec3 vTexture = texture2D(texture, uv).rgb;
          vTexture *= color;

          gl_FragColor = vec4(vTexture, 1.0);
        }
      `
    })
  }

  get color() {
    return this.uniforms.color.value
  }

  get texture() {
    return this.uniforms.texture.value
  }

  set texture(v) {
    this.uniforms.texture.value = v
  }

}

extend({ TextShaderMaterial })
