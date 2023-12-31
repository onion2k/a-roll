import * as twgl from 'twgl.js';
import { useCallback, useEffect, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from 'zod';

export const TwglSchema = z.object({
  frag: z.string(),
  vert: z.string(),
  style: z.object({}).optional()
});

export const Twgl = ({ frag, vert, style }: z.infer<typeof TwglSchema>) => {
    const el = useRef<HTMLCanvasElement>(null);
    const frame = useCurrentFrame();
    const { width, height, durationInFrames } = useVideoConfig();

    const renderGL = useCallback((frame: number) => {

      if (el.current) {
        const gl = el.current.getContext("webgl");
  
        if (gl) {
          const programInfo = twgl.createProgramInfo(gl, [
            vert, frag
          ]);
      
          const arrays = {
            position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
          };
      
          const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
      
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
          const uniforms = {
            time: frame,
            maxTime: durationInFrames,
            resolution: [gl.canvas.width, gl.canvas.height],
          };
    
          gl.useProgram(programInfo.program);
    
          twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
          twgl.setUniforms(programInfo, uniforms);
          twgl.drawBufferInfo(gl, bufferInfo);
  
        }
      }

    }, [frag, vert]);

    useEffect(() => {
      renderGL(frame);
    }, [renderGL, frame])

    renderGL(frame);

    return (
        <AbsoluteFill >
            <canvas ref={el} width={width} height={height} style={style} />
        </AbsoluteFill>
    );
};



    