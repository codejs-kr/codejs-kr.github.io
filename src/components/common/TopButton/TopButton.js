import React from 'react';
import './TopButton.scss';

const TopButton = () => {
  return (
    <button id="top-button" onClick={moveTop}>
      Top
    </button>
  );
};

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    // behavior: 'smooth',
  });
}

export default TopButton;
