import React from 'react';
import utils from 'helpers/utils';
import './TopButton.scss';

const TopButton = () => {
  return (
    <button id="top-button" onClick={utils.moveTop}>
      Top
    </button>
  );
};

export default TopButton;
