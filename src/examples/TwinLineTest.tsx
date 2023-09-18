import { Sequence } from 'remotion';
import {z} from 'zod';

import { TwinLine } from '../a-roll/text/TwinLine';

export const TwinLineTestSchema = z.object({});

export const TwinLineTest: React.FC<z.infer<typeof TwinLineTestSchema>> = () => {
	return (
		<Sequence durationInFrames={480}>
      <TwinLine textTop="Hello World" textBottom="Goodbye World" angle={-15} totalFrames={480} offsetFrame={0} />
		</Sequence>
	);
};
