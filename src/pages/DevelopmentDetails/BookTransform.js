import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class BookTransform extends Component {
  render() {
    const name = "Book Transform";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap">
          <img src={require("statics/img/development/book-transform/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            순수 CSS3의 Transform을 활용하여 만든 멋진 UI를 보고 한눈에 반해서 코드 분석 후 따라 만들어 봤습니다.<br/>
            이전에 이 정도 에니메이션을 연출하기 위해서는 자바스크립트 없이는 불가능하였지만,
            이제는 자바스크립트가 없어도 보다 적은 코드로 효과적인 에니메이션을 연출할 수 있게 되었습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2013</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>데모 구현</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>CSS3 Transform, Transition</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://www.codejs.co.kr/development/views/transform/" className="button" target="_blank">Live</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default BookTransform;
