const isDev = process.env.NODE_ENV === 'development';
const isMobile = !!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i);

export default {
  isDev,
  isMobile,
};
