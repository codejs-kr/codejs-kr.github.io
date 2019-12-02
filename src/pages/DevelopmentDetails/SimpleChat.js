import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import toys from 'statics/data/toys';
import utils from 'helpers/utils';

const name = '심플 채팅';
const data = utils.findProjectData(toys, name);

const SimpleChat = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/simple-chat/main.jpg')} alt={name} />
      </section>

      <section className="overview">
        <p>
          대학교 2학년 때 Java Applet을 이용하여 만들었던 저의 첫 게임입니다.
          <br />
          당시 이 게임을 개발하며 밤도 새보고, 처음 개발한 게임이다 보니 많은 시행착오를 겪게 해준 저에게는 소중한
          추억이었습니다.
          <br />
          프론트엔드 개발을 하면서 언젠간 당시 게임을 웹 버전으로 구현해 보고 싶다는 생각하였고 오래전 코드를 보며
          토이프로젝트로 조금씩 재 구현해 보았습니다.
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
        <A href="https://inspiring-sammet-2aa742.netlify.com" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>Preview</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/simple-chat/preview.gif')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>프로필 선택</dt>
          <dd>
            <p>채팅에 사용할 프로필 이미지를 선택합니다.</p>
            <ImageLoader src={require('statics/img/development/simple-chat/main.jpg')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>닉네임 입력</dt>
          <dd>
            <p>채팅에 사용할 닉네임을 입력합니다.</p>
            <ImageLoader src={require('statics/img/development/simple-chat/feature-intro.jpg')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>채팅 화면</dt>
          <dd>
            <p>참여자들의 메시지와 입장/퇴장 알림을 받을 수 있습니다.</p>
            <ImageLoader src={require('statics/img/development/simple-chat/feature-chat.jpg')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>참여자 목록</dt>
          <dd>
            <p>우측 상단 버튼을 누르면 참여자 목록이 나타납니다.</p>
            <ImageLoader src={require('statics/img/development/simple-chat/feature-userlist.jpg')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default SimpleChat;
