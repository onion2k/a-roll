import { Sequence, AbsoluteFill } from 'remotion';
import {z} from 'zod';
import { Regl } from '../a-roll/effects/Regl';

export const ReglTestSchema = z.object({
});

export const ReglTest: React.FC<z.infer<typeof ReglTestSchema>> = () => {
	return (
		<Sequence durationInFrames={600}>
			<Regl />
		</Sequence>
	);
};
