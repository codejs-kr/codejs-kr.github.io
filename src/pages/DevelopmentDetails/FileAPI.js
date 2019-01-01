import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class FileAPI extends Component {
  render() {
    const name = "HTML5 File API 활용";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap cover">
          <img src={require("statics/img/development/file-api/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            HTML5 File API란 웹 애플리케이션이 로컬 파일의 내용에 접근할 수 있도록 하는 API입니다.
          </p>
          <p>
            큰 특징을 정리한 내용입니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2013</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>마이크 & 캠 접근하기, 비디오 필터, 1:1 화상회의 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>WebRTC, WebSocket, NodeJS, Express, EJS</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://www.codejs.co.kr/development/views/file-upload/" className="button" target="_blank">Live</a>
          <a href="https://github.com/dodortus/webrtc-lab" className="button" target="_blank">Github</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default FileAPI;
