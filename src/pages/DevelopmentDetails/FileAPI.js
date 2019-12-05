import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';

const FileAPI = () => {
  const name = 'HTML5 File API 활용';

  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/file-api/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          HTML5 File API란 웹 애플리케이션이 로컬 파일의 내용에 접근할 수 있도록 하는 API입니다.
          <br />
          File API의 스펙을 알아볼 겸 만들어 본 예제입니다.
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
            <p>Javascript file API</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/file-upload/" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <dl>
          <dt>Preview</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/file-api/preview.gif')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default FileAPI;
