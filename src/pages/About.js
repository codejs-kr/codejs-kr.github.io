import React from 'react';
import { PageTemplate, AboutTemplate } from 'components';

const About = () => {
  return (
    <PageTemplate thema="white">
      <AboutTemplate>
        <header>
          <div className="inner-container">
            <strong>원인없는 결과란 없다.</strong>
            <span id="profile-img" />
          </div>
        </header>

        <article>
          <div className="inner-container">
            <h1>박정식</h1>
            <h2>Front-End Engineer</h2>
            <p id="description">
              Rsupport라는 회사에서 프론트엔드 개발자로 일하고 있으며,
              2010년부터 다수의 프로젝트를 진행하고 있습니다.<br />
              현재 진행 중인 프로젝트는 리모트미팅(WebRTC 기반 화상회의 서비스)입니다.
            </p>
            <p>
              <a href="mailto:dodortus@gmail.com">dodortus@gmail.com</a>
            </p>
          </div>
        </article>
      </AboutTemplate>
    </PageTemplate>
  );
};

export default About;
