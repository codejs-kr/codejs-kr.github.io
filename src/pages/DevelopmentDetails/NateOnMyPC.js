import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import jobs from 'statics/data/jobs';
import utils from 'helpers/utils';

const name = '네이트온 내 PC제어 리뉴얼';
const data = utils.findProjectData(jobs, name);

const NateOnMyPC = () => {

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap x-center s-cover">
        <ImageLoader src={require('statics/img/development/nateon-mypc/main.png')} alt={name} />
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

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/nateon" theme="fill" icon="default">
          Live Template
        </A>
        <A href="http://rsupport.nate.com/rview/r8/main/index.aspx" theme="fill" icon="default">
          Live Service
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default NateOnMyPC;
