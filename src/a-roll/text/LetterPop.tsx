import {useRef} from 'react'
import { useEffect } from 'react';
import { useCurrentFrame, useVideoConfig, AbsoluteFill, interpolate, Easing } from 'remotion';
import splitting from 'splitting';
import { z } from 'zod';

import '../../../node_modules/splitting/dist/splitting.css';
import '../../../node_modules/splitting/dist/splitting-cells.css';

export const LetterPopSchema = z.object({});

export const LetterPop: React.FC<z.infer<typeof LetterPopSchema>> = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (ref.current !== null) {
      splitting({
        target: "#split",
        by: "chars",
      });
  
      if (document.getElementsByClassName('char')) {
        const chars = document.getElementsByClassName('char');
        Array.from(chars).forEach((char, i)=>{

          const delay = 10;
          const offset = 5;
          const length = 20;

          const op = interpolate(frame,
            [delay + i * offset, delay + i * offset + length],
            [0, 1]
          );

          const x = interpolate(frame,
            [delay + i * offset, delay + i * offset + length],
            [100, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear}
          );

          const y = Math.sin(i + (frame * 0.1)) * 10 + x;

          char.style.opacity = op;
          char.style.transform = `translateY(${y}px)`;

        })
      }
    }
  }, [ref, durationInFrames, frame]);

  return (
    <AbsoluteFill className="grid items-center justify-center">
        <div ref={ref} id="split" className="w-fit m-0 p-0 whitespace-nowrap text-white text-[6em]">Hello World</div>
    </AbsoluteFill>
  );
};
