import { Sequence, AbsoluteFill } from 'remotion';
import {z} from 'zod';

import { Wipe } from './a-roll/wipes/Wipe';

export const WipeTestSchema = z.object({
	backgroundClass: z.string()
});

export const WipeTest: React.FC<z.infer<typeof WipeTestSchema>> = ({
	backgroundClass
}) => {
	return (
		<Sequence durationInFrames={600}>
			<Sequence durationInFrames={300} name="out">
				<AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,255,0)'}} />
			</Sequence>
			<Sequence durationInFrames={200} from={200} name="transition" className="z-50">
				<Wipe backgroundClass={backgroundClass} />
			</Sequence>
			<Sequence durationInFrames={300} from={300} name="in">
				<AbsoluteFill className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,0,0)'}} />
			</Sequence>
		</Sequence>
	);
};
