import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const NateOnMyPC = () => {
  const name = "네이트온 내 PC제어 리뉴얼";

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap x-center s-cover">
        <img src={require("statics/img/development/nateon-mypc/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          네이트온 내 PC제어 프로젝트는 이미 5년 이상 서비스 중인 웹사이트를 리뉴얼 및 UI 개선하는 프로젝트였습니다.<br />
          이 프로젝트에 사용된 UI를 템플릿화하여 적용 후 인수인계 하였습니다.
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
            <p>원격제어 모듈 런쳐, 서비스 전체 UI 개발 등</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML, CSS, JavaScript, jQuery</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/nateon" theme="fill" icon="default">Live Template</A>
        <A href="http://rsupport.nate.com/rview/r8/main/index.aspx" theme="fill" icon="default">Live Service</A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default NateOnMyPC;
