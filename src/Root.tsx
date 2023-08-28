import {Composition} from 'remotion';
import { BitMaskTest, BitMaskTestSchema } from './BitMaskTest';
import { WipeTest, WipeTestSchema } from './WipeTest';
import { ScrollerTest, ScrollerTestSchema } from './ScrollerTest';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Wipe"
				component={WipeTest}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				schema={WipeTestSchema}
				defaultProps={{
					backgroundClass: 'bg-white'
				}}
			/>
			<Composition
				id="Mono"
				component={BitMaskTest}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				schema={BitMaskTestSchema}
				defaultProps={{}}
			/>
			<Composition
				id="Scroller"
				component={ScrollerTest}
				durationInFrames={6000}
				fps={60}
				width={1280}
				height={720}
				schema={ScrollerTestSchema}
				defaultProps={{}}
			/>
		</>
	);
};
