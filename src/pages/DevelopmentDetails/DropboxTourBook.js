import React from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const DropboxTourBook = () => {
  const name = "DropBox Tour Book";

  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap cover">
        <img src={require("statics/img/development/dropbox-tour-book/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          DropBox를 소개하는 간단한 Book UI입니다. 이 페이지를 접한 순간 Simple is Best란 말이 생각나더군요...<br />
          버튼 클릭 시, 페이지를 보여주고 가려주는 간단한 형식이지만, 가독성 및 몰입도가 좋은 UI라 구현해 보았습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2012</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>UI 구현</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, jQuery</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <a href="http://www.codejs.co.kr/development/views/dropbox/" className="button" target="_blank">Live</a>
      </section>

      <section className="more-wrap">
        <h3>More Projects</h3>
        <DevelopmentPagingContainer name={name} />
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default DropboxTourBook;
