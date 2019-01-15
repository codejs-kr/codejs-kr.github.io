import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class WebrtcPresentation extends Component {
  render() {
    const name = "WebRTC 발표 자료";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap center">
          <img src={require("statics/img/development/webrtc/main.jpg")} alt={name} />
        </section>

        <section className="overview">
          <p>
            WebRTC에 대한 기능 설명과 장점을 활용한 제품화를 위해 준비한 발표 자료입니다.
          </p>
          <p>
            WebRTC는 구글이 오픈소스화한 프로젝트에서 기원하였으며,
            그 뒤로 국제 인터넷 표준화 기구(IETF)가 프로토콜 표준화 작업을 수행하였고,
            W3C가 API 정의를 진행하였으며, 음성 통화, 영상 통화, P2P 파일 공유
            등으로 활용 될 수 있다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>발표년도</strong>
              <p>2013</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://webrtclab.herokuapp.com/introduction" className="button" target="_blank">Live</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default WebrtcPresentation;
