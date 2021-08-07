import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, RowList } from 'components';
import toys from 'pages/data/toys';
import utils from 'helpers/utils';

const name = 'React Evernote';
const data = utils.findProjectData(toys, name);

const ReactEvernote = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap s-cover">
        <ImageLoader src={require('statics/img/development/react-evernote/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>{data.description}</p>
        <p>에버노트의 UI 컴포넌트들을 좀 더 가볍고 직관적으로 재작성 하였습니다.</p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>{data.date}</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>{data.role}</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <RowList data={data.devItems} />
          </li>
          <li>
            <strong>사용기술</strong>
            <RowList data={data.techStack} />
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://play.codejs.co.kr/react-evernote" theme="fill" icon="default">
          Live
        </A>
        <A href="https://github.com/codejs-kr/react-evernote" icon="github" theme="fill">
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
