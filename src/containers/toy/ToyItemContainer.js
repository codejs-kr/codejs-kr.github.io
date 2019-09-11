import React, { Fragment } from 'react';
import { ToyItem } from 'components';
import data from 'containers/development/data';

const ToyItemContainer = () => {
  return (
    <Fragment>
      {data.map((item, index) => {
        if (item.state && item.state === 'toy') {
          return (
            <ToyItem
              key={index}
              id={item.id}
              title={item.title}
              imageURL={item.imageURL}
              contentURL={item.contentURL}
              github={item.github}
            />
          );
        }
      })}
    </Fragment>
  );
};

export default ToyItemContainer;
