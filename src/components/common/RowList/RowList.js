import React from 'react';
import './RowList.scss';

const RowList = ({ data }) => {
  return (
    <ul className="row-list">
      {data.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default RowList;
