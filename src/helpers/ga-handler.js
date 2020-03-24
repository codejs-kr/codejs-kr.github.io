/**
 * 동적으로 호출하는 페이지를 GA 트레킹한다.
 * @param page
 */
function sendGA(page) {
  console.log('sendGA', page);
  ga('send', 'pageview', { page: page });
}

export default sendGA;
