import { HlsVideoConfig, createNewHls, isHlsSupported } from 'livepeer';
import { RefObject, VideoHTMLAttributes, createRef, useEffect } from 'react';

export type GenericHlsVideoPlayerProps =
  VideoHTMLAttributes<HTMLVideoElement> & {
    playerRef?: RefObject<HTMLVideoElement>;
    hlsConfig?: HlsVideoConfig;
    controls?: boolean;
    width?: string | number;
  };

export type HlsVideoPlayerProps = GenericHlsVideoPlayerProps & {
  src: string;
};

export function HlsVideoPlayer({
  hlsConfig,
  playerRef = createRef<HTMLVideoElement>(),
  src,
  autoPlay = true,
  controls = true,
  width = '100%',
  ...props
}: HlsVideoPlayerProps) {
  useEffect(() => {
    if (
      playerRef.current &&
      typeof window !== 'undefined' &&
      isHlsSupported()
    ) {
      const { destroy } = createNewHls(src, playerRef.current, {
        autoplay: autoPlay,
        ...hlsConfig,
      });

      return () => {
        destroy();
      };
    }
  }, [autoPlay, hlsConfig, playerRef, src]);

  // if Media Source is supported, use HLS.js to play video
  if (typeof window !== 'undefined' && isHlsSupported())
    return (
      <video ref={playerRef} controls={controls} width={width} {...props} />
    );

  // fallback to using a regular video player if HLS is supported by default in the user's browser
  return (
    <video
      ref={playerRef}
      src={src}
      autoPlay={autoPlay}
      controls={controls}
      width={width}
      {...props}
    />
  );
}