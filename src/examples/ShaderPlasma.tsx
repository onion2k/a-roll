import { Sequence } from 'remotion';
import { Twgl } from '../a-roll/effects/Twgl';

export const ShaderPlasma = () => {
	return (
		<Sequence durationInFrames={3000}>
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

        float map(vec2 p) {
          return length(p) - 0.2;
        }

        void main(void) {
            vec2 uv = (gl_FragCoord.xy * 4.0 - resolution.xy) / min(resolution.x, resolution.y);
            vec3 col = vec3(0.0); 
            float time = 1. + time * 0.001;
            float frequency = 1.0;  // color frequency
            for(float j = 0.0; j < 3.0; j++) {

              for(float i = 1.0; i < 8.0; i++) {
                uv.x += (0.2 / (i + j) * sin(i * atan(time) * 2.0 * uv.y + (time * 0.1) + i * j));
                uv.y += (1.0 / (i + j) * cos(i * 0.6 * uv.x + (time * 0.25) + i * j));
                float angle = time * 0.1;
                mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
                uv = rotation * uv;
              }

              vec3 newColor = vec3(
                0.5 * sin(frequency * uv.x + time) + 0.5,
                0.5 * sin(frequency * uv.y + time + 2.0) + 0.5,
                sin(frequency * (uv.x + uv.y) + time + 4.0)
              );
                
              newColor = pow(newColor, vec3(2.0));  // sharpnesss
              col += newColor;
            }

            col /= 3.0;
            vec3 bg = vec3(0.0, 0.0, 0.0); //for darkness =)
            col = mix(
                col,
                bg,
                1.0 - smoothstep(0.1, abs(sin(time * 0.05) * 3.0), map(uv))
            );
            gl_FragColor = vec4(col, 1.0);
        }`
        }
      />
		</Sequence>
	);
};
