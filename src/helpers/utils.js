/**
 * 페이지 스크롤 정보를 스토리지에 저장합니다.
 */
export const setStorageScroll = (data) => {
  // console.log('setStorageScroll', data);

  const { page, top } = data;
  const savedData = JSON.parse(sessionStorage.getItem('scrollInfo'));
  const scrollInfo = {
    ...savedData,
    [page]: {
      top,
    },
  };

  sessionStorage.setItem('scrollInfo', JSON.stringify(scrollInfo));
};

/**
 * 페이지 스크롤 정보를 스토리지에서 추출합니다.
 */
export const getStorageScroll = () => {
  const data = JSON.parse(sessionStorage.getItem('scrollInfo'));
  // console.log('getStorageScroll', data);

  return data;
};

/**
 * window 스크롤을 이동합니다.
 */
export const moveTop = (options) => {
  let top = 0;
  let left = 0;
  let behavior = 'auto';

  if (options) {
    top = options.top || top;
    left = options.left || left;
    behavior = options.behavior || behavior;
  }

  window.scrollTo({
    top,
    left,
    behavior,
  });
};

/**
 * 프로젝트 상세 정보를 반환
 * @param {*} data
 * @param {*} id
 */
export const findProjectData = (data, name) => {
  // console.log('findProjectData :', data, name);
  let result;

  data.some((target) => {
    const list = target.list;

    if (list) {
      return list.some((project) => {
        if (project.name === name) {
          return (result = project);
        }
      });
    } else if (target.name === name) {
      return (result = target);
    }
  });

  return result;
};

export default {
  moveTop,
  findProjectData,
  getStorageScroll,
  setStorageScroll,
};
