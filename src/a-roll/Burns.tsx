import {AbsoluteFill} from 'remotion'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';
import { z } from 'zod';

type BurnsProps = { className: string; children: React.ReactNode, totalFrames: number, offsetFrame: number  }

export const Burns = ({ className, children, totalFrames, offsetFrame=0  }: BurnsProps) => {
  const frame = useCurrentFrame() + offsetFrame;
  const { width, height } = useVideoConfig();

  const x = interpolate(frame, [0, totalFrames], [0, width]);
  const y = interpolate(frame, [0, totalFrames], [0, height]);

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
