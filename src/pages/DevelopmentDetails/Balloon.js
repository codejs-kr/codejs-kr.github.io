import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import jobs from 'statics/data/jobs';
import utils from 'helpers/utils';

const name = '칭찬합시다';
const data = utils.findProjectData(jobs, name);

const Balloon = () => {
  return (
    <DevelopmentDetailTemplate title={`${name} (사내문화정착 프로젝트)️`}>
      <section className="image-wrap x-center cover">
        <ImageLoader src={require('statics/img/development/balloon/main.png')} alt={name} theme="white" />
      </section>

      <section className="overview">
        <p>
          칭찬합시다는 직접 기획한 프로젝트입니다. 제가 근무하는 회사의 인원이 증가하고 프로젝트 단위로 인원이 나뉘다
          보니 조금 딱딱해진 내부 분위기에 많은 분들이 함께 일하는 동료에게 격려나 칭찬 한마디 하는 것에 어려움을 느끼는
          분들이 많다고 생각했습니다.
        </p>
        <p>
          그래서 서로가 서로에게 보람을 느낄 수 있도록 따뜻한 동력이 되었으면 하는 마음에 기획한 프로젝트입니다. 서비스
          특징으로 한 달간 자신에게 전달된 메시지는 다음 달 1일에 공개하도록 했으며, 바로 확인할 수 있는 메신저가 아닌
          아날로그 감성의 편지를 주고 받는 느낌을 주려고 기획했습니다.
        </p>
        <p>
          개발된 내용은 DevSwag이라는 사내 개발자 행사에 맞춰 공개하였으며, 그 행사에서 칭찬합시다 프로젝트는 2위를
          수상하였습니다.
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
        <A href="http://balloon.rsupport.com" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>로그인 & 계절 테마</dt>
          <dd>
            <p>구글 계정 연동하였고, 계절마다 자동으로 테마를 변경 되도록 개발하였습니다.</p>
            <ImageLoader src={require('statics/img/development/balloon/main.gif')} alt={name} theme="white" />
          </dd>
        </dl>
        <dl>
          <dt>칭찬 메시지 보내기</dt>
          <dd>
            <p>
              매달 7개의 칭찬 풍선이 충전되며, 칭찬 메시지에는 1개의 풍선이 소모됩니다. (신상 보호 차원에 일부 모자이크
              처리함)
            </p>
            <ImageLoader src={require('statics/img/development/balloon/feature1.png')} alt={name} theme="white" />
          </dd>
        </dl>
        <dl>
          <dt>내가 받은 칭찬 메시지</dt>
          <dd>
            <p>본인에게 도착한 칭찬 메시지는 매월 1일 칭찬함에서 열람할 수 있습니다.</p>
            <ImageLoader src={require('statics/img/development/balloon/feature3.png')} alt={name} theme="white" />
          </dd>
        </dl>
        <dl>
          <dt>칭찬왕 & 칭찬쟁이</dt>
          <dd>
            <p>
              매달 칭찬을 많이 받은 사람과 분기별로 칭찬을 많이 받은 사람을 선별하여
              <br />
              휴가를 제공하자는 제안하였고 회사에서도 흔쾌히 수용하여 주었습니다.
            </p>
            <ImageLoader src={require('statics/img/development/balloon/feature2.png')} alt={name} theme="white" />
          </dd>
        </dl>
        <dl>
          <dt>누적된 칭찬</dt>
          <dd>
            <p>2015년 오픈 후 지금도 운영중이며 현재까지 누적된 칭찬갯수입니다.</p>
            <ImageLoader src={require('statics/img/development/balloon/feature5.gif')} alt={name} theme="white" />
          </dd>
        </dl>
        <dl>
          <dt>사내 문화로 정착</dt>
          <dd>
            <p>
              오픈 이후 인사팀에서 추가적으로 아이디어를 내어서
              <br />
              휴게 공간에 칭찬왕 나무와 이달의 발표 포스터를 게시하여 좀 더 활성화시킬 수 있었습니다.
            </p>
            <ImageLoader src={require('statics/img/development/balloon/feature4.png')} alt={name} theme="white" />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default Balloon;
