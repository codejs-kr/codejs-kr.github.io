import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class NateOnMyPC extends Component {
  render() {
    const name = "NateOn 내 PC제어 리뉴얼";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap x-center">
          <img src={require("statics/img/development/nateon-mypc/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            네이트온 내 PC제어 프로젝트는 이미 5년이상 서비스되던 사이트를 리뉴얼하는 프로젝트였습니다.<br />
            이 서비스에 사용되는 UI를 템플릿화 하였습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2012</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>원격제어 모듈 런쳐, 서비스 전체 UI 개발 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>Javascript, jQuery</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://www.codejs.co.kr/development/views/nateon" className="button" target="_blank">Live Template</a>
          <a href="http://rsupport.nate.com/rview/r8/main/index.aspx" className="button" target="_blank">Live Service</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default NateOnMyPC;
