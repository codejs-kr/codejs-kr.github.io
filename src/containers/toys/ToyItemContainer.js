import React, { Component, Fragment } from 'react';
import { ToyItem } from 'components';
import data from 'containers/development/data';

class ToyItemContainer extends Component {
  render() {

    return (
      <Fragment>
        {
          data.map((item, index) => {
            if (item.state && item.state === 'toys') {
              return (
                <ToyItem
                  key={index}
                  title={item.title}
                  imageURL={item.imageURL}
                  contentURL={item.contentURL}
                  github={item.github}
                />
              )
            }
          })
        }
      </Fragment>
    );
  }
}

export default ToyItemContainer;
