import { useEffect, useRef, useState, ReactNode } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, delayRender, continueRender, AbsoluteFill } from 'remotion';
import { z } from 'zod';
// Import { zColor } from '@remotion/zod-types';

export const ScrollerSchema = z.object({
  text: z.array(z.custom<ReactNode>())
});

export const Scroller: React.FC<z.infer<typeof ScrollerSchema>> = ({ text=["Hello World"] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [handle] = useState(() => delayRender());

  const [w, setw] = useState(20000);
  const frame = useCurrentFrame();
  const { width, durationInFrames } = useVideoConfig();

  useEffect(()=>{
    if (ref.current!==null) {
      const x = ref.current.getBoundingClientRect()
      setw(x.width);
      continueRender(handle);
      console.log(x)
    }
  }, [handle, ref]);

  const posBar = interpolate(frame, [0, 20, durationInFrames - 20, durationInFrames], [70, -10, -10, 70], { extrapolateRight: 'clamp' });
  const posScroll = interpolate(frame, [0, durationInFrames], [width, 0 - w * 2]);

  return (
    <AbsoluteFill className="flex flex-col justify-end">
      <div className="bg-pink-400 border-y-2 border-black" style={{ transform: `translateY(${posBar}px)` }}>
        <div ref={ref} className="inline-block py-4 whitespace-nowrap" style={{ transform: `translateX(${posScroll}px)` }}>{
          text.map((t) => t)
        }</div>
        </div>
    </AbsoluteFill>
  );
};
