import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';

const CanvasCase = () => {
  const name = 'Canvas Use Cases';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/canvas-cases/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          HTML5에 추가된 엘리먼트 Canvas, 그래픽을 표현하기 위한 Canvas의 사용범위가 점차 다양해지고 있습니다.
          <br />
          활용 사례를 보면서 아이디어와 그래픽 표현의 새로운 분야에 대한 고민도 같이 해보면 좋을듯하여 자료를
          준비하였습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>발표년도</strong>
            <p>2013</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/canvas-cases/" theme="fill" icon="default">
          Live
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default CanvasCase;
