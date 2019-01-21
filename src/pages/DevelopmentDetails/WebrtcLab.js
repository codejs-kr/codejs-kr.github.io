import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class WebrtcLab extends Component {
  render() {
    const name = "WebRTC 연구실";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap x-center">
          <img src={require("statics/img/development/webrtc-lab/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            WebRTC를 이용한 프로젝트를 2년 넘게 진행하면서 참고 자료들이 모두 외국 자료들이라
            저 또한 언어의 장벽에서 항상 느림보가 돼야만 했습니다.
          </p>
          <p>
            WebRTC 연구실 이란 말은 다소 거창하지만,
            WebRTC를 배우고 싶어 하는 분들이 조금 더 진입하기 쉽게 하는 것을 목적으로 제가 알게 된 정보들을 다듬어서 바로 사용할 수 있는 예제 공간으로 만들었습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2016 ~ 2018</p>
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
              <p>HTML5, CSS3, WebRTC, WebSocket, JavaScript, NodeJS, Express, EJS</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://webrtclab.herokuapp.com" className="button" target="_blank">Live</a>
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

export default WebrtcLab;
