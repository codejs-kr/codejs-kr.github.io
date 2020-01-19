import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, RowList } from 'components';
import toys from 'pages/data/toys';
import utils from 'helpers/utils';

const name = 'Book cover animation';
const data = utils.findProjectData(toys, name);

const BookTransform = () => {
  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap s-cover">
        <ImageLoader src={require('statics/img/development/book-transform/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          {data.description}
          <br />
          이전에 이 정도 에니메이션을 연출하기 위해서는 자바스크립트 없이는 불가능하였지만, 이제는 자바스크립트를
          사용하지 않아도 효과적인 에니메이션을 연출할 수 있게 되었습니다.
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
            <strong>사용기술</strong>
            <RowList data={data.techStack} />
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/transform/" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <dl>
          <dt>Preview</dt>
          <dd>
            <ImageLoader src={require('statics/img/development/book-transform/preview.gif')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default BookTransform;
