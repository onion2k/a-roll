import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { noise2D } from '@remotion/noise';

type SoundBarsProps = { color: string, bars?: number }

export const SoundBars = ({ color='white', bars=7 }: SoundBarsProps) => {
    const frame = useCurrentFrame();
    const s = 0.025;

    return (
        <AbsoluteFill>
          <div className="absolute bottom-4 right-4 h-20 w-16 gap-2 flex flex-row items-end justify-between">
            { Array(bars).fill(undefined).map((v, i) => (<div className="h-full w-full" style={{ backgroundColor: color, height: `${Math.abs(noise2D(i, 1, (frame) * s)) * 40}px` }} />)) }
          </div>
        </AbsoluteFill>
    );
};
