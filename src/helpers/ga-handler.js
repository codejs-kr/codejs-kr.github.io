/**
 * 동적으로 호출하는 페이지를 GA 트레킹한다.
 * @param page
 */
function sendGA(page) {
  if (page.match('home')) {
    return false;
  }
  ga('send', 'pageview', { page: page });
  console.log('sendGA', page);
}

export default sendGA;
