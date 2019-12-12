import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import toys from 'statics/data/toys';
import utils from 'helpers/utils';

const name = '짱구';
const data = utils.findProjectData(toys, name);

const ZzangGu = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap center s-contain">
        <ImageLoader src={require('statics/img/development/zzanggu/main.png')} alt={name} />
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
            <video autoPlay muted loop>
              <source src={require('statics/img/development/zzanggu/preview.mp4')} type="video/mp4" />
              Not support video source
            </video>
          </dd>
        </dl>
        <dl>
          <dt>게임준비</dt>
          <dd>
            <p>Ready 화면과 함께 게임 Audio가 재생됩니다. Enter 키를 눌러서 게임을 시작할 수 있습니다.</p>
            <ImageLoader src={require('statics/img/development/zzanggu/feature-ready.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>게임플레이</dt>
          <dd>
            <p>
              키보드를 사용하여 캐릭터를 좌우로 움직여 하늘에서 떨어지는 똥을 피하는 간단한 게임입니다.
              <br />
              캐릭터 움직임을 부드럽게 처리하기 위해 requestAnimationFrame을 사용하여 드로잉 처리하였습니다.
              <br />
              난이도 처리와 최고 점수 노출, 캐릭터 미끄러짐, 가속 감속 처리를 하여 게임의 재미 요소를 추가하였습니다.
            </p>
            <ImageLoader src={require('statics/img/development/zzanggu/feature-play.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ZzangGu;
