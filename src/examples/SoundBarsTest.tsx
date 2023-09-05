import { Sequence } from 'remotion';
import { SoundBars } from '../a-roll/wipes/SoundBars';

export const SoundBarsTest: React.FC = () => {
	return (
		<Sequence durationInFrames={600}>
			<SoundBars color="hotpink" />
		</Sequence>
	);
};
