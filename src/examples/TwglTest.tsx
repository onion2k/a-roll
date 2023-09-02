import { Sequence } from 'remotion';
import {z} from 'zod';
import { Twgl } from '../a-roll/effects/Twgl';

export const TwglTestSchema = z.object({
});

export const TwglTest: React.FC<z.infer<typeof TwglTestSchema>> = () => {
	return (
		<Sequence durationInFrames={600}>
			<Twgl />
		</Sequence>
	);
};
