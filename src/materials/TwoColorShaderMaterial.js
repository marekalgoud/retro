import * as THREE from "three"
import { extend } from "react-three-fiber"

class TwoColorShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color: { value: new THREE.Color("white") },
        color2: { value: new THREE.Color("black") },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main () {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,

      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform vec3 color;
        uniform vec3 color2;

        void main() {
          vec3 mask = abs(vNormal.z) > 0.0 ? color : color2;
          gl_FragColor = vec4(mask, 1.0);
        }
      `
    })
  }
  get color() {
    return this.uniforms.color.value
  }

  get color2() {
    return this.uniforms.color2.value
  }
}

extend({ TwoColorShaderMaterial })
