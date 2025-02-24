# livepeer

## 2.4.2

### Patch Changes

- [#306](https://github.com/livepeer/livepeer.js/pull/306) [`07f4a6e`](https://github.com/livepeer/livepeer.js/commit/07f4a6e3e257834611481325cbe7c7617ec9bf43) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed access control error not resetting when livestream starts.

- Updated dependencies [[`07f4a6e`](https://github.com/livepeer/livepeer.js/commit/07f4a6e3e257834611481325cbe7c7617ec9bf43)]:
  - @livepeer/core@1.4.2

## 2.4.1

### Patch Changes

- [#304](https://github.com/livepeer/livepeer.js/pull/304) [`d2522dd`](https://github.com/livepeer/livepeer.js/commit/d2522dd5d9dffce55c1c9d6f18c4db2b1b7eccda) Thanks [@spreadzp](https://github.com/spreadzp)! - **Feature:** added support for base64 video sources - this allows for a video source like `data:video/webm;base64,GkX...AUL3` to be passed into the `src` prop and the Player will handle it properly.

- Updated dependencies [[`d2522dd`](https://github.com/livepeer/livepeer.js/commit/d2522dd5d9dffce55c1c9d6f18c4db2b1b7eccda)]:
  - @livepeer/core@1.4.1

## 2.4.0

### Minor Changes

- [#299](https://github.com/livepeer/livepeer.js/pull/299) [`ec96b12`](https://github.com/livepeer/livepeer.js/commit/ec96b12243b3688ddff9a55db1a03454d0af0e25) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `accessKey` and `onAccessKeyRequest` props to the Player, to support the `webhook` playback policy which allows users to play back streams/assets with webhook authentication. The access key is appended to the query string in the source URL of the video, and this access key is passed along to a user-defined webhook which validates the payload to make sure the user has access to the content.

### Patch Changes

- [#303](https://github.com/livepeer/livepeer.js/pull/303) [`8f65da8`](https://github.com/livepeer/livepeer.js/commit/8f65da8771771629da6c9fa5a55cce0447966d32) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** updated the metrics to send the `pageUrl` as the `document.referrer` when used in an iFrame context, to be able to attribute metrics to a page which uses an iFrame.

- [#302](https://github.com/livepeer/livepeer.js/pull/302) [`4ebec15`](https://github.com/livepeer/livepeer.js/commit/4ebec150d92f64be31fcb78e9db64c8af6a24f79) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added an `onError` callback to the Player to allow users to catch and handle miscellaneous errors which occur in the Player, which are not already handled.

- Updated dependencies [[`ec96b12`](https://github.com/livepeer/livepeer.js/commit/ec96b12243b3688ddff9a55db1a03454d0af0e25), [`8f65da8`](https://github.com/livepeer/livepeer.js/commit/8f65da8771771629da6c9fa5a55cce0447966d32), [`4ebec15`](https://github.com/livepeer/livepeer.js/commit/4ebec150d92f64be31fcb78e9db64c8af6a24f79)]:
  - @livepeer/core@1.4.0

## 2.3.2

### Patch Changes

- [#298](https://github.com/livepeer/livepeer.js/pull/298) [`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added the ability to autoplay videos without forcing mute. This works only in certain conditions where the site is considered "trusted" and the user has interacted with the site - see [Chrome](https://developer.chrome.com/blog/autoplay/) and [Safari](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) docs for further details on when this is allowed. We recommend testing on your site to ensure that the media will autoplay under the conditions that you expect the user to engage with your content.

- [#295](https://github.com/livepeer/livepeer.js/pull/295) [`3f653f7`](https://github.com/livepeer/livepeer.js/commit/3f653f716ed03b587389cda330541cb30a5f3b4a) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed the user agent string to be sanitized before passing to the metrics websocket.

- [#297](https://github.com/livepeer/livepeer.js/pull/297) [`1d34ea4`](https://github.com/livepeer/livepeer.js/commit/1d34ea483e8b5e2bfb01d009e376055deab4fe24) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added IPFS upload on creation of an asset, so no subsequent calls need to be made to upload to IPFS.

- [#298](https://github.com/livepeer/livepeer.js/pull/298) [`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** changed the default Player volume level to 1.0, from 0.2. To continue with the previous behavior, use `defaultVolume` in the [controls](https://docs.livepeer.org/reference/livepeer-js/Player#controls) prop.

- Updated dependencies [[`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b), [`3f653f7`](https://github.com/livepeer/livepeer.js/commit/3f653f716ed03b587389cda330541cb30a5f3b4a), [`1d34ea4`](https://github.com/livepeer/livepeer.js/commit/1d34ea483e8b5e2bfb01d009e376055deab4fe24), [`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b)]:
  - @livepeer/core@1.3.2

## 2.3.1

### Patch Changes

- [#293](https://github.com/livepeer/livepeer.js/pull/293) [`8e28a01`](https://github.com/livepeer/livepeer.js/commit/8e28a016fb77059524b9a21cddf9e06df699a749) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `sourceUrl` reporting to the Player.

- Updated dependencies [[`8e28a01`](https://github.com/livepeer/livepeer.js/commit/8e28a016fb77059524b9a21cddf9e06df699a749)]:
  - @livepeer/core@1.3.1

## 2.3.0

### Minor Changes

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** changed the Player on React and React Native to hide the progress bar when viewing a livestream. Also improved the live stream experience with better HLS.js defaults for lower latency.

### Patch Changes

- [#291](https://github.com/livepeer/livepeer.js/pull/291) [`2c9bb91`](https://github.com/livepeer/livepeer.js/commit/2c9bb91eb9b09a8d113b47368afc3c89ecc2070e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed the styling of the stream error image on small displays (<400px).

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed an error where HLS errors would not provide detail and the Player would throw an `object undefined` error.

- Updated dependencies [[`2c9bb91`](https://github.com/livepeer/livepeer.js/commit/2c9bb91eb9b09a8d113b47368afc3c89ecc2070e), [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90), [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90)]:
  - @livepeer/core@1.3.0

## 2.2.3

### Patch Changes

- [#286](https://github.com/livepeer/livepeer.js/pull/286) [`cd502da`](https://github.com/livepeer/livepeer.js/commit/cd502da49908d70ceab241a84a4a670b1a54f701) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** renamed the `protocol` field to `sourceType` to align with the backend metrics websocket.

- Updated dependencies [[`cd502da`](https://github.com/livepeer/livepeer.js/commit/cd502da49908d70ceab241a84a4a670b1a54f701)]:
  - @livepeer/core@1.2.3

## 2.2.2

### Patch Changes

- [#284](https://github.com/livepeer/livepeer.js/pull/284) [`620751e`](https://github.com/livepeer/livepeer.js/commit/620751efbf1108ce207e5b83f67e28f9e7dd263e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added better logs for failure on `create` in Studio provider.

- Updated dependencies [[`620751e`](https://github.com/livepeer/livepeer.js/commit/620751efbf1108ce207e5b83f67e28f9e7dd263e)]:
  - @livepeer/core@1.2.2

## 2.2.1

### Patch Changes

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `usePlayerList` to use a React ref to avoid dynamic runtime `onViewableItemsChanged` errors.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed uploads in React Native environments by removing chunk size for tus.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `getIsVolumeChangeSupported` check to not fail for negative volume values.

- Updated dependencies [[`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7), [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7), [`b11ea90`](https://github.com/livepeer/livepeer.js/commit/b11ea90bb3e488bd6d6661846313849adf389cdf), [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7)]:
  - @livepeer/core@1.2.1

## 2.2.0

### Minor Changes

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added MP4 rendition prioritization to the React and React Native Player.

  This is for support of MP4 renditions returned from `playbackInfo` from the Studio provider. If an MP4 rendition exists for an Asset, it will be prioritized over HLS, since this has been introduced as a performance improvement over HLS for short-form video.

  The MP4 renditions will be chosen with the following algorithm: the device screen width and multiplied by a static multiplier (currently set to x2.5). This value is then compared to the rendition widths, and the renditions are prioritized based on the distance between these values. This results in a choice of a rendition which is close to the screen size without visual quality issues. For instance, a device with a 1280 pixel width would compute `1280px * 2.5 = 3200px`, and then sort the MP4 renditions by which are closest to this value.

### Patch Changes

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `pageUrl`, `protocol`, `preloadTime`, and `autoplay` to metrics to track performance of video load under specific conditions.

- Updated dependencies [[`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c), [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c)]:
  - @livepeer/core@1.2.0

## 2.1.5

### Patch Changes

- [#265](https://github.com/livepeer/livepeer.js/pull/265) [`318c082`](https://github.com/livepeer/livepeer.js/commit/318c0824a62cffa69c92ba4eb6c45afbb9920958) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** change the metrics reporting port for staging to use 443.

- Updated dependencies [[`318c082`](https://github.com/livepeer/livepeer.js/commit/318c0824a62cffa69c92ba4eb6c45afbb9920958)]:
  - @livepeer/core@1.1.5

## 2.1.4

### Patch Changes

- [#259](https://github.com/livepeer/livepeer.js/pull/259) [`9568500`](https://github.com/livepeer/livepeer.js/commit/95685009dcb4a2d86b2def2325ade9ddd6d13d1b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added Time to First Frame, Autoplay, and User Agent to metrics reporting. Fixed bugs with play time metrics reporting.

- Updated dependencies [[`9568500`](https://github.com/livepeer/livepeer.js/commit/95685009dcb4a2d86b2def2325ade9ddd6d13d1b)]:
  - @livepeer/core@1.1.4

## 2.1.3

### Patch Changes

- [#255](https://github.com/livepeer/livepeer.js/pull/255) [`0e5cbc9`](https://github.com/livepeer/livepeer.js/commit/0e5cbc98116332260178de3aa188db53b9f5f22c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed Node.js issue with `File` not being defined globally.

- Updated dependencies [[`0e5cbc9`](https://github.com/livepeer/livepeer.js/commit/0e5cbc98116332260178de3aa188db53b9f5f22c)]:
  - @livepeer/core@1.1.3

## 2.1.2

### Patch Changes

- [`a8a2c58`](https://github.com/livepeer/livepeer.js/commit/a8a2c582da2eb49ef33fca27587129ce1c1bfaa6) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** downgraded packages due to versioning conflicts and upgraded `zustand`.

- Updated dependencies [[`a8a2c58`](https://github.com/livepeer/livepeer.js/commit/a8a2c582da2eb49ef33fca27587129ce1c1bfaa6)]:
  - @livepeer/core@1.1.2

## 2.1.1

### Patch Changes

- [#248](https://github.com/livepeer/livepeer.js/pull/248) [`5a1c060`](https://github.com/livepeer/livepeer.js/commit/5a1c0606fc3ab1703a74ca02b18acfa93937d684) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed version headers to reference the correct package names.

- [#251](https://github.com/livepeer/livepeer.js/pull/251) [`686fb51`](https://github.com/livepeer/livepeer.js/commit/686fb5178a5746210cc16f1efb77f2c1273f4527) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated dependencies to latest versions.

- Updated dependencies [[`5a1c060`](https://github.com/livepeer/livepeer.js/commit/5a1c0606fc3ab1703a74ca02b18acfa93937d684), [`686fb51`](https://github.com/livepeer/livepeer.js/commit/686fb5178a5746210cc16f1efb77f2c1273f4527)]:
  - @livepeer/core@1.1.1

## 2.1.0

### Minor Changes

- [#240](https://github.com/livepeer/livepeer.js/pull/240) [`c4cb597`](https://github.com/livepeer/livepeer.js/commit/c4cb59762a31c865bb8ada9a4176caa614f6be7a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

### Patch Changes

- Updated dependencies [[`c4cb597`](https://github.com/livepeer/livepeer.js/commit/c4cb59762a31c865bb8ada9a4176caa614f6be7a)]:
  - @livepeer/core@1.1.0

## 2.0.0

### Major Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the default API key in the SDK for Studio with sunset plan of Jan 6th, 2023, to discourage spam use.

### Minor Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved browser-specific controls/styling/hls into a `/browser/` subpackage to clarify use.

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated dependencies to latest versions.

- [`f8ca8fa`](https://github.com/livepeer/livepeer.js/commit/f8ca8faa53b8248cf651a0306a448ff2ce823a7c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** removed the default border radius on mobile and web.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with IPFS auto-playback and mime type checking in browser.

- Updated dependencies [[`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52)]:
  - @livepeer/core@1.0.0

## 2.0.0-next.8

### Minor Changes

- [#212](https://github.com/livepeer/livepeer.js/pull/212) [`da28e70`](https://github.com/livepeer/livepeer.js/commit/da28e7037a50e4a3ac3711581cc762f516e5f31a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

### Patch Changes

- Updated dependencies [[`da28e70`](https://github.com/livepeer/livepeer.js/commit/da28e7037a50e4a3ac3711581cc762f516e5f31a)]:
  - @livepeer/core@1.0.0-next.6

## 2.0.0-next.7

### Patch Changes

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- Updated dependencies [[`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b)]:
  - @livepeer/core@1.0.0-next.4

## 2.0.0-next.6

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

- [`f8ca8fa`](https://github.com/livepeer/livepeer.js/commit/f8ca8faa53b8248cf651a0306a448ff2ce823a7c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** removed the default border radius on mobile and web.

- Updated dependencies [[`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52)]:
  - @livepeer/core@1.0.0-next.3

## 2.0.0-next.5

### Patch Changes

- [#195](https://github.com/livepeer/livepeer.js/pull/195) [`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- Updated dependencies [[`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169)]:
  - @livepeer/core@1.0.0-next.2

## 2.0.0-next.4

### Patch Changes

- [#189](https://github.com/livepeer/livepeer.js/pull/189) [`0f6bb63`](https://github.com/livepeer/livepeer.js/commit/0f6bb636f96ded681f9d02947f4ff022bab2a7cd) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with IPFS auto-playback and mime type checking in browser.

## 2.0.0-next.3

### Patch Changes

- [#187](https://github.com/livepeer/livepeer.js/pull/187) [`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- Updated dependencies [[`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e)]:
  - @livepeer/core@1.0.0-next.1

## 2.0.0-next.2

### Minor Changes

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

### Patch Changes

- Updated dependencies [[`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912), [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912)]:
  - @livepeer/core@1.0.0-next.0

## 2.0.0-next.1

### Major Changes

- [#172](https://github.com/livepeer/livepeer.js/pull/172) [`f2b5ed2`](https://github.com/livepeer/livepeer.js/commit/f2b5ed28bdbaf327609a845745637da0e010696c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the default API key in the SDK for Studio with sunset plan of Jan 6th, 2023, to discourage spam use.

## 1.5.0-next.0

### Minor Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved browser-specific controls/styling/hls into a `/browser/` subpackage to clarify use.

### Patch Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated dependencies to latest versions.

## 1.4.3

### Patch Changes

- [#158](https://github.com/livepeer/livepeer.js/pull/158) [`d89613e`](https://github.com/livepeer/livepeer.js/commit/d89613e34162247c4587c88f84e2410df97394ef) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed a bug with the same file not being able to be uploaded twice by the same client - reverted changes to the Tus fingerprint.

## 1.4.2

### Patch Changes

- [`3487d98`](https://github.com/livepeer/livepeer.js/commit/3487d9820e86aa970db744548bb067c27c51cbf3) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed a bug with network timeout not triggering a `<Player />` reload when using hls.js.

## 1.4.1

### Patch Changes

- [#145](https://github.com/livepeer/livepeer.js/pull/145) [`3620666`](https://github.com/livepeer/livepeer.js/commit/36206660ab8825480414e4fb13409e1c22cc68f2) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Fix:** fixed the behaviour that caused the video to pause when a user touched it on a mobile device without the controls being shown. The video now pauses on the second touch (after the controls are shown).

- [`825b25c`](https://github.com/livepeer/livepeer.js/commit/825b25c0c0d539b1596f932757f0184327fcb5c8) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed control state to use storage from the client.

## 1.4.0

### Minor Changes

- [#102](https://github.com/livepeer/livepeer.js/pull/102) [`0ea4ec7`](https://github.com/livepeer/livepeer.js/commit/0ea4ec7fc7f2fa2e1504c7e976cbcf55d335981d) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Feature:** Add support for multiple files at once using useCreateAsset.

  You can upload multiple assets at once by passing an array of files to the `mutate` function. In return you will get an array of uploaded assets.

### Patch Changes

- [#141](https://github.com/livepeer/livepeer.js/pull/141) [`dc79b20`](https://github.com/livepeer/livepeer.js/commit/dc79b20f9f95a5082934be24b0a56ea590f2d086) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed the prerendering query when `undefined` is return in `getStaticProps`.

## 1.3.0

### Minor Changes

- [#93](https://github.com/livepeer/livepeer.js/pull/93) [`f19779f`](https://github.com/livepeer/livepeer.js/commit/f19779f321fdd44b5c6a63b379f5d722e71a46e9) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added JWT handling in Player, with `livepeer/crypto` subpackage with JWT helpers for NodeJS access control on Assets and Streams.

  The Player has a new prop, `jwt`, which takes a base64Url-encoded signed JWT payload and passes it as a query parameter with the stream playlist request. The livepeer provider will evaluate the JWT and determine if it is valid, before returning a response.

  _Note: this currently only works for Streams! Assets will be supported in the future._

  ```diff
  + import { importPKCS8, signAccessJwt, type SignAccessJwtOptions } from 'livepeer';
  ```

  ```tsx
  <Player
    title="Agent 327: Operation Barbershop"
    playbackId="6d7el73r1y12chxr"
    jwt={jwt}
  />
  ```

### Patch Changes

- [#135](https://github.com/livepeer/livepeer.js/pull/135) [`61ce2dc`](https://github.com/livepeer/livepeer.js/commit/61ce2dc733e97216cb5ca3cc3066a489a796f7ca) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:**
  Fixed misbehaviour of the player controls on Safari macOS, by adjusting the controls' default z-index

- [#131](https://github.com/livepeer/livepeer.js/pull/131) [`118c262`](https://github.com/livepeer/livepeer.js/commit/118c262d7d1bc4a05d7eadf7f5445598a08320ce) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added handling of paths in IPFS and Arweave URLs for both auto-upload and Player playback.

## 1.2.2

### Patch Changes

- [#122](https://github.com/livepeer/livepeer.js/pull/122) [`f5b370c`](https://github.com/livepeer/livepeer.js/commit/f5b370cfb94f57c1075dbd9f211b6881bb0da017) Thanks [@suhailkakar](https://github.com/suhailkakar)! - Fix: updated the fingerprint for Tus upload. This should fix the issue with the resumable uploads.

- [#120](https://github.com/livepeer/livepeer.js/pull/120) [`86d9a69`](https://github.com/livepeer/livepeer.js/commit/86d9a69d82c32f841fc4e460c59267146ecf754c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** updated the Player metrics endpoint to use the correct ports for staging and canary environments.

- [#129](https://github.com/livepeer/livepeer.js/pull/129) [`543560c`](https://github.com/livepeer/livepeer.js/commit/543560c6b9bb25352c4cdfce4dc56d0405592f6d) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Added automatic fetching/importing of Arweave URLs to the Player.

  An Arweave URL (such as `ar://<HASH>`, `https://<SUBDOMAIN>.arweave.dev/<HASH>` or `https://arweave.net/<HASH>`, _but cannot be a directory_) can be passed as the `src` or `playbackID` to the Player, and it will automatically detect if it is a valid Arweave URL and attempt to fetch the playback info. If the API does not have an Asset with the corresponding Arweave transaction hash, the Player will automatically attempt to import the Arweave content, and then play the transcoded content back.

## 1.2.1

### Patch Changes

- [#113](https://github.com/livepeer/livepeer.js/pull/113) [`488bdcd`](https://github.com/livepeer/livepeer.js/commit/488bdcd31396be770190530b0f608fead01deb15) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved metrics addition to be a single function which handles fetching the reporting URL internally.

- [#107](https://github.com/livepeer/livepeer.js/pull/107) [`8aeb0b9`](https://github.com/livepeer/livepeer.js/commit/8aeb0b9a8f35407521f373f006bc8dc5482d303d) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Added automatic fetching/importing of IPFS URLs to the Player.

  An IPFS [v0 or v1 CID](https://docs.ipfs.tech/concepts/content-addressing/) or URL (such as `ipfs://<CID>`, `https://<CID>.ipfs.dweb.link/` or `https://cloudflare-ipfs.com/ipfs/<CID>`, _but cannot be a directory_) can be passed as the `src` or `playbackID` to the Player, and it will automatically detect if it is a valid CID and attempt to fetch the playback info for the CID. If the API does not have an Asset with the corresponding CID, the Player will automatically attempt to import the CID from IPFS, and then play the transcoded content back.

- [#115](https://github.com/livepeer/livepeer.js/pull/115) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** changed the z-index to hide browser controls on the Player to only be applied on fullscreen.

## 1.2.0

### Minor Changes

- [#104](https://github.com/livepeer/livepeer.js/pull/104) [`39d277f`](https://github.com/livepeer/livepeer.js/commit/39d277f6147bae605e97d64a0f56c0a3f4651f28) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the `meta` field on an Asset (which is a custom field stored in the Studio provider and not replicated to IPFS) to reduce confusion around metadata fields.

## 1.1.0

### Minor Changes

- [#98](https://github.com/livepeer/livepeer.js/pull/98) [`5fc44a5`](https://github.com/livepeer/livepeer.js/commit/5fc44a56e9e5ee5790bb05e76e1e430c44aee02a) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Feature:** added picture in picture support to the Livepeer player.

  We support both the [w3c](https://w3c.github.io/picture-in-picture/) standard (which most modern browsers support), as well as the [older Safari/iOS spec](https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls). See the browsers which support Picture-in-Picture on [caniuse](https://caniuse.com/picture-in-picture).

  ```tsx
  <Player playbackId="6d7el73r1y12chxr" showPipButton />
  ```

- [#92](https://github.com/livepeer/livepeer.js/pull/92) [`e7348f4`](https://github.com/livepeer/livepeer.js/commit/e7348f4c16fbcd5448147516c086c182d842a552) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** updated dependencies and fixed exporting to have individual paths for smaller bundle size.

### Patch Changes

- [#95](https://github.com/livepeer/livepeer.js/pull/95) [`0b02851`](https://github.com/livepeer/livepeer.js/commit/0b02851ed86e4c6ab0e28b5f575181d62c8dc629) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** further changes to imports to change build config to be smaller.

- [#98](https://github.com/livepeer/livepeer.js/pull/98) [`5fc44a5`](https://github.com/livepeer/livepeer.js/commit/5fc44a56e9e5ee5790bb05e76e1e430c44aee02a) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Fix:** fixed fullscreen state updating properly when entering/exiting fullscreen.

## 1.1.0-next.2

### Minor Changes

- [#98](https://github.com/livepeer/livepeer.js/pull/98) [`5fc44a5`](https://github.com/livepeer/livepeer.js/commit/5fc44a56e9e5ee5790bb05e76e1e430c44aee02a) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Feature:** added picture in picture support to the Livepeer player.

  We support both the [w3c](https://w3c.github.io/picture-in-picture/) standard (which most modern browsers support), as well as the [older Safari/iOS
  spec](https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls).
  See the browsers which support Picture-in-Picture on
  [caniuse](https://caniuse.com/picture-in-picture).

  ```tsx
  <Player playbackId="6d7el73r1y12chxr" showPipButton />
  ```

### Patch Changes

- [#98](https://github.com/livepeer/livepeer.js/pull/98) [`5fc44a5`](https://github.com/livepeer/livepeer.js/commit/5fc44a56e9e5ee5790bb05e76e1e430c44aee02a) Thanks [@suhailkakar](https://github.com/suhailkakar)! - **Fix:** fixed fullscreen state updating properly when entering/exiting fullscreen.

## 1.1.0-next.1

### Patch Changes

- [#95](https://github.com/livepeer/livepeer.js/pull/95) [`0b02851`](https://github.com/livepeer/livepeer.js/commit/0b02851ed86e4c6ab0e28b5f575181d62c8dc629) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** further changes to imports to change build config to be smaller.

## 1.1.0-next.0

### Minor Changes

- [#92](https://github.com/livepeer/livepeer.js/pull/92) [`e7348f4`](https://github.com/livepeer/livepeer.js/commit/e7348f4c16fbcd5448147516c086c182d842a552) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** updated dependencies and fixed exporting to have individual paths for smaller bundle size.

## 1.0.4

### Patch Changes

- [#90](https://github.com/livepeer/livepeer.js/pull/90) [`c61dff7`](https://github.com/livepeer/livepeer.js/commit/c61dff7fcaa58ebeb2c00c0cc03934a7fe7a894d) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added fixes for Safari live streaming - live streams should now show the "live" indicator and bad playlists/media errors
  will now retry loading with backoff.

- [#84](https://github.com/livepeer/livepeer.js/pull/84) [`f014cfa`](https://github.com/livepeer/livepeer.js/commit/f014cfa1f1cd6d7ea026c615a60b5350c80b48e1) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added metadata customization to storage to allow for customizing the metadata which is saved when an Asset
  is uploaded to IPFS.

## 1.0.3

### Patch Changes

- [#85](https://github.com/livepeer/livepeer.js/pull/85) [`adf52c5`](https://github.com/livepeer/livepeer.js/commit/adf52c5e0fb43676eb89db7244f896a41f4a5760) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed Safari flex not taking up entire parent container.

## 1.0.2

### Patch Changes

- [`d43c04a`](https://github.com/livepeer/livepeer.js/commit/d43c04ade7cfaf18800508a7da31d99b9989f931) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix**: added `PlayerObjectFit` type to exports.

## 1.0.1

### Patch Changes

- [#75](https://github.com/livepeer/livepeer.js/pull/75) [`73f37ad`](https://github.com/livepeer/livepeer.js/commit/73f37ad8ec312e949fb3420b48113896580f16de) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed too strict types on `<Player />`, background play/pause click handler not working without a poster element, theme overrides without a global theme, and styling for the container to take up the parent width and maintain aspect ratio.

## 1.0.0

### Major Changes

- [#42](https://github.com/livepeer/livepeer.js/pull/42) [`ea9d083`](https://github.com/livepeer/livepeer.js/commit/ea9d083869acf571af4cdc22a97b540f5c440f11) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** moved all contract interactions to a separate subpackage, to remove the need for the `ethers`/`wagmi` peer dependencies.

  ```diff
  +import {
  +  ArbRetryableTxABI,
  +  BondingManagerABI,
  +  ControllerABI,
  +  InboxABI,
  +  L1BondingManagerABI,
  +  L1MigratorABI,
  +  L2LPTGatewayABI,
  +  L2MigratorABI,
  +  LivepeerTokenABI,
  +  LivepeerTokenFaucetABI,
  +  MerkleSnapshotABI,
  +  MinterABI,
  +  NodeInterfaceABI,
  +  PollABI,
  +  PollCreatorABI,
  +  RoundsManagerABI,
  +  ServiceRegistryABI,
  +  TicketBrokerABI,

  +  allChainId,
  +  arbitrumOneAddress,
  +  arbitrumRinkebyAddress,
  +  mainnetAddress,
  +  mainnetChainId,
  +  rinkebyAddress,
  +  testnetChainId,

  +  getBondingManager,
  +  getContractAddressFromController,
  +  getController,
  +  getL1Migrator,
  +  getL2Migrator,
  +  getLivepeerToken,
  +  getLivepeerTokenFaucet,
  +  getMerkleSnapshot,
  +  getMinter,
  +  getPollCreator,
  +  getRoundsManager,
  +  getServiceRegistry,
  +  getTicketBroker,

  +  ArbRetryableTxFactory,
  +  BondingManagerFactory,
  +  ControllerFactory,
  +  InboxFactory,
  +  L1BondingManagerFactory,
  +  L1MigratorFactory,
  +  L2LPTGatewayFactory,
  +  L2MigratorFactory,
  +  LivepeerTokenFactory,
  +  LivepeerTokenFaucetFactory,
  +  MerkleSnapshotFactory,
  +  MinterFactory,
  +  NodeInterfaceFactory,
  +  PollCreatorFactory,
  +  PollFactory,
  +  RoundsManagerFactory,
  +  ServiceRegistryFactory,
  +  TicketBrokerFactory,
  +} from 'livepeer/contracts';

  +import type {
  +  L1Address,
  +  L1LivepeerChain,
  +  L1LivepeerChainId,
  +  L2Address,
  +  L2LivepeerChain,
  +  L2LivepeerChainId,
  +  LivepeerAddress,
  +  LivepeerChain,
  +  LivepeerChainId,
  +  MainnetLivepeerChain,
  +  MainnetLivepeerChainId,
  +  TestnetLivepeerChain,
  +  TestnetLivepeerChainId,

  +  ArbRetryableTx,
  +  BondingManager,
  +  Controller,
  +  Inbox,
  +  L1BondingManager,
  +  L1Migrator,
  +  L2LPTGateway,
  +  L2Migrator,
  +  LivepeerToken,
  +  LivepeerTokenFaucet,
  +  MerkleSnapshot,
  +  Minter,
  +  NodeInterface,
  +  Poll,
  +  PollCreator,
  +  RoundsManager,
  +  ServiceRegistry,
  +  TicketBroker,
  +} from 'livepeer/contracts';
  ```

### Minor Changes

- [#42](https://github.com/livepeer/livepeer.js/pull/42) [`ea9d083`](https://github.com/livepeer/livepeer.js/commit/ea9d083869acf571af4cdc22a97b540f5c440f11) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added styling for media player components using `@stitches/core` and polyfilling using `core-js`.

  Added a core vanilla JS store based on Zustand, w/ state propagated to/from a media element (see `MediaControllerState` and `MediaControllerStore`). Also added more helper functions for validating/constructing media sources and mime types, theming, and browser interactions.

  The following updates were made to `package.json`:

  ```diff
     },
     "peerDependenciesMeta": {},
     "dependencies": {
  +    "@stitches/core": "^1.2.8",
  +    "core-js": "^3.25.2",
       "cross-fetch": "^3.1.5",
       "hls.js": "^1.2.1",
       "tus-js-client": "^3.0.0",
  ```

  The following updates were made to the exports from `livepeer`:

  ```diff
     TestnetLivepeerChainId,
   } from './constants';
   export { HttpError, IncorrectChainIdError } from './errors';
  +export {
  +  addEventListeners,
  +  canPlayMediaNatively,
  +  createControllerStore,
  +  createNewHls,
  +  createPlayerTheme,
  +  defaultTheme,
  +  getCssText,
  +  getMediaSourceType,
  +  getMetricsReportingUrl,
  +  isHlsSupported,
  +  MetricsStatus,
  +  PlaybackMonitor,
  +  reportMediaMetrics,
  +  styling,
  +} from './media';
  +export type {
  +  AspectRatio,
  +  AudioSrc,
  +  ControlsOptions,
  +  HlsSrc,
  +  HlsVideoConfig,
  +  MediaControllerState,
  +  MediaControllerStore,
  +  PlaybackRecord,
  +  RawMetrics,
  +  Src,
  +  ThemeConfig,
  +  VideoSrc,
  +} from './media';
   export { createStorage, noopStorage } from './storage';
   export type { ClientStorage as Storage } from './storage';

   ...

     UpdateStreamArgs,
     ViewsMetrics,
   } from './types';
  -export { pick } from './utils';
  -export {
  -  createNewHls,
  -  getMetricsReportingUrl,
  -  isHlsSupported,
  -  MetricsStatus,
  -  PlaybackMonitor,
  -  reportVideoMetrics,
  -} from './video';
  -export type { HlsVideoConfig, PlaybackRecord, RawMetrics } from './video';
  +export { deepMerge, pick } from './utils';
  ```

### Patch Changes

- [#73](https://github.com/livepeer/livepeer.js/pull/73) [`55a9b81`](https://github.com/livepeer/livepeer.js/commit/55a9b81ebdd524a42da0fb7679ca75d11c4c91a9) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added media element duration to the metrics reporting plugin.

## 0.5.1

### Patch Changes

- [#68](https://github.com/livepeer/livepeer.js/pull/68) [`8f5e4a3`](https://github.com/livepeer/livepeer.js/commit/8f5e4a3118458b0b01b667ab81f98382eae7dc5d) Thanks [@victorges](https://github.com/victorges)! - Allow configuring base URL of Livepeer Studio provider

  You can now configure more parameters of the the Livepeer Studio provider,
  including specifically the `baseUrl` for the API calls.

  ```ts
  const livepeer = createReactClient({
    provider: studioProvider({
      baseUrl: 'https://studio.my-domain.com/root/api',
      apiKey: '123-abcd',
    }),
  });
  ```

## 0.5.0

### Minor Changes

- [#44](https://github.com/livepeer/livepeer.js/pull/44) [`648ddf5`](https://github.com/livepeer/livepeer.js/commit/648ddf528e9bc9250458e0c5f5140aa3f41878f0) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Asset Metrics

  There is now support for asset metrics, with start views count being returned
  when metrics have been reported to the correct reporting URL (this is handled in
  `@livepeer/react`'s `VideoPlayer`).

  ```typescript
  const metrics = getAssetMetrics({ assetId });

  const viewCount = metrics?.metrics?.[0]?.startViews ?? 0;
  ```

### Patch Changes

- [`416951d`](https://github.com/livepeer/livepeer.js/commit/416951d03c42e7bba1bbfa535a91e5f277130e5f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** @victorges added default chunk size of 5mb to tus upload, if the input is a stream.

## 0.4.0

### Minor Changes

- [#27](https://github.com/livepeer/livepeer.js/pull/27) [`6635d96`](https://github.com/livepeer/livepeer.js/commit/6635d964912654a4056bace416bc315ef5f18e2d) Thanks [@victorges](https://github.com/victorges)! - **Fix:** Improve LivepeerProvider types

  Types are now all documented and extensive for the current version of the Studio
  API which is the base for the LivepeerProvider interface.

  Storage API has also changed slightly, to allow storing an asset in multiple
  different storages in the future. Right now it still only supports IPFS, but the
  interface is now compatible with adding more storages in the future.

  **Feature:** Multistream

  The LivepeerProvider now supports the multistream feature. To use it simply add
  a `multistream` field with the desired configuration when creating or updating a
  `Stream` object.

  ```typescript
  const { mutate: createStream } = useCreateStream();
  createStream({
    name,
    multistream: {
      targets: [
        {
          url: 'rtmp://ingest.example.com/rtmp/myStreamKey',
        },
      ],
    },
  });
  ```

  **Feature:** Upload progress

  Track and show upload progress when creating assets through the `uploadProgress` field in the `useCreateAsset` hook.

  ```typescript
  function App() {
    const createAsset = useCreateAsset();
    return (
      <Button onClick={() => createAsset.mutate({ name, file })}>Create</Button>
      <Text>Upload progress: {100 * createAsset?.uploadProgress ?? 0}%</Text>
    );
  }
  ```

## 0.3.0

### Minor Changes

- [#26](https://github.com/livepeer/livepeer.js/pull/26) [`94fd2c8`](https://github.com/livepeer/livepeer.js/commit/94fd2c8c7b2d8d0b37f4ee074ecd23be8296bd35) Thanks [@clacladev](https://github.com/clacladev)! - **Feature:** added hls.js as a dependency and the creation of an HLS instance to manage a video element and provide HLS and LLHLS support.

  See below for the API changes:

  ```diff
  + export { createNewHls, isHlsSupported } from './video';
  + export type { HlsVideoConfig } from './video';
  ```

  The `createNewHls` can be used to instantiate a new `Hls` class which connects
  to the provided `HTMLMediaElement` to stream HLS video.

  ```typescript
  if (mediaElement && typeof window !== 'undefined' && isHlsSupported()) {
    const { destroy } = createNewHls(src, mediaElement, hlsConfig);
  }
  ```

  The `createNewHls` function also instantiates reporting to the provider to provide viewership/general metrics.

  This allows a user to build their own custom video player using different frameworks other than React, with easy integration with metrics and HLS out of the box.

### Patch Changes

- [#34](https://github.com/livepeer/livepeer.js/pull/34) [`d3aa654`](https://github.com/livepeer/livepeer.js/commit/d3aa654e8f7cd486ebedf481fec398a268fd4597) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated `zustand` and `ethers` to latest versions.

  ```diff
       "cross-fetch": "^3.1.5",
       "hls.js": "^1.2.1",
       "tus-js-client": "^3.0.0",
  -    "zustand": "^4.0.0"
  +    "zustand": "^4.1.1"
     },
     "devDependencies": {
  -    "@ethersproject/abi": "^5.6.4",
  -    "ethers": "^5.6.9"
  +    "@ethersproject/abi": "^5.7.0",
  +    "ethers": "^5.7.0"
     },
  ```

## 0.2.2

### Patch Changes

- [#5](https://github.com/livepeer/livepeer.js/pull/5) [`97c56f6`](https://github.com/livepeer/livepeer.js/commit/97c56f64b18f62c6b417e35ac27834747b7a0c20) Thanks [@0xcadams](https://github.com/0xcadams)! - Updated the default studio API key to use a new, tracked (and rate-limited) version.

  ```diff
  -export const defaultStudioApiKey = '182188f3-3ddf-4dc2-9889-79ecb17a26c9';
  +export const defaultStudioApiKey = '4991930c-f9ae-46a0-a2a8-488c466da778';
  ```

  Updated the types on `CreateAssetArgs` to include `ReadStream` for node.js environments.

  ```diff
  export type CreateAssetArgs = {
    name: string;

  - file: File;
  + file: File | ReadStream;
    };
  ```

## 0.2.1

### Patch Changes

- [#3](https://github.com/livepeer/livepeer.js/pull/3) [`1c38dcd`](https://github.com/livepeer/livepeer.js/commit/1c38dcde2a7abce7a7785bcd6880ab6f71f0e0e4) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the term "LPMS" from the library and replaced a "LPMS Provider" with a "Livepeer Provider".

  See below for the API changes:

  ```diff
  import {
    getL2Migrator,
    getLivepeerToken,
    getLivepeerTokenFaucet,
  - getLPMSProvider,
  + getLivepeerProvider,
    getMerkleSnapshot,
    getMinter,
    ...
    updateAsset,
    updateStream,
  - watchLPMSProvider,
  + watchLivepeerProvider,
    ...
  - GetLPMSProviderResult,
  - WatchLPMSProviderCallback,
  + GetLivepeerProviderResult,
  + WatchLivepeerProviderCallback,
    ...
    allChainId,
  - allLPMS,
    arbitrumOneAddress,
    arbitrumRinkebyAddress,
    ArbRetryableTxABI,
    BondingManagerABI,
    ControllerABI,
  - defaultLPMS,
  + defaultStudioApiKey,
    defaultTranscodingProfiles,
    InboxABI,
    L1BondingManagerABI,
    ...
    L2MigratorABI,
    LivepeerTokenABI,
    LivepeerTokenFaucetABI,
  + lpms,
    mainnetAddress,
    mainnetChainId,
    MerkleSnapshotABI,
    ...
    LivepeerAddress,
    LivepeerChain,
    LivepeerChainId,
  - LPMSName,
  + LivepeerProviderName,
    MainnetLivepeerChain,
    MainnetLivepeerChainId,
    TestnetLivepeerChain,
    ...
    L1Migrator,
    L2LPTGateway,
    L2Migrator,
  + LivepeerProvider,
  + LivepeerProviderConfig,
    LivepeerToken,
    LivepeerTokenFaucet,
  - LPMS,
  - LPMSProvider,
    MerkleSnapshot,
    Minter,
    ...
  } from "livepeer";
  ```

## 0.2.0

### Minor Changes

- [`ebd1587`](https://github.com/livepeer/livepeer.js/commit/ebd15872cf7ac48a092ad88ea3a470a1c788e223) Thanks [@0xcadams](https://github.com/0xcadams)! - The `livepeer` package is now comprised of five main groups:

  - **actions:** functions to write/read from Livepeer Media Server (LPMS) providers and the Livepeer protocol smart contracts
  - **client:** the singleton LPMS provider with persistence to local storage and global state management
  - **constants:** constants for the Studio LPMS provider (and future providers) and protocol contract addresses/ABIs/chain IDs
  - **errors:** custom errors for livepeer.js
  - **types:** Typescript typings for the LPMS provider interface, Typechain-generated types for protocol contracts, and utility types

  ### Actions

  ```diff
  + import {
  +   createAsset,
  +   createStream,
  +   getAsset,
  +   getBondingManager,
  +   getContractAddressFromController,
  +   getController,
  +   getL1Migrator,
  +   getL2Migrator,
  +   getLivepeerToken,
  +   getLivepeerTokenFaucet,
  +   getLPMSProvider,
  +   getMerkleSnapshot,
  +   getMinter,
  +   getPollCreator,
  +   getRoundsManager,
  +   getServiceRegistry,
  +   getStream,
  +   getStreamSession,
  +   getStreamSessions,
  +   getTicketBroker,
  +   updateAsset,
  +   updateStream,
  +   watchLPMSProvider,
  + } from 'livepeer';
  +
  + import type {
  +   GetLPMSProviderResult,
  +   WatchLPMSProviderCallback,
  + } from 'livepeer';
  ```

  ### Client

  ```diff
  + import { Client, createClient } from 'livepeer';
  + import type { ClientConfig } from 'livepeer';
  ```

  ### Constants

  ```diff
  + import {
  +   allChainId,
  +   allLPMS,
  +   arbitrumOneAddress,
  +   arbitrumRinkebyAddress,
  +   ArbRetryableTxABI,
  +   BondingManagerABI,
  +   ControllerABI,
  +   defaultLPMS,
  +   defaultTranscodingProfiles,
  +   InboxABI,
  +   L1BondingManagerABI,
  +   L1MigratorABI,
  +   L2LPTGatewayABI,
  +   L2MigratorABI,
  +   LivepeerTokenABI,
  +   LivepeerTokenFaucetABI,
  +   lpms,
  +   mainnetAddress,
  +   mainnetChainId,
  +   MerkleSnapshotABI,
  +   MinterABI,
  +   NodeInterfaceABI,
  +   PollABI,
  +   PollCreatorABI,
  +   rinkebyAddress,
  +   RoundsManagerABI,
  +   ServiceRegistryABI,
  +   studio,
  +   testnetChainId,
  +   TicketBrokerABI,
  + } from 'livepeer';
  +
  + import type {
  +   L1Address,
  +   L1LivepeerChain,
  +   L1LivepeerChainId,
  +   L2Address,
  +   L2LivepeerChain,
  +   L2LivepeerChainId,
  +   LivepeerAddress,
  +   LivepeerChain,
  +   LivepeerChainId,
  +   LPMSName,
  +   MainnetLivepeerChain,
  +   MainnetLivepeerChainId,
  +   TestnetLivepeerChain,
  +   TestnetLivepeerChainId,
  + } from 'livepeer';
  ```

  ### Types

  ```diff
  + import {
  +   ArbRetryableTxFactory,
  +   BondingManagerFactory,
  +   ControllerFactory,
  +   InboxFactory,
  +   L1BondingManagerFactory,
  +   L1MigratorFactory,
  +   L2LPTGatewayFactory,
  +   L2MigratorFactory,
  +   LivepeerTokenFactory,
  +   LivepeerTokenFaucetFactory,
  +   MerkleSnapshotFactory,
  +   MinterFactory,
  +   NodeInterfaceFactory,
  +   PollCreatorFactory,
  +   PollFactory,
  +   RoundsManagerFactory,
  +   ServiceRegistryFactory,
  +   TicketBrokerFactory,
  + } from 'livepeer';
  +
  + import type {
  +   Address,
  +   ArbRetryableTx,
  +   Asset,
  +   BondingManager,
  +   Controller,
  +   CreateAssetArgs,
  +   CreateStreamArgs,
  +   GetAssetArgs,
  +   GetStreamArgs,
  +   GetStreamSessionArgs,
  +   GetStreamSessionsArgs,
  +   Hash,
  +   Inbox,
  +   Ipfs,
  +   L1BondingManager,
  +   L1Migrator,
  +   L2LPTGateway,
  +   L2Migrator,
  +   LivepeerToken,
  +   LivepeerTokenFaucet,
  +   LPMS,
  +   LPMSProvider,
  +   MerkleSnapshot,
  +   Minter,
  +   NodeInterface,
  +   Poll,
  +   PollCreator,
  +   RoundsManager,
  +   ServiceRegistry,
  +   Stream,
  +   StreamSession,
  +   TicketBroker,
  +   TranscodingProfile,
  +   UpdateAssetArgs,
  +   UpdateStreamArgs,
  + } from 'livepeer';
  ```
