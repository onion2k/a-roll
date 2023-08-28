import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from 'remotion';

type WipeProps = { backgroundClass: string }

export const Wipe = ({ backgroundClass='bg-white' }: WipeProps) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(frame, [0, Math.floor(durationInFrames/2), durationInFrames], [0,1,0]);

    return (
        <AbsoluteFill className={`${backgroundClass} z-10`} style={{ opacity }} />
    );
};
