import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';
import jobs from 'statics/data/jobs';
import utils from 'helpers/utils';

const name = '리모트세미나';
const data = utils.findProjectData(jobs, name);

const RemoteSeminar = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/remoteseminar/main.png')} alt={name} />
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
        <A theme="fill" icon="flask">
          개발중
        </A>
      </section>

      <section className="features-wrap">
        <dl>
          <dt>Preview</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/remoteseminar/feature1.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteSeminar;
