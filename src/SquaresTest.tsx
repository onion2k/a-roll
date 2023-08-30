import { Sequence } from 'remotion';
import {z} from 'zod';

import { Squares } from './a-roll/effects/Squares';

export const SquaresTestSchema = z.object({});

export const SquaresTest: React.FC<z.infer<typeof SquaresTestSchema>> = () => {
	return (
		<Sequence durationInFrames={6000}>
      <Squares />
		</Sequence>
	);
};
