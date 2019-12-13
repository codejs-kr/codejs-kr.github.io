import React, { useState } from 'react';
import { DefaultLoading } from '../ImageLoader/ImageLoader';
import './VideoLoader.scss';
import '../ImageLoader/ImageLoader.scss';

const VideoLoader = ({ src }) => {
  const [isLoaded, setLoad] = useState(false);
  const className = isLoaded ? 'loaded' : 'loading';

  return (
    <>
      {!isLoaded && <DefaultLoading />}
      <video className={className} autoPlay muted loop onCanPlay={() => setLoad(true)}>
        <source src={src} type="video/mp4" />
        비디오를 지원하지 않습니다.
      </video>
    </>
  );
};

export default VideoLoader;
