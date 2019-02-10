import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const ReactEvernote = () => {
  const name = "React Evernote";

  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap s-cover">
        <img src={require("statics/img/development/react-evernote/main.png")} alt={name} />
      </section>

      <section className="overview">
        React와 Firebase에 관심을 갖던 시기에 두가지를 활용해서 무언가를 만들어 보고 싶었습니다<br />
        그래서 평소에 자주 사용하는 Evernote를 구현해 보기로 하고 조금씩 작업을 시작해 보았습니다.
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2017</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 어플리케이션 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>노트, 즐겨찾기, 테그 등</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3(SCSS), JavaScript(ES6), React, Firebase Realtime DB, Webpack</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://play.codejs.co.kr/react-evernote">Live</A>
        <A href="https://github.com/dodortus/react-evernote" icon="github">Github</A>
      </section>

      <section className="more-wrap">
        <h3>More Projects</h3>
        <DevelopmentPagingContainer name={name} />
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ReactEvernote;
