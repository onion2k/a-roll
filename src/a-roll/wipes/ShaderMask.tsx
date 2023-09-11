import { Sequence, AbsoluteFill, useVideoConfig} from 'remotion';
import { Twgl } from '../effects/Twgl';

type ShaderMaskProps = { frag: string, top: React.ReactNode, bottom: React.ReactNode }

const vert = `
attribute vec4 position;
void main() {
  gl_Position = position;
}`

export const ShaderMask = ({ frag, top, bottom }: ShaderMaskProps) => {
  const { durationInFrames } = useVideoConfig();
    return (
      <>
        <Sequence durationInFrames={durationInFrames} name="out">
          <AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,255,0)' }}>
            { bottom }
            <Twgl frag={frag} vert={vert} style={{ mixBlendMode: 'screen' }} />
          </AbsoluteFill>
        </Sequence>
        <Sequence durationInFrames={durationInFrames} name="BitMask Effect">
          <AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,0,0)', mixBlendMode: 'multiply' }}>
            { top }
            <Twgl frag={frag} vert={vert} style={{ filter: 'invert(1)', mixBlendMode: 'screen' }} />
          </AbsoluteFill>
        </Sequence>
      </>
    );
};
