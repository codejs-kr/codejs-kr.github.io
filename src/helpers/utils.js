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

export default {
  moveTop,
};
