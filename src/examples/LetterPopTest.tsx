import { Sequence } from 'remotion';
import {z} from 'zod';

import { LetterPop } from '../a-roll/text/LetterPop';

export const LetterPopSchema = z.object({});

export const LetterPopTest: React.FC<z.infer<typeof LetterPopSchema>> = () => {
	return (
		<Sequence durationInFrames={600}>
      <LetterPop />
		</Sequence>
	);
};
