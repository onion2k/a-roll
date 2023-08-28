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

  const [w, setw] = useState(0);
  const frame = useCurrentFrame();
  const { width, durationInFrames } = useVideoConfig();

  useEffect(()=>{
    if (ref.current!==null) {
      const x = ref.current.getBoundingClientRect()
      setw(x.width);
      continueRender(handle);
      console.log(x.width)
    }
  }, [handle, ref]);

  const posScroll = interpolate(frame, [0, durationInFrames], [width, 0 - w]);

  return (
    <AbsoluteFill className="flex flex-col justify-end">
        <div ref={ref} className="w-fit m-0 p-0 whitespace-nowrap" style={{ transform: `translateX(${posScroll}px)` }}>{
          text.map((t) => t)
        }</div>
    </AbsoluteFill>
  );
};
