import { Sequence, AbsoluteFill, staticFile, Img } from 'remotion';
import { Twgl } from '../a-roll/effects/Twgl';

const vert = `
attribute vec4 position;
void main() {
  gl_Position = position;
}`

const frag = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

#define PI 3.14159265359

void main() {
  vec2 uv = (gl_FragCoord.xy - resolution.xy / 2.) / resolution.y;

  float f = 1. / length(uv);
  f += (atan(uv.x, uv.y) / acos(0.));
  f -= time * -0.01;
  f = 1. - clamp(sin(f * PI * 2.) * dot(uv, uv) * resolution.y / 15. + .5, 0., 1.);
  f *= sin(length(uv) - .1) * 2.5;

  gl_FragColor = vec4(f, f, f, 1.0);
}`

export const ShaderBitMaskTest: React.FC = () => {
  return (
    <Sequence durationInFrames={600}>
      <Sequence durationInFrames={600} name="out">
        <AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,255,0)' }}>
          <div className="w-full h-full flex items-center justify-flex-start text-5xl text-black"><Img src={staticFile("oil_sm.webp")} /></div>
          <Twgl
            vert={vert}
            frag={frag}
            style={{ mixBlendMode: 'screen' }}
          />
      	</AbsoluteFill>
      </Sequence>
      <Sequence durationInFrames={600} name="BitMask Effect">
        <AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,0,0)', mixBlendMode: 'multiply' }}>
          <div className="w-full h-full flex items-center justify-flex-start text-5xl text-black"><Img src={staticFile("scallops_sm.webp")} /></div>
          <Twgl
            vert={vert}
            frag={frag}
            style={{filter: 'invert(1)' , mixBlendMode: 'screen'}}
          />
        </AbsoluteFill>
      </Sequence>
    </Sequence>
  );
};
