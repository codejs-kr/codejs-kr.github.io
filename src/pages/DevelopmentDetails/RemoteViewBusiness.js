import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, RowList } from 'components';
import jobs from 'pages/data/jobs';
import utils from 'helpers/utils';

const name = '리모트뷰 기업용';
const data = utils.findProjectData(jobs, name);

const RemoteViewBusiness = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap x-center s-cover">
        <ImageLoader src={require('statics/img/development/remoteview/ent/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          PC원격제어 서비스인 리모트뷰 기업용은 개발과 약 3년간의 운영 및 서버 납품 개발을 개발을 진행한 프로젝트입니다.
          <br />
          회사의 주력 제품이며, 재택근무를 가능하게 해주는 유용한 서비스입니다.
        </p>
        <p>
          그룹별 PC의 목록이 노출되며, 해당 PC에 접속하면 전용 뷰어가 나타나며 뷰어를 통해서 원격지의 PC를 제어할 수
          있습니다.
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
        <A href="http://rview.com" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>원격지 PC관리</dt>
          <dd>
            <p>원격지에 설치된 PC의 목록이 노출되며, 대상 PC에 접속하여 원격제어를 할 수 있습니다.</p>
            <img
              src={require('statics/img/development/remoteview/ent/feature-pc.png')}
              alt={name}
              className="none-fit"
            />
          </dd>
        </dl>
        <dl>
          <dt>라이브뷰</dt>
          <dd>
            <p>원격지 PC의 화면의 이미지를 주기적으로 전송받아 갱신하여 현재 원격지 PC 화면을 확인할 수 있습니다.</p>
            <img
              src={require('statics/img/development/remoteview/ent/feature-live.png')}
              alt={name}
              className="none-fit"
            />
          </dd>
        </dl>
        <dl>
          <dt>사용자관리</dt>
          <dd>
            <p>
              관리자 / 매니저 / 일반 유저 등급으로 나누어 유저를 등록하고 PC와 그룹에 권한을 부여하여 관리할 수
              있습니다.
            </p>
            <img
              src={require('statics/img/development/remoteview/ent/feature-user.png')}
              alt={name}
              className="none-fit"
            />
          </dd>
        </dl>
        <dl>
          <dt>사용통계</dt>
          <dd>
            <p>접속자의 권한별로 사용한 PC의 접근 내역과 통계를 볼 수 있습니다.</p>
            <img
              src={require('statics/img/development/remoteview/ent/feature-stats.png')}
              alt={name}
              className="none-fit"
            />
          </dd>
        </dl>
        <dl>
          <dt>환경설정</dt>
          <dd>
            <p>다양한 옵션을 명확하게 나누어 직관적인 UI로 배치하도록 개발하였습니다.</p>
            <img
              src={require('statics/img/development/remoteview/ent/feature-setting.png')}
              alt={name}
              className="none-fit"
            />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteViewBusiness;
