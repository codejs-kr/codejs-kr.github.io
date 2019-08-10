import React from 'react';
import './TopButton.scss';

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const TopButton = () => {
  return (
    <button id="top-button" onClick={moveTop}>
      Top
    </button>
  );
};

export default TopButton;
