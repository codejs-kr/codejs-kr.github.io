import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, RowList } from 'components';
import toys from 'pages/data/toys';
import utils from 'helpers/utils';

const name = 'WebRTC 연구실';
const data = utils.findProjectData(toys, name);

const WebrtcLab = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap x-center s-contain">
        <ImageLoader src={require('statics/img/development/webrtc-lab/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          WebRTC를 이용한 프로젝트를 2년 넘게 진행하면서 참고 자료들이 모두 외국 자료들이라 저 또한 언어의 장벽에서 항상
          느림보가 돼야만 했습니다.
        </p>
        <p>
          WebRTC 연구실 이란 말은 다소 거창하지만, WebRTC를 배우고 싶어 하는 분들이 조금 더 진입하기 쉽게 하는 것을
          목적으로 제가 알게 된 정보들을 다듬어서 바로 사용할 수 있는 예제 공간으로 만들었습니다.
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
            <RowList data={data.devItems} />
          </li>
          <li>
            <strong>사용기술</strong>
            <RowList data={data.techStack} />
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="https://port-0-webrtc-lab-eg4e2alkowmsbp.sel4.cloudtype.app" theme="fill" icon="default">
          Live
        </A>
        <A href="https://github.com/codejs-kr/webrtc-lab" theme="fill" icon="github">
          Github
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default WebrtcLab;
