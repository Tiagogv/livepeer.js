# @livepeer/core

## 1.4.2

### Patch Changes

- [#306](https://github.com/livepeer/livepeer.js/pull/306) [`07f4a6e`](https://github.com/livepeer/livepeer.js/commit/07f4a6e3e257834611481325cbe7c7617ec9bf43) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed access control error not resetting when livestream starts.

## 1.4.1

### Patch Changes

- [#304](https://github.com/livepeer/livepeer.js/pull/304) [`d2522dd`](https://github.com/livepeer/livepeer.js/commit/d2522dd5d9dffce55c1c9d6f18c4db2b1b7eccda) Thanks [@spreadzp](https://github.com/spreadzp)! - **Feature:** added support for base64 video sources - this allows for a video source like `data:video/webm;base64,GkX...AUL3` to be passed into the `src` prop and the Player will handle it properly.

## 1.4.0

### Minor Changes

- [#299](https://github.com/livepeer/livepeer.js/pull/299) [`ec96b12`](https://github.com/livepeer/livepeer.js/commit/ec96b12243b3688ddff9a55db1a03454d0af0e25) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `accessKey` and `onAccessKeyRequest` props to the Player, to support the `webhook` playback policy which allows users to play back streams/assets with webhook authentication. The access key is appended to the query string in the source URL of the video, and this access key is passed along to a user-defined webhook which validates the payload to make sure the user has access to the content.

### Patch Changes

- [#303](https://github.com/livepeer/livepeer.js/pull/303) [`8f65da8`](https://github.com/livepeer/livepeer.js/commit/8f65da8771771629da6c9fa5a55cce0447966d32) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** updated the metrics to send the `pageUrl` as the `document.referrer` when used in an iFrame context, to be able to attribute metrics to a page which uses an iFrame.

- [#302](https://github.com/livepeer/livepeer.js/pull/302) [`4ebec15`](https://github.com/livepeer/livepeer.js/commit/4ebec150d92f64be31fcb78e9db64c8af6a24f79) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added an `onError` callback to the Player to allow users to catch and handle miscellaneous errors which occur in the Player, which are not already handled.

## 1.3.2

### Patch Changes

- [#298](https://github.com/livepeer/livepeer.js/pull/298) [`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added the ability to autoplay videos without forcing mute. This works only in certain conditions where the site is considered "trusted" and the user has interacted with the site - see [Chrome](https://developer.chrome.com/blog/autoplay/) and [Safari](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) docs for further details on when this is allowed. We recommend testing on your site to ensure that the media will autoplay under the conditions that you expect the user to engage with your content.

- [#295](https://github.com/livepeer/livepeer.js/pull/295) [`3f653f7`](https://github.com/livepeer/livepeer.js/commit/3f653f716ed03b587389cda330541cb30a5f3b4a) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed the user agent string to be sanitized before passing to the metrics websocket.

- [#297](https://github.com/livepeer/livepeer.js/pull/297) [`1d34ea4`](https://github.com/livepeer/livepeer.js/commit/1d34ea483e8b5e2bfb01d009e376055deab4fe24) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added IPFS upload on creation of an asset, so no subsequent calls need to be made to upload to IPFS.

- [#298](https://github.com/livepeer/livepeer.js/pull/298) [`b79c11b`](https://github.com/livepeer/livepeer.js/commit/b79c11bb051d85bf47caa98d574eb0b1dff35e0b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** changed the default Player volume level to 1.0, from 0.2. To continue with the previous behavior, use `defaultVolume` in the [controls](https://docs.livepeer.org/reference/livepeer-js/Player#controls) prop.

## 1.3.1

### Patch Changes

- [#293](https://github.com/livepeer/livepeer.js/pull/293) [`8e28a01`](https://github.com/livepeer/livepeer.js/commit/8e28a016fb77059524b9a21cddf9e06df699a749) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `sourceUrl` reporting to the Player.

## 1.3.0

### Minor Changes

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** changed the Player on React and React Native to hide the progress bar when viewing a livestream. Also improved the live stream experience with better HLS.js defaults for lower latency.

### Patch Changes

- [#291](https://github.com/livepeer/livepeer.js/pull/291) [`2c9bb91`](https://github.com/livepeer/livepeer.js/commit/2c9bb91eb9b09a8d113b47368afc3c89ecc2070e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed the styling of the stream error image on small displays (<400px).

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed an error where HLS errors would not provide detail and the Player would throw an `object undefined` error.

## 1.2.3

### Patch Changes

- [#286](https://github.com/livepeer/livepeer.js/pull/286) [`cd502da`](https://github.com/livepeer/livepeer.js/commit/cd502da49908d70ceab241a84a4a670b1a54f701) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** renamed the `protocol` field to `sourceType` to align with the backend metrics websocket.

## 1.2.2

### Patch Changes

- [#284](https://github.com/livepeer/livepeer.js/pull/284) [`620751e`](https://github.com/livepeer/livepeer.js/commit/620751efbf1108ce207e5b83f67e28f9e7dd263e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added better logs for failure on `create` in Studio provider.

## 1.2.1

### Patch Changes

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `usePlayerList` to use a React ref to avoid dynamic runtime `onViewableItemsChanged` errors.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed uploads in React Native environments by removing chunk size for tus.

- [#272](https://github.com/livepeer/livepeer.js/pull/272) [`b11ea90`](https://github.com/livepeer/livepeer.js/commit/b11ea90bb3e488bd6d6661846313849adf389cdf) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `allowCrossOriginCredentials` to the React Player to allow cookies to be sent with playback requests.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `getIsVolumeChangeSupported` check to not fail for negative volume values.

## 1.2.0

### Minor Changes

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added MP4 rendition prioritization to the React and React Native Player.

  This is for support of MP4 renditions returned from `playbackInfo` from the Studio provider. If an MP4 rendition exists for an Asset, it will be prioritized over HLS, since this has been introduced as a performance improvement over HLS for short-form video.

  The MP4 renditions will be chosen with the following algorithm: the device screen width and multiplied by a static multiplier (currently set to x2.5). This value is then compared to the rendition widths, and the renditions are prioritized based on the distance between these values. This results in a choice of a rendition which is close to the screen size without visual quality issues. For instance, a device with a 1280 pixel width would compute `1280px * 2.5 = 3200px`, and then sort the MP4 renditions by which are closest to this value.

### Patch Changes

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `pageUrl`, `protocol`, `preloadTime`, and `autoplay` to metrics to track performance of video load under specific conditions.

## 1.1.5

### Patch Changes

- [#265](https://github.com/livepeer/livepeer.js/pull/265) [`318c082`](https://github.com/livepeer/livepeer.js/commit/318c0824a62cffa69c92ba4eb6c45afbb9920958) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** change the metrics reporting port for staging to use 443.

## 1.1.4

### Patch Changes

- [#259](https://github.com/livepeer/livepeer.js/pull/259) [`9568500`](https://github.com/livepeer/livepeer.js/commit/95685009dcb4a2d86b2def2325ade9ddd6d13d1b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added Time to First Frame, Autoplay, and User Agent to metrics reporting. Fixed bugs with play time metrics reporting.

## 1.1.3

### Patch Changes

- [#255](https://github.com/livepeer/livepeer.js/pull/255) [`0e5cbc9`](https://github.com/livepeer/livepeer.js/commit/0e5cbc98116332260178de3aa188db53b9f5f22c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed Node.js issue with `File` not being defined globally.

## 1.1.2

### Patch Changes

- [`a8a2c58`](https://github.com/livepeer/livepeer.js/commit/a8a2c582da2eb49ef33fca27587129ce1c1bfaa6) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** downgraded packages due to versioning conflicts and upgraded `zustand`.

## 1.1.1

### Patch Changes

- [#248](https://github.com/livepeer/livepeer.js/pull/248) [`5a1c060`](https://github.com/livepeer/livepeer.js/commit/5a1c0606fc3ab1703a74ca02b18acfa93937d684) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed version headers to reference the correct package names.

- [#251](https://github.com/livepeer/livepeer.js/pull/251) [`686fb51`](https://github.com/livepeer/livepeer.js/commit/686fb5178a5746210cc16f1efb77f2c1273f4527) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated dependencies to latest versions.

## 1.1.0

### Minor Changes

- [#240](https://github.com/livepeer/livepeer.js/pull/240) [`c4cb597`](https://github.com/livepeer/livepeer.js/commit/c4cb59762a31c865bb8ada9a4176caa614f6be7a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

## 1.0.0

### Major Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

### Minor Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

### Patch Changes

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with slider thumb not showing in correct position, add React Native video customization props, and fixed Player getting stuck in "play" after exit of fullscreen.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `priority` boolean to Player to enable lazy loading for content.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

## 1.0.0-next.6

### Minor Changes

- [#212](https://github.com/livepeer/livepeer.js/pull/212) [`da28e70`](https://github.com/livepeer/livepeer.js/commit/da28e7037a50e4a3ac3711581cc762f516e5f31a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

## 1.0.0-next.5

### Patch Changes

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with slider thumb not showing in correct position, add React Native video customization props, and fixed Player getting stuck in "play" after exit of fullscreen.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `priority` boolean to Player to enable lazy loading for content.

## 1.0.0-next.4

### Patch Changes

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

## 1.0.0-next.3

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

## 1.0.0-next.2

### Patch Changes

- [#195](https://github.com/livepeer/livepeer.js/pull/195) [`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

## 1.0.0-next.1

### Patch Changes

- [#187](https://github.com/livepeer/livepeer.js/pull/187) [`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

## 1.0.0-next.0

### Major Changes

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

### Minor Changes

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).
