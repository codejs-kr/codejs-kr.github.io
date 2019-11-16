import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';

const ReactEvernote = () => {
  const name = 'React Evernote';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap s-cover">
        <ImageLoader src={require('statics/img/development/react-evernote/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          React와 Firebase에 관심을 갖던 시기에 두가지를 활용해서 무언가를 만들어 보고 싶었습니다
          <br />
          그래서 평소에 자주 사용하는 Evernote를 구현해 보기로 하고 조금씩 작업을 시작해 보았습니다.
        </p>
        <p>에버노트의 UI 컴포넌트들을 좀 더 가볍고 직관적으로 재작성 하였습니다.</p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2016 ~ 2017</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 어플리케이션 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>노트 CRUD, 즐겨찾기, 테그기능 등</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>React, ES6, HTML5, SCSS, Webpack, Firebase Realtime DB</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://play.codejs.co.kr/react-evernote" theme="fill" icon="default">
          Live
        </A>
        <A href="https://github.com/dodortus/react-evernote" icon="github" theme="fill">
          Github
        </A>
      </section>

      <section className="features-wrap">
        <dl>
          <dt>Preview</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/react-evernote/preview.gif')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ReactEvernote;
