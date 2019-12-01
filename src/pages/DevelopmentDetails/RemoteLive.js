import React from 'react';
import { DevelopmentDetailTemplate, ImageLoader } from 'components';
import jobs from 'statics/data/jobs';
import utils from 'helpers/utils';

const name = '리모트라이브';
const data = utils.findProjectData(jobs, name);

const RemoteLive = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap x-center cover">
        <ImageLoader src={require('statics/img/development/remotelive/feature-meeting.png')} alt={name} />
      </section>

      <section className="overview">
        <p>{data.description}</p>
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

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>입장 대기화면</dt>
          <dd>
            <p>초대받은 링크로 들어오면 방장이 기다리고 있다고 알려줍니다.</p>
            <ImageLoader src={require('statics/img/development/remotelive/feature-join.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>영상과 채팅</dt>
          <dd>
            <p>WebRTC로 연결된 카메라 화면이 보이며, 채팅도 주고 받을 수 있습니다.</p>
            <ImageLoader src={require('statics/img/development/remotelive/feature-meeting.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>WebRTC에 대한 간략소개</dt>
          <dd>
            <p>2014년엔 WebRTC가 국내에 많이 알려지지 않던 시기라서 간단한 소개를 덧붙였습니다.</p>
            <ImageLoader src={require('statics/img/development/remotelive/feature-webrtc.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>자사 서비스와의 연동 제안</dt>
          <dd>
            <p>모듈화하여 자사 서비스에 연동하여 채팅 및 화상회의를 할 수 있도록 제안하였습니다.</p>
            <ImageLoader src={require('statics/img/development/remotelive/feature-integration.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteLive;
