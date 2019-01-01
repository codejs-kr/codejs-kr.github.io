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

        <section className="overview">
          <p>
            칭찬합시다는 자발적 프로젝트로 제가 근무하는 회사의 인원이 증가하고 프로젝트 단위로 인원이 나뉘다 보니
            조금 딱딱해진 내부 분위기에 많은 분들이 함께 일하는 동료에게 격려나 칭찬 한마디 하는 것에 어려움을 느끼는 분들이 많다고 생각했습니다.
          </p>
          <p>
            그래서 서로가 서로에게 보람을 느낄 수 있도록 따뜻한 동력이 되었으면 하는 마음에 기획한 프로젝트입니다.
            한 달간 자신에게 전달된 메시지는 다음 달 1일에 공개하도록 했으며,
            바로 확인할 수 있는 메신저가 아닌 편지를 받는 듯한 느낌을 주려고 기획했습니다.
          </p>
          <p>
            개발된 내용은 DevSwag이라는 사내 개발자 행사에 맞춰 공개하였으며, 그 행사에서 칭찬합시다 프로젝트는 2위를 수상하였습니다.
          </p>
        </section>

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
              <p>HTML5, CSS3(SCSS), JavaScript(ES5), NodeJS, Express, EJS, MongoDB, Gulp</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://balloon.rsupport.com" className="button" target="_blank">Live</a>
        </section>

        <section className="features-wrap">
          <h3>Features</h3>
          <dl>
            <dt>로그인</dt>
            <dd>
              <p>구글 계정 연동 하였고, 계절 마다 자동으로 테마를 변경 되도록 설정함.</p>
              <img src={require("statics/img/development/balloon/main.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>칭찬 메시지 보내기</dt>
            <dd>
              <p>매달 7개의 칭찬 풍선이 충전되며, 칭찬 메시지에는 1개의 풍선이 소모 됩니다.</p>
              <img src={require("statics/img/development/balloon/feature1.png")} alt="" />
            </dd>
          </dl>
          <dl>
            <dt>내가 받은 칭찬 메시지</dt>
            <dd>
              <p>본인에게 도착한 칭찬 메시지는 매월 1일 칭찬함에서 열람 할 수 있습니다.</p>
              <img src={require("statics/img/development/balloon/feature3.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>칭찬왕 & 칭찬쟁이</dt>
            <dd>
              <p>
                매달 칭찬을 많이 받은 사람과 분기별로 칭찬을 많이 받은 사람을 선별하여<br />
                휴가를 제공 하자는 제안 하였고 회사에서도 흔쾌히 수용하여 주었습니다.
              </p>
              <img src={require("statics/img/development/balloon/feature2.png")} alt="" />
            </dd>
          </dl>
          <dl>
            <dt>사내 문화로 정착</dt>
            <dd>
              <p>
                오픈 이후 인사팀에서 추가적으로 아이디어를 내어서<br />
                휴게 공간에 칭찬왕 나무와 포스터를 게시 하여 좀 더 활성화 시킬 수 있었습니다.
              </p>
              <img src={require("statics/img/development/balloon/feature4.png")} alt={name} />
            </dd>
          </dl>
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