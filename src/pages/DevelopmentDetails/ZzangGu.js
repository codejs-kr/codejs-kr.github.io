import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const ZzangGu = () => {
  const name = "짱구";

  return (
    <DevelopmentDetailTemplate title={`${name} 🕹️`}>
      <section className="image-wrap center s-contain">
        <img src={require("statics/img/development/zzanggu/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          대학교 2학년 때 Java Applet을 이용하여 만들었던 저의 첫 게임입니다.<br />
          당시 이 게임으로 좋은 성적도 받고 처음으로 개발한 게임이다 보니 저에게는 소중한 추억이었습니다.<br />
          웹개발을 하면서 언젠가 당시 게임을 웹 버전으로 구현해 보고 싶다는 생각하였고,
          오래전 코드를 보며 토이프로젝트로 조금씩 재 구현해 보았습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2016</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>게임 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>Canvas 드로잉 처리, 캐릭터 처리, 미사일 처리, 충돌 처리, 키보드 이벤트 처리, 사운드 처리</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5 Canvas, CSS3, JavaScript(ES6), WebPack</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="https://github.com/dodortus/zzanggu">Live</A>
        <A href="https://github.com/dodortus/zzanggu" icon="github">Github</A>
      </section>

      <section className="more-wrap">
        <h3>More Projects</h3>
        <DevelopmentPagingContainer name={name} />
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ZzangGu;
