import { Sequence } from 'remotion';
import { Burns } from '../a-roll/Burns';

export const BurnsTest: React.FC = () => {
  return (
		<Sequence durationInFrames={600}>
			<Burns className="h-full w-full grid grid-cols-[repeat(16,_1fr)] text-white">
        { Array(16 * 8).fill(undefined).map((v, i) => (<div className={`${(i + (Math.floor(i / 16))) % 2 === 0 ? 'bg-white' : 'bg-black'}`}>{i}</div>)) }
      </Burns>
		</Sequence>
	);
};
