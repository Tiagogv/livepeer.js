import {
  PlayerProps as CorePlayerProps,
  PlayerObjectFit,
  usePlayer,
} from '@livepeer/core-react/components';
import { AudioSrc, Base64Src, HlsSrc, VideoSrc } from 'livepeer/media';
import { ControlsOptions } from 'livepeer/media/browser';

import { HlsVideoConfig } from 'livepeer/media/browser/hls';
import * as React from 'react';

import {
  Container,
  ControlsContainer,
  FullscreenButton,
  PictureInPictureButton,
  PlayButton,
  Poster,
  Progress,
  TimeDisplay,
  Title,
  Volume,
} from './controls';
import { AudioPlayer, VideoPlayer } from './players';
import { MediaControllerProvider } from '../../context';
import { useIsElementShown } from '../useIsElementShown';

export type PosterSource = string | React.ReactNode;

type PlayerProps<TPlaybackPolicyObject extends object> = CorePlayerProps<
  HTMLMediaElement,
  PosterSource,
  TPlaybackPolicyObject
> & {
  /** Whether to show the picture in picture button (web only) */
  showPipButton?: boolean;
  /** Configuration for the event listeners */
  controls?: ControlsOptions;
  /** Configuration for the HLS.js instance used for HLS playback */
  hlsConfig?: HlsVideoConfig;
  /**
   * Whether to include credentials in cross-origin requests made from the Player.
   * This is typically used to have the Player include cookies for requests made to Livepeer
   * domains, for access control policies.
   */
  allowCrossOriginCredentials?: boolean;
  /**
   * The tab index of the container element.
   */
  tabIndex?: number;
};

export type { PlayerObjectFit, PlayerProps };

export const PlayerInternal = <TPlaybackPolicyObject extends object>(
  props: PlayerProps<TPlaybackPolicyObject>,
) => {
  const [isCurrentlyShown, setIsCurrentlyShown] = React.useState(false);

  const screenWidth = React.useMemo(
    () =>
      typeof window !== 'undefined'
        ? (window?.screen?.availWidth || window?.innerWidth) ?? null
        : null,
    [],
  );

  const {
    mediaElement,
    playerProps,
    controlsContainerProps,
    source,
    props: { children, controls, theme, title, poster, showTitle, aspectRatio },
  } = usePlayer<HTMLMediaElement, PosterSource, TPlaybackPolicyObject>(
    {
      ...props,
      _isCurrentlyShown: props._isCurrentlyShown ?? isCurrentlyShown,
    },
    {
      _screenWidth: screenWidth,
    },
  );

  const _isCurrentlyShown = useIsElementShown(mediaElement);

  React.useEffect(() => {
    setIsCurrentlyShown(_isCurrentlyShown);
  }, [_isCurrentlyShown]);

  return (
    <MediaControllerProvider
      element={mediaElement}
      opts={controls ?? {}}
      playerProps={props}
    >
      <Container
        theme={theme}
        aspectRatio={aspectRatio}
        tabIndex={props.tabIndex}
      >
        {source && source?.[0]?.type === 'audio' ? (
          <AudioPlayer
            {...playerProps}
            src={source as AudioSrc[]}
            allowCrossOriginCredentials={props.allowCrossOriginCredentials}
          />
        ) : (
          <VideoPlayer
            {...playerProps}
            hlsConfig={props.hlsConfig}
            allowCrossOriginCredentials={props.allowCrossOriginCredentials}
            src={source as (VideoSrc | HlsSrc | Base64Src)[] | null}
          />
        )}

        {React.isValidElement(children) ? (
          React.cloneElement(children, controlsContainerProps)
        ) : (
          <>
            <ControlsContainer
              {...controlsContainerProps}
              poster={poster && <Poster content={poster} title={title} />}
              top={<>{title && showTitle && <Title content={title} />}</>}
              middle={<Progress />}
              left={
                <>
                  <PlayButton />
                  <Volume />
                  <TimeDisplay />
                </>
              }
              right={
                <>
                  {props.showPipButton && <PictureInPictureButton />}
                  <FullscreenButton />
                </>
              }
            />
          </>
        )}
      </Container>
    </MediaControllerProvider>
  );
};

const typedMemo: <T>(c: T) => T = React.memo;
export const Player = typedMemo(PlayerInternal);
