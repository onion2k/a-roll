import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import './squares.css';

interface TextIntroProps {
  color?: string;
  direction?: string;
}

const Square = ({index, color}: { index: number, color: string}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const delay = 10 * (index % 16 + Math.floor(index / 16));
  const maxDelay = 10 * (16 + 9);
  const buffer = 50;

  const s = interpolate(frame - delay, [0, durationInFrames - maxDelay - buffer], [0, 0.9], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const s2 = interpolate(frame, [durationInFrames - 20, durationInFrames], [0, 0.15], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (<span key={index} style={{
    backgroundColor: color,
    opacity: 0.2 + s,
    transform: `scale(${s + s2})`
  } as React.CSSProperties }
  /> )
}

export const Squares: React.FC<TextIntroProps> = ({ color = "white", direction="row" }) => {
  return (
    <div className={`squares ${direction}`}>
      { Array(16*9).fill(undefined).map((value, index)=>{ return (
        <Square index={index} color={color} />
      )
    }) }
    </div>
  );
};