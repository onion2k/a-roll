import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';
import { z } from 'zod';
// Import { zColor } from '@remotion/zod-types';

export const twinLineTextSchema = z.object({
  text: z.string(),
  className: z.string(),
  speed: z.number()
});

export const TwinLineText: React.FC<z.infer<typeof twinLineTextSchema>> = ({ text, className, speed=-1 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const pos = interpolate(frame, [0, durationInFrames * 0.25, durationInFrames * 0.75,  durationInFrames], [-1600, -100, 100, 1600], {  }) * speed;

  return (
      <div className={className} style={{ transform: `translateX(${pos}px)` }}>{text}</div>
  );
};


export const twinLineScrollerSchema = z.object({
  textTop: z.string(),
  textBottom: z.string(),
  angle: z.number()
});

export const TwinLine: React.FC<z.infer<typeof twinLineScrollerSchema>> = ({ textTop, textBottom, angle=-10 }) => {
  return (
    <AbsoluteFill className="h-full flex flex-col items-center justify-center">
    <div className="w-full h-2/6 flex flex-col items-center justify-center" style={{ transform: `rotate(${angle}deg)` }}>
      <TwinLineText text={textTop} speed={1} className="font-black text-white text-[12rem] origin-center" />
      <TwinLineText text={textBottom} speed={-1} className="font-black text-white text-[6rem] origin-center" />
    </div>
    </AbsoluteFill>
  );
};
