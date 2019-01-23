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
    let item1;
    let item2;
    let item3;
    let item4;

    if (index === 0) {
      item1 = index + 1;
      item2 = index + 2;
    } else if ((arr.length - 1) === index) {
      item1 = index - 2;
      item2 = index - 1;
    } else {
      item1 = index - 1;
      item2 = index + 1;
    }

    result.push(arr[item1]);
    result.push(arr[item2]);

    return result;
  };

  moveTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { name } = this.props;
    const { searchIndex, filterData, moveTop } = this;
    const index = searchIndex(data, name);
    const listData = filterData(data, index);
    console.log('확인 name', name, index);
    moveTop();

    return (
      <div>
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
      </div>
    );
  }
}

export default DevelopmentPagingContainer;
