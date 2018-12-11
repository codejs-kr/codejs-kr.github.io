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
          칭찬합시다는 제가 근무하는 회사의 인원이 증가하고 프로젝트 단위로 인원이 구성되다 보니
          서로가 서로에게 조금 딱딱해진 내부 분위기에 동력이 되었으면 하는 마음에서 기획한 프로젝트 입니다.
          DevSwag이라는 회사 개발자 발표회에 맞춰 공개하였으며,
          그 행사에서 칭찬합시다 프로젝트가 2위를 수상하였습니다.
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
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default Balloon;
