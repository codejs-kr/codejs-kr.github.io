import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class Balloon extends Component {
  render() {
    const name = "칭찬합시다";

    return (
      <DevelopmentDetailTemplate title={`${name} (사내문화정착 프로젝트)`}>
        <section className="image-wrap x-center">
          <img src={require("statics/img/development/balloon/main.png")} alt={name} />
        </section>

        <h2>
          칭찬합시다는
        </h2>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2015 ~ 현재</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>기획, 디자인, 웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>구글 계정 연동, 메시징 처리, 데이터 암호화, 스케줄링, 자동 메일 발송, 어드민, REST API 개발</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>Javascript(ES5), SCSS, NodeJS, Express, EJS, MongoDB, Gulp</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://balloon.rsupport.com" className="button" target="_blank">Live</a>
        </section>

        <section>
          <h3>Features</h3>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <div>
            <DevelopmentPagingContainer name={name} />
          </div>
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default Balloon;
