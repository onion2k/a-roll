import {Folder, Composition} from 'remotion';
import { BitMaskTest, BitMaskTestSchema } from './BitMaskTest';
import { WipeTest, WipeTestSchema } from './WipeTest';
import { ScrollerTest, ScrollerTestSchema } from './ScrollerTest';
import './style.css';
import { TwinLineTest, TwinLineTestSchema } from './TwinLineTest';
import { SquaresTest, SquaresTestSchema } from './SquaresTest';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="Wipes">
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
			</Folder>
			<Folder name="Effects">
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
					id="Squares"
					component={SquaresTest}
					durationInFrames={600}
					fps={60}
					width={1280}
					height={720}
					schema={SquaresTestSchema}
					defaultProps={{}}
				/>
			</Folder>
			<Folder name="Text">
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
			<Composition
				id="TwinLine"
				component={TwinLineTest}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
				schema={TwinLineTestSchema}
				defaultProps={{}}
			/>
			</Folder>
		</>
	);
};
