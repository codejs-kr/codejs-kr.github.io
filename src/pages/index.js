import { lazy } from 'react';

export { default as Toy } from './Toy';
export { default as Development } from './Development';
export { default as About } from './About';
export { default as Loading } from './Loading';

// Code splitting 2 depth pages
export const DevelopmentDetails = lazy(() => import('pages/DevelopmentDetails'));
export const NotFound = lazy(() => import('pages/NotFound'));
