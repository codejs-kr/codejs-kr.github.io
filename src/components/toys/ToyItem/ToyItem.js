import React from 'react';
import './ToyItem.scss';

const ToyItem = ({ title, imageURL, github }) => {
  return (
    <div className="toy-item">
      <a href={github} target="_blank">
        <strong>{title}</strong>
        <img src={imageURL} alt={title} />
      </a>
    </div>
  );
};

export default ToyItem;
