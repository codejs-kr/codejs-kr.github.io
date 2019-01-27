import React from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const ZzangGu = () => {
  const name = "짱구";

  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap center">
        <img src={require("statics/img/development/zzanggu/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          미니게임
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>진행중</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 어플리케이션 설계 및 개발</p>
          </li>
        </ul>
      </section>

      {/*<section className="button-wrap">*/}
      {/*<a href="https://webrtclab.herokuapp.com" className="button" target="_blank">Live</a>*/}
      {/*<a href="https://github.com/dodortus/webrtc-lab" className="button" target="_blank">Github</a>*/}
      {/*</section>*/}

      <section className="more-wrap">
        <h3>More Projects</h3>
        <DevelopmentPagingContainer name={name} />
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ZzangGu;
