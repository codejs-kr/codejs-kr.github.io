import React, { Component } from 'react';
import { DevelopmentItem } from 'components';
import utils from 'helpers/utils';
import data from './data';

class DevelopmentPagingContainer extends Component {
  constructor(props) {
    super(props);

    this.ITEM_COUNT = 4;
  }

  componentDidMount() {
    utils.moveTop();
  }

  /**
   * title로 해당 배열 index 탐색
   * @param arr
   * @param name
   * @returns {number}
   */
  searchIndex = (arr, name) => {
    let result = 0;

    arr.some((obj, i) => {
      // console.log('arr.some', obj.title, i);
      if (obj.title.match(name)) {
        result = i;
        return true;
      }
    });

    return result;
  };

  /**
   * 페이징에 노출할 데이터 취합
   * @param arr
   * @param insertedIndex
   * @returns {Array}
   */
  filterData = (arr, insertedIndex) => {
    console.log('filterData :', arr, insertedIndex);
    const { ITEM_COUNT } = this;
    let result = [];
    let indexArr = [];

    // 첫번째 (1, 2, 3, 4)
    if (insertedIndex === 0) {
      const startIndex = 1;
      for (let i = startIndex; i <= ITEM_COUNT; i++) {
        indexArr.push(insertedIndex + i);
      }
      // 두번째 (0, 2, 3, 4)
    } else if (insertedIndex === 1) {
      const startIndex = -1;
      for (let i = startIndex; i <= startIndex + ITEM_COUNT; i++) {
        if (insertedIndex !== i) {
          let _index = insertedIndex + i;
          if (insertedIndex === _index) {
            _index++;
          }

          indexArr.push(_index);
        }
      }
      // 마지막 (-4, -3, -2, -1)
    } else if (insertedIndex === arr.length - 1) {
      const startIndex = -4;
      for (let i = startIndex; i <= startIndex + (ITEM_COUNT - 1); i++) {
        indexArr.push(insertedIndex + i);
      }
      // 마지막에서 두번째 (-3, -2, -1, 1)
    } else if (insertedIndex === arr.length - 2) {
      const startIndex = -3;
      for (let i = startIndex; i <= startIndex + ITEM_COUNT; i++) {
        if (i !== 0) {
          indexArr.push(insertedIndex + i);
        }
      }
      // 기본 양 옆 (-2, -1, 1, 2)
    } else {
      const startIndex = -2;
      for (let i = startIndex; i <= startIndex + ITEM_COUNT; i++) {
        if (i !== 0) {
          indexArr.push(insertedIndex + i);
        }
      }
    }

    indexArr.map((item) => {
      result.push(arr[item]);
    });

    return result;
  };

  render() {
    const { name } = this.props;
    const { searchIndex, filterData } = this;
    const index = searchIndex(data, name);
    const listData = filterData(data, index);

    return (
      <div>
        {listData.map((item, index) => {
          return (
            <DevelopmentItem key={index} title={item.title} imageURL={item.imageURL} contentURL={item.contentURL} />
          );
        })}
      </div>
    );
  }
}

export default DevelopmentPagingContainer;
