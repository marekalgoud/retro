import * as THREE from "three"
import { extend } from "react-three-fiber"

class ThreeColorShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color: { value: new THREE.Color("white") },
        color2: { value: new THREE.Color("black") },
        color3: { value: new THREE.Color("blue") },
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
        uniform vec3 color3;

        void main() {
          vec3 mask = abs(vNormal.z) > 0.0 ?  color : vNormal.y > 0.0 ? color2 : color3;
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

  get color3() {
    return this.uniforms.color3.value
  }
}

extend({ ThreeColorShaderMaterial })
