import { Gif } from "@remotion/gif";
import { AbsoluteFill, useVideoConfig } from "remotion";

type BitMaskProps = { isForeground?: boolean }

export const BitMask = ({ isForeground }: BitMaskProps) => {
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill>
            <Gif
                src="https://media.giphy.com/media/xT0GqxlTBN5Mdf7lgQ/giphy.gif"
                width={width}
                height={height}
                style={{ filter: isForeground ? 'invert(1)' : '', mixBlendMode: 'screen', objectFit: 'cover' }}
                fit="cover"
            />
        </AbsoluteFill>
    );
};



    