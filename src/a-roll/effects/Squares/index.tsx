import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import {z} from 'zod';
import './squares.css';

export const SquaresSchema = z.object({
  color: z.string().optional()
});

const Square = ({index, color}: { index: number, color: string}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const initTime = 0.7;
  const bufferTime = 0.2;

  const initDuration = durationInFrames * initTime;
  const buffer = durationInFrames * bufferTime;

  const delay = 1.5 * (index % 16 + Math.floor(index / 16)) * initTime;
  const maxDelay = 1.5 * (16 + 9) * initTime;

  const s = interpolate(frame - delay, [0, initDuration - maxDelay - buffer], [0, 0.9], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const s2 = interpolate(frame, [durationInFrames * (initTime + bufferTime), durationInFrames], [0, 0.15], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (<span key={index} style={{
    backgroundColor: color,
    opacity: 0.2 + s,
    transform: `scale(${s + s2})`
  } as React.CSSProperties }
  /> )
}

export const Squares: React.FC<z.infer<typeof SquaresSchema>> = ({ color = "white" }) => {
  return (
    <div className="squares">
      { Array(16*9).fill(undefined).map((value, index)=>{ return (
        <Square index={index} color={color} />
      )
    }) }
    </div>
  );
};