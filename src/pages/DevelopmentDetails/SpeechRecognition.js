import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class SpeechRecognition extends Component {
  render() {
    const name = "Speech Recognition";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap center">
          <img src={require("statics/img/development/stt/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            음성 인식 API를 개발에 활용하기 위해 다양하게 테스트하며 정리한 예제를 공개합니다.<br />
            Chrome의 음성 인식 API (Speech Recognition API)는 크롬이 25버전부터 지원된 스펙입니다.<br />
            음성 인식 API 인스턴스 생성 후 간단한 호출로 브라우저에 내장되어 있는 음성인식 API를 사용할 수 있습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2017</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>Speech recognition, Text to speech 예제 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>Javascript speech recognition API</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://webrtclab.herokuapp.com/speech-recognition" className="button" target="_blank">Live</a>
          <a href="https://github.com/dodortus/webrtc-lab/tree/master/frontend/views/examples/speech-recognition" className="button" target="_blank">Github</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default SpeechRecognition;
