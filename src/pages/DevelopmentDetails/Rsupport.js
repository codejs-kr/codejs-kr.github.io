import React from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const Rsupport = () => {
  const name = "알서포트닷컴 사이트 개발";

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <img src={require("statics/img/development/rsupport/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          알서포트 회사 공식 사이트 개발 프로젝트입니다.<br />
          5개 국어를 지원하는 사이트로 다국어 처리를 고려하여 UI 요소들을 확장 가능하도록 마크업 하였습니다.<br />
          오픈 후 마케팅 요구 사항에 맞춰 기능 개발과 유지 보수 개발을 진행한 프로젝트입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2010 ~ 2011</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 사이트 마크업 및 UI 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>다국어 확장성을 고려한 마크업, Slide UI, Tab UI, 비디오플레이어 연동, 다국어 처리</p>
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
            <p>페이지 상단과 뉴스 내용이 노출되는 Horizental / Vertical 슬라이드 UI를 개발하였습니다.</p>
            <img src={require("statics/img/development/rsupport/main.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>특징</dt>
          <dd>
            <p>제품별 특징과 상세 페이지들을 마크업하였습니다.</p>
            <img src={require("statics/img/development/rsupport/feature-products.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>비디오가이드</dt>
          <dd>
            <p>제품의 사용법을 안내하는 영상들 플레이 할 수 있도록 플레이어 연동 및 리스트를 개발하였습니다.</p>
            <img src={require("statics/img/development/rsupport/feature-video.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>무료데모신청</dt>
          <dd>
            <p>제품별로 체험을 할 수 있도록 가입신청을 받는 페이지로 유효성 체크를 하여 ajax로 서버 전송합니다.</p>
            <img src={require("statics/img/development/rsupport/feature-trial.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>제품활용 Tip</dt>
          <dd>
            <p>제품별로 사용팁을 안내하는 페이지입니다. 마크업과 Tab UI를 개발하였습니다.</p>
            <img src={require("statics/img/development/rsupport/feature-tip.png")} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default Rsupport;
