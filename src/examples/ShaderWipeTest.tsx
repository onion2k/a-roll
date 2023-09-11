import { Sequence, staticFile, Img } from 'remotion';
import { ShaderMask } from '../a-roll/wipes/ShaderMask';

const frag = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform float maxTime;
uniform vec2 resolution;

void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 center = resolution.xy / 2.;

  float dist = length(center - coord) + sin((atan(center.y - coord.y, center.x - coord.x) + cos(time * 0.01)) * 15. ) * length(center - coord) * 0.1;

  float circlesOut = dist - length(center - vec2(0.,0.)) * (time / maxTime);

  circlesOut = clamp(circlesOut, 0.0, 1.0);

  float c = circlesOut;

  gl_FragColor = vec4(c,c,c,1.0);
}`

export const ShaderWipeTest: React.FC = () => {
  return (
    <Sequence durationInFrames={60}>
      <ShaderMask
        top={
          <div className="w-full h-full flex items-center justify-flex-start text-5xl text-black"><Img src={staticFile("oil_sm.webp")} /></div>
        }
        bottom={
          <div className="w-full h-full flex items-center justify-flex-start text-5xl text-black"><Img src={staticFile("scallops_sm.webp")} /></div>
        }
        frag={frag}
      />
    </Sequence>
  );
};
