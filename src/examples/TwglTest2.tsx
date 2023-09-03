import { Sequence } from 'remotion';
import { Twgl } from '../a-roll/effects/Twgl';

export const TwglTest2 = () => {
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
        }
      />
		</Sequence>
	);
};
