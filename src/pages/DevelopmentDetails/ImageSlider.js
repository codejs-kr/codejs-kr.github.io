import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, VideoLoader, RowList } from 'components';

const ImageSlider = () => {
  const name = '3D Image Slider';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap cover">
        <ImageLoader src={require('statics/img/development/image-slider/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          CSS transform을 사용하여 이미지 4컷을 로테이션 시키는 데모를 만들어 보았습니다.
          <br />
          perspective로 큐브 모양의 공간감을 표현하였고, transform으로 이미지에 회전할 때 원근감을 만들었습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2013</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>데모 구현</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <RowList data={['CSS3 Transform', 'Transition', 'Perspective']} />
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/css3-effect/" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <dl>
          <dt>Preview</dt>
          <dd>
            <VideoLoader src={require('statics/img/development/image-slider/preview.mp4')} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default ImageSlider;
