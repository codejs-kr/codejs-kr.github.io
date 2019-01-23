import React, { Component, Fragment } from 'react';
import { DevelopmentItem } from 'components';
import data from './data';

class DevelopmentPagingContainer extends Component {
  searchIndex = (arr, name) => {
    let result = 0;

    arr.some((obj, i) => {
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
      item3 = index + 3;
      item4 = index + 4;
    } else if (index === 1) {
      item1 = index - 1;
      item2 = index + 1;
      item3 = index + 2;
      item4 = index + 3;
    } else if ((arr.length - 1) === index) {
      item1 = index - 4;
      item2 = index - 3;
      item3 = index - 2;
      item4 = index - 1;
    } else if ((arr.length - 2) === index) {
      item1 = index - 3;
      item2 = index - 2;
      item3 = index - 1;
      item4 = index + 1;
    } else {
      item1 = index - 2;
      item2 = index - 1;
      item3 = index + 1;
      item4 = index + 2;
    }

    result.push(arr[item1]);
    result.push(arr[item2]);
    result.push(arr[item3]);
    result.push(arr[item4]);

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
