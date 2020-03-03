import React, { useState, useEffect } from 'react';
import { DefaultLoading } from '../ImageLoader/ImageLoader';
import './VideoLoader.scss';
import '../ImageLoader/ImageLoader.scss';

const VideoLoader = ({ src, delay = 500 }) => {
  const [isLoaded, setLoad] = useState(false);
  const className = isLoaded ? 'loaded' : 'loading';
  const videoEl = React.createRef();

  useEffect(() => {
    if (isLoaded) {
      console.log('videoEl', videoEl);
      setTimeout(() => {
        if (videoEl.current) {
          videoEl.current.play();
        }
      }, delay);
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <DefaultLoading />}
      <video className={className} muted loop onCanPlay={() => setLoad(true)} ref={videoEl}>
        <source src={src} type="video/mp4" />
        비디오를 지원하지 않습니다.
      </video>
    </>
  );
};

export default VideoLoader;
