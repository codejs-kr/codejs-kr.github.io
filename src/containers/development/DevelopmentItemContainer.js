import React, { Component, Fragment } from 'react';
import { DevelopmentItem } from 'components';

class DevelopmentItemContainer extends Component {
  render() {
    const data = [
      {
        title: "",
        imagePath: "",
        detailUrl: ""
      },
      {
        title: "",
        imagePath: "",
        detailUrl: ""
      }
    ];

    return (
      <Fragment>

        <DevelopmentItem />
      </Fragment>
    );
  }
}

export default DevelopmentItemContainer;
