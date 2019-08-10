import React, { Component } from 'react';
import { DevelopmentItem } from 'components';
import data from './data';

class DevelopmentPagingContainer extends Component {
  /**
   * title로 해당 배열 index 탐색
   * @param arr
   * @param name
   * @returns {number}
   */
  searchIndex = (arr, name) => {
    let result = 0;

    arr.some((obj, i) => {
      console.log('확인 obj', obj.title);
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
    const length = 4;
    let result = [];
    let indexArr = [];

    // 첫번째 (1, 2, 3, 4)
    if (insertedIndex === 0) {
      const startIndex = 1;
      for (let i = startIndex; i <= length; i++) {
        indexArr.push(insertedIndex + i);
      }
      // 두번째 (-1, 1, 2, 3)
    } else if (insertedIndex === 1) {
      const startIndex = -1;
      for (let i = startIndex; i <= startIndex + length; i++) {
        if (insertedIndex !== i) {
          indexArr.push(insertedIndex + i);
        }
      }
      // 마지막 (-4, -3, -2, -1)
    } else if (insertedIndex === arr.length - 1) {
      const startIndex = -4;
      for (let i = startIndex; i <= startIndex + (length - 1); i++) {
        indexArr.push(insertedIndex + i);
      }
      // 마지막에서 두번째 (-3, -2, -1, 1)
    } else if (insertedIndex === arr.length - 2) {
      const startIndex = -3;
      for (let i = startIndex; i <= startIndex + length; i++) {
        if (i !== 0) {
          indexArr.push(insertedIndex + i);
        }
      }
      // 기본 양 옆 (-2, -1, 1, 2)
    } else {
      const startIndex = -2;
      for (let i = startIndex; i <= startIndex + length; i++) {
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

  /**
   * 페이징 이동할때 시작점
   */
  moveTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { name } = this.props;
    const { searchIndex, filterData, moveTop } = this;
    const index = searchIndex(data, name);
    const listData = filterData(data, index);
    console.log('확인 index', name, index, listData);

    moveTop();

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
