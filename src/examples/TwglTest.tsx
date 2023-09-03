import { Sequence } from 'remotion';
import {z} from 'zod';
import { Twgl } from '../a-roll/effects/Twgl';

export const TwglTestSchema = z.object({
});

export const TwglTest: React.FC<z.infer<typeof TwglTestSchema>> = () => {
	return (
		<Sequence durationInFrames={600}>
			<Twgl
        vert={`
          attribute vec4 position;
          void main() {
            gl_Position = position;
          }`
        }

        frag={`
          #ifdef GL_ES
          precision mediump float;
          #endif
          
          uniform float time;
          uniform vec2 mouse;
          uniform vec2 resolution;
          
          float swirl(vec2 coord) {
            float l = length(coord) / (resolution.x / 4.);
            return sin(l * 10.0 - time * 0.1) * 0.5 + 0.5;
          }
          
          float halftone(vec2 coord)
          {
            coord -= (resolution * 0.5); //or mouse //middle of the screen
            float size = resolution.x / (100.0); //number of dots
            vec2 uv = coord / size;
            vec2 ip = floor(uv); // column, row
            vec2 odd = vec2(0.5 * mod(ip.y, 2.0), 0); // odd line offset
            vec2 cp = floor(uv - odd) + odd; // dot center
            float d = length(uv - cp - 0.5) * size; // distance
            float r = swirl(cp * size) * (size - 2.0) * 0.5; // dot radius
            return clamp(d - r, 0.0, 1.0);
          }
          
          void main(void)
          {
          gl_FragColor = vec4(vec3(1, 1, 1) * halftone(gl_FragCoord.xy), 1.);
          }`
        }
      />
		</Sequence>
	);
};
