import regl from 'regl';
import { useEffect, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

// Type ReglProps = object;

export const Regl = () => {
    const el = useRef(null);
    const frame = useCurrentFrame();
    const { width, height, durationInFrames } = useVideoConfig();

    useEffect(()=>{
      if (el.current) {

        const r = regl(el.current);

        r.clear({
          color: [0, 0, 0, 1],
          depth: 1
        });

        r({
          frag: `
          precision mediump float;
          uniform vec4 color;
          uniform float time;
          void main () {
            gl_FragColor = vec4(color.r, color.g + time, color.b, color.a);
          }`,
        
          vert: `
          precision mediump float;
          attribute vec2 position;
          void main () {
            gl_Position = vec4(position, 0, 1);
          }`,
        
          attributes: {
            position: [
              [-1, 0],
              [0, -1],
              [1, 1]
            ]
          },
        
          uniforms: {
            color: [1, 0, 0, 1],
            time: frame / durationInFrames
          },
        
          count: 3
        })()
      }
    }, [durationInFrames, frame])

    return (
        <AbsoluteFill>
            <canvas ref={el} width={width} height={height} />
        </AbsoluteFill>
    );
};



    