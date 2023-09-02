import * as twgl from 'twgl.js';
import { useEffect, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

export const Twgl = () => {
    const el = useRef<HTMLCanvasElement>(null);
    const frame = useCurrentFrame();
    const { width, height, durationInFrames } = useVideoConfig();

    useEffect(()=>{
      if (el.current) {

        const gl = el.current.getContext("webgl");

        if (gl) {
          const programInfo = twgl.createProgramInfo(gl, [
            `
            attribute vec4 position;
            void main() {
              gl_Position = position;
            }`,

            `
            #ifdef GL_ES
            precision mediump float;
            #endif
            
            uniform float time;
            uniform vec2 mouse;
            uniform vec2 resolution;
            
            float swirl(vec2 coord) {
              float l = length(coord) / (resolution.x / 4.);
              return sin(l * 10.0 - time * 4.0) * 0.5 + 0.5;
            }
            
            float halftone(vec2 coord)
            {
              coord -= (resolution * 0.5); //or mouse //middle of the screen
              float size = resolution.x / (100.0); //number of dots
              vec2 uv = coord / size;
              vec2 ip = floor(uv); // column, row
              vec2 odd = vec2(0.5 * mod(ip.y, 2.0), 0); // odd line offset
              vec2 cp = floor(uv - odd) + odd; // dot center
              float d = length(uv - cp - 0.5) * size; // distance
              float r = swirl(cp * size) * (size - 2.0) * 0.5; // dot radius
              return clamp(d - r, 0.0, 1.0);
            }
            
            void main(void)
            {
            gl_FragColor = vec4(vec3(1, 1, 1) * halftone(gl_FragCoord.xy), 1.);
            }`
          ]);
      
          const arrays = {
            position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
          };
      
          const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
      
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
          const uniforms = {
            time: frame * 0.1,
            resolution: [gl.canvas.width, gl.canvas.height],
          };
    
          gl.useProgram(programInfo.program);
    
          twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
          twgl.setUniforms(programInfo, uniforms);
          twgl.drawBufferInfo(gl, bufferInfo);
        }

      }
    }, [durationInFrames, frame])

    return (
        <AbsoluteFill>
            <canvas ref={el} width={width} height={height} />
        </AbsoluteFill>
    );
};



    