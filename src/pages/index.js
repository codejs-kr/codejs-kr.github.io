import Loadable from 'react-loadable';
import Loading from './Loading';

export { default as About } from './About';
export { default as Development } from './Development';
export { default as Toy } from './Toy';

// 자주 사용되지 않거나, 뎁스가 있는 페이지는 CODE 스플릿
export const DevelopmentDetails = Loadable({
  loader: () => import('./DevelopmentDetails'),
  loading: Loading,
});

export const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});
