import React from 'react';
import './ToyItem.scss';

const ToyItem = ({ id, title, imageURL, github }) => {
  return (
    <div id={id} className="toy-item">
      <a href={github} target="_blank">
        <strong>{title}</strong>
        <img src={imageURL} alt={title} />
      </a>
    </div>
  );
};

export default ToyItem;
