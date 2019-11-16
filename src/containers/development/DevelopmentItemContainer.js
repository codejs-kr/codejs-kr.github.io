import React, { Fragment } from 'react';
import { DevelopmentItem } from 'components';
import data from './data';

const DevelopmentItemContainer = () => {
  return (
    <Fragment>
      {data.map((item, i) => {
        return <DevelopmentItem key={i} title={item.title} imageURL={item.imageURL} contentURL={item.contentURL} />;
      })}
    </Fragment>
  );
};

export default DevelopmentItemContainer;
