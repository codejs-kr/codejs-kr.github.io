import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import jobs from 'pages/data/jobs';
import utils from 'helpers/utils';

const name = '리모트세미나';
const data = utils.findProjectData(jobs, name);

const RemoteSeminar = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/remoteseminar/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>{data.description}</p>
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
            <p>{data.devItems.join(', ')}</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>{data.techStack.join(', ')}</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A theme="fill" icon="flask">
          개발중
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>현재 Beta 서비스 준비중입니다.</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/remoteseminar/feature1.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>Preview</dt>
          <dd>
            <p>
              지난 4월 일본에서 시연했던 프로토타입 버전입니다.
              <br />
              발표자가 문서, 스크린, 유튜브 공유를 자유롭게 프리젠테이션 할 수 있는 웹 어플리케이션입니다.
            </p>
            <video autoPlay muted loop poster={require('statics/img/development/remoteseminar/poster.jpg')}>
              <source src={require('statics/img/development/remoteseminar/preview.mp4')} type="video/mp4" />
              Not support video source
            </video>
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteSeminar;
