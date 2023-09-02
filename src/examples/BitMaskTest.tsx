import { Sequence, AbsoluteFill } from 'remotion';
import {z} from 'zod';

import { BitMask } from '../a-roll/effects/BitMask';

export const BitMaskTestSchema = z.object({
});

export const BitMaskTest: React.FC<z.infer<typeof BitMaskTestSchema>> = () => {
	return (
		<Sequence durationInFrames={600}>
			<Sequence durationInFrames={600} name="out">
				<AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,255,0)' }}>
          <div className="w-full h-full flex items-center justify-center text-5xl text-white">Test</div>
					<BitMask />
      	</AbsoluteFill>
			</Sequence>
			<Sequence durationInFrames={600} name="BitMask Effect">
				<AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,0,0)', mixBlendMode: 'multiply' }}>
          <div className="w-full h-full flex items-center justify-center text-5xl text-black">Wibble</div>
					<BitMask isForeground />
        </AbsoluteFill>
			</Sequence>
		</Sequence>
	);
};
