import React from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const SamsungRemotePC = () => {
  const name = '삼성 Remote PC';

  return (
    <DevelopmentDetailTemplate title={`${name}️`}>
      <section className="image-wrap center cover">
        <img src={require('statics/img/development/remote-pc/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          삼성 Remote PC 프로젝트는 직원들이 자신의 PC를 테블릿에서 원격제어 하기위해 개발된 프로젝트입니다.
          <br />
          웹에서는 PC에 에이전트 설치, 연동, 상태 관리를 제공하였습니다.
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
            <p>원격제어 에이전트 설치 및 관리 메뉴 개발, 서비스 전체 마크업 개발</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML, CSS, JavaScript, jQuery</p>
          </li>
        </ul>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>메인</dt>
          <dd>
            <p>사이트는 로그인, 상품정보, 고객서비스로 간단하게 구성 되어있습니다.</p>
            <img src={require('statics/img/development/remote-pc/main.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>상품정보</dt>
          <dd>
            <p>간단한 소개 페이지의 마크업입니다.</p>
            <img src={require('statics/img/development/remote-pc/feature-guide.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>고객서비스</dt>
          <dd>
            <p>
              FAQ에 대한 내용을 DOM으로 랜더링 하였으며, 검색시 Javascript로 Text 검색을 하여 해당하는 목록을 보여주도록
              개발하였습니다.
            </p>
            <img src={require('statics/img/development/remote-pc/feature-faq.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>PC관리</dt>
          <dd>
            <p>연동된 PC의 상태를 확인 관리할 수 있습니다.</p>
            <img src={require('statics/img/development/remote-pc/feature-pc.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>멀티 디바이스</dt>
          <dd>
            <p>다양한 디바이스 환경에서 확인 가능하도록 크로스브라우징 하였습니다.</p>
            <img src={require('statics/img/development/remote-pc/feature-devices.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default SamsungRemotePC;
