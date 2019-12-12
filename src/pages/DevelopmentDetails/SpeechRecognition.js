import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import toys from 'pages/data/toys';
import utils from 'helpers/utils';

const name = 'Speech Recognition';
const data = utils.findProjectData(toys, name);

const SpeechRecognition = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap center">
        <ImageLoader src={require('statics/img/development/stt/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          음성 인식 API를 개발에 활용하기 위해 다양하게 테스트하며 정리한 예제를 공개합니다.
          <br />
          Chrome의 음성 인식 API (Speech Recognition API)는 크롬이 25버전부터 지원된 스펙입니다.
          <br />
          음성 인식 API 인스턴스 생성 후 간단한 호출로 브라우저에 내장되어 있는 음성인식 API를 사용할 수 있습니다.
        </p>
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
        <A href="https://webrtclab.herokuapp.com/speech-recognition" theme="fill" icon="default">
          Live
        </A>
        <A
          href="https://github.com/dodortus/webrtc-lab/tree/master/frontend/views/examples/speech-recognition"
          theme="fill"
          icon="github"
        >
          Github
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default SpeechRecognition;
