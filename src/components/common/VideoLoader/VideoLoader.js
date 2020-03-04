import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { DefaultLoading } from '../ImageLoader/ImageLoader';
import '../ImageLoader/ImageLoader.scss';
import './VideoLoader.scss';

const VideoLoader = ({ src }) => {
  const [isLoaded, setLoad] = useState(false);
  const className = isLoaded ? 'loaded' : 'loading';
  const videoEl = React.createRef();

  return (
    <InView
      onChange={(inView) => {
        const video = videoEl.current;
        video[inView ? 'play' : 'pause']();
        // console.log('Inview:', inView, video.currentTime);
      }}
    >
      {!isLoaded && <DefaultLoading />}
      <video ref={videoEl} className={className} muted loop onCanPlay={() => setLoad(true)}>
        <source src={src} type="video/mp4" />
        비디오를 지원하지 않습니다.
      </video>
    </InView>
  );
};

export default VideoLoader;
