import {AbsoluteFill} from 'remotion'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { noise2D } from '@remotion/noise';
import React from 'react';

type BurnsProps = { className: string; children: React.ReactNode }

export const Burns = ({ className, children }: BurnsProps) => {
  const frame = useCurrentFrame()
  const { durationInFrames, width, height } = useVideoConfig();

  const x = interpolate(frame, [0, durationInFrames], [0, width]);
  const y = interpolate(frame, [0, durationInFrames], [0, height]);
  return (
    <AbsoluteFill style={{ transform: `translateX(${x}px) translateY(${y}px)`}}>
      <AbsoluteFill style={{ display: 'block', top: '-100%', left: '-100%' }}>
        <div className={className}>
          { children }
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ display: 'block', top: '-100%', left: '0' }}>
        <div className={className}>
          { children }
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ display: 'block', top: '0', left: '-100%' }}>
        <div className={className}>
          { children }
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ display: 'block' }}>
        <div className={className}>
          { children }
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
