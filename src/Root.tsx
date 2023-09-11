import {Folder, Composition} from 'remotion';
import { BitMaskTest, BitMaskTestSchema } from './examples/BitMaskTest';
import { ColorWipeTest, ColorWipeTestSchema } from './examples/WipeTest';
import { ScrollerTest, ScrollerTestSchema } from './examples/ScrollerTest';
import { TwinLineTest, TwinLineTestSchema } from './examples/TwinLineTest';
import { SquaresTest, SquaresTestSchema } from './examples/SquaresTest';
import { ReglTest, ReglTestSchema } from './examples/ReglTest';
import { ShaderHalftone, ShaderHalftoneSchema } from './examples/ShaderHalftone';
import { ShaderSpiral } from './examples/ShaderSpiral';
import { ShaderPlasma } from './examples/ShaderPlasma';
import { ShaderFBMLightning } from './examples/ShaderFBMLightning';
import { ShaderBitMaskTest } from './examples/ShaderBitMaskTest';
import './style.css';
import { SoundBarsTest } from './examples/SoundBarsTest';
import { BurnsTest } from './examples/BurnsTest';
import { ShaderWipeTest } from './examples/ShaderWipeTest';

export const RemotionRoot: React.FC = () => {
	return (
		<>
				<Composition
				id="SoundBars"
				component={SoundBarsTest}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
			/>
			<Composition
				id="Burns"
				component={BurnsTest}
				durationInFrames={600}
				fps={60}
				width={1280}
				height={720}
			/>
			<Folder name="Wipes">
				<Composition
					id="ColorWipe"
					component={ColorWipeTest}
					durationInFrames={600}
					fps={60}
					width={1280}
					height={720}
					schema={ColorWipeTestSchema}
					defaultProps={{
						backgroundClass: 'bg-white'
					}}
				/>
				<Composition
				id="ShaderWipe"
				component={ShaderWipeTest}
				durationInFrames={60}
				fps={60}
				width={1280}
				height={720}
				defaultProps={{}}
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
				<Composition
					id="Twgl"
					component={ShaderHalftone}
					durationInFrames={300}
					fps={60}
					width={1280}
					height={720}
					schema={ShaderHalftoneSchema}
					defaultProps={{}}
				/>
				<Composition
					id="ShaderSpiral"
					component={ShaderSpiral}
					durationInFrames={300}
					fps={60}
					width={1280}
					height={720}
				/>
				<Composition
					id="ShaderPlasma"
					component={ShaderPlasma}
					durationInFrames={3000}
					fps={60}
					width={1280}
					height={720}
				/>
				<Composition
					id="ShaderFBMLightning"
					component={ShaderFBMLightning}
					durationInFrames={3000}
					fps={60}
					width={1280}
					height={720}
				/>
				<Composition
					id="ShaderBitMaskTest"
					component={ShaderBitMaskTest}
					durationInFrames={600}
					fps={60}
					width={1280}
					height={720}
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
