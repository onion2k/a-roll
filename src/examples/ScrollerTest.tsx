import { Sequence } from 'remotion';
import {z} from 'zod';

import { Scroller } from '../a-roll/text/Scroller';

export const ScrollerTestSchema = z.object({});

export const ScrollerTest: React.FC<z.infer<typeof ScrollerTestSchema>> = () => {
	return (
		<Sequence durationInFrames={6000}>
      <Scroller text={[
        <div className="inline-block whitespace-nowrap font-bold text-white text-xl pr-4">Hello World Title:</div>,
        <div className="inline-block whitespace-nowrap text-white font-bold text-xl pr-4">Hello World</div>,
        <div className="inline-block whitespace-nowrap font-bold text-white text-xl pr-4">Goodbye World Title:</div>,
        <div className="inline-block whitespace-nowrap text-white font-bold text-xl">Goodbye World</div>
      ]} />
		</Sequence>
	);
};
