import React from 'react';
import Img from 'react-image';
import { LoadingCircle } from 'components';
import './ImageLoader.scss';

const ImageLoader = ({ src, alt, theme = 'dark', loader }) => {
  // console.log('ImageLoader', src);

  if (!loader) {
    loader = <DefaultLoading theme={theme} />;
  }

  // return <DefaultLoading theme={theme} />;
  return <Img src={src} alt={alt} loader={loader} />;
};

const DefaultLoading = ({ theme }) => (
  <div className={`image-default-loading ${theme}`}>
    <LoadingCircle />
  </div>
);

export default ImageLoader;
