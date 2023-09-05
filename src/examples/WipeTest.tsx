import { Sequence, AbsoluteFill, Img, staticFile } from 'remotion';
import {z} from 'zod';

import { ColorWipe } from '../a-roll/wipes/ColorWipe';

export const ColorWipeTestSchema = z.object({
	backgroundClass: z.string()
});

export const ColorWipeTest: React.FC<z.infer<typeof ColorWipeTestSchema>> = ({
	backgroundClass
}) => {
	return (
		<Sequence durationInFrames={600}>
			<Sequence durationInFrames={300} name="out">
				<AbsoluteFill className="w-full h-full flex items-center justify-center">
					<Img src={staticFile("scallops_sm.webp")} />
				</AbsoluteFill>
			</Sequence>
			<Sequence durationInFrames={200} from={200} name="transition" className="z-50">
				<ColorWipe backgroundClass={backgroundClass} />
			</Sequence>
			<Sequence durationInFrames={600} from={300}>
			<AbsoluteFill className="w-full h-full flex items-center justify-center">
				<Img src={staticFile("oil_sm.webp")} />
			</AbsoluteFill>
			</Sequence>
		</Sequence>
	);
};
