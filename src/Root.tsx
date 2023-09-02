import {Folder, Composition} from 'remotion';
import { BitMaskTest, BitMaskTestSchema } from './examples/BitMaskTest';
import { WipeTest, WipeTestSchema } from './examples/WipeTest';
import { ScrollerTest, ScrollerTestSchema } from './examples/ScrollerTest';
import { TwinLineTest, TwinLineTestSchema } from './examples/TwinLineTest';
import { SquaresTest, SquaresTestSchema } from './examples/SquaresTest';
import { ReglTest, ReglTestSchema } from './examples/ReglTest';
import './style.css';

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
					durationInFrames={120}
					fps={60}
					width={1280}
					height={720}
					schema={SquaresTestSchema}
					defaultProps={{}}
				/>
				<Composition
					id="Regl"
					component={ReglTest}
					durationInFrames={300}
					fps={60}
					width={1280}
					height={720}
					schema={ReglTestSchema}
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
