import React, { Component, Fragment } from 'react';
import { DevelopmentItem } from 'components';
import data from './data';

class DevelopmentPagingContainer extends Component {
  searchIndex = (arr, name) => {
    let result = 0;

    arr.some((obj, i) => {
      console.log('확인 obj', name);
      if (obj.title.match(name)) {
        result = i;
        return true;
      }
    });

    return result;
  };

  filterData = (arr, index) => {
    let result = [];
    let one;
    let two;

    if (index === 0) {
      one = index + 1;
      two = index + 2;
    } else if ((arr.length - 1) === index) {
      one = index - 2;
      two = index - 1;
    } else {
      one = index - 1;
      two = index + 1;
    }

    result.push(arr[one]);
    result.push(arr[two]);

    return result;
  };

  render() {
    const { name } = this.props;
    const { searchIndex, filterData } = this;
    const index = searchIndex(data, name);
    const listData = filterData(data, index);
    console.log('확인 name', name, index);

    return (
      <Fragment>
        {
          listData.map((item, index) => {
            return (
              <DevelopmentItem
                key={index}
                title={item.title}
                imageURL={item.imageURL}
                contentURL={item.contentURL}
              />
            )
          })
        }
      </Fragment>
    );
  }
}

export default DevelopmentPagingContainer;
