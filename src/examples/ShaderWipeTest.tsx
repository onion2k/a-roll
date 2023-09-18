import { AbsoluteFill, Sequence } from 'remotion';
import { ShaderMask } from '../a-roll/wipes/ShaderMask';
import { Burns } from '../a-roll/Burns';
import { TwinLine } from '../a-roll/text/TwinLine';

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
    <>
    <Sequence durationInFrames={240}>
      <Burns className="h-full w-full grid grid-cols-[repeat(16,_1fr)] text-white" totalFrames={360} offsetFrame={0}>
        { Array(16 * 8).fill(undefined).map((v, i) => (<div className={`${(i + (Math.floor(i / 16))) % 2 === 0 ? 'bg-white' : 'bg-black'}`}>{i}</div>)) }
      </Burns>
    </Sequence>
    <Sequence durationInFrames={120} from={240}>
      <ShaderMask
        top={
          <Burns className="h-full w-full grid grid-cols-[repeat(16,_1fr)] text-white" totalFrames={360} offsetFrame={240}>
            { Array(16 * 8).fill(undefined).map((v, i) => (<div className={`${(i + (Math.floor(i / 16))) % 2 === 0 ? 'bg-white' : 'bg-black'}`}>{i}</div>)) }
          </Burns>
        }
        bottom={
          <AbsoluteFill style={{ backgroundColor: 'pink' }}>
            <TwinLine textTop="Hello World" textBottom="Goodbye World" angle={-15} totalFrames={360} offsetFrame={0} />
          </AbsoluteFill>
        }
        frag={frag}
      />
    </Sequence>
    <Sequence durationInFrames={240} from={360}>
      <AbsoluteFill style={{ backgroundColor: 'pink' }}>
        <TwinLine textTop="Hello World" textBottom="Goodbye World" angle={-15} totalFrames={360} offsetFrame={120} />
      </AbsoluteFill>
    </Sequence>
    </>
  );
};
