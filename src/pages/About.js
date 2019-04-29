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
            <section id="profile">
              <h1>박정식</h1>
              <h2>Front-End Engineer <span>💻 🌏 🐘 🍺 🙏</span></h2>
              <p id="description">
                Rsupport라는 회사에서 프론트엔드 개발자로 일하고 있으며,
                2010년부터 다수의 프로젝트를 진행하고 있습니다.<br />
                현재 진행 중인 프로젝트는 리모트미팅(WebRTC 기반 화상회의 서비스)입니다.
              </p>
              <p>
                📧 <a href="mailto:dodortus@gmail.com">dodortus@gmail.com</a>
              </p>
            </section>

            <section id="skills">
              <div>
                <h2>Skills</h2>
              </div>

              <div>
                <h3>언어</h3>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>CSS3 / SCSS / PostCSS</li>
                  <li>HTML5</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div>
                <h3>라이브러리</h3>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Socket.io</li>
                  <li>MQTT</li>
                  <li>Firebase</li>
                  <li>moment</li>
                  <li>jQuery</li>
                  <li>Flot charts</li>
                  <li>Google charts</li>
                  <li>Express</li>
                  <li>EJS</li>
                  <li>Nodemailer</li>
                  <li>Cron</li>
                </ul>
              </div>

              <div>
                <h3>개발도구</h3>
                <ul>
                  <li>Git / GitFlow</li>
                  <li>SVN</li>
                  <li>Webpack</li>
                  <li>Gulp</li>
                  <li>Nodemon</li>
                  <li>Webstorm</li>
                  <li>Jest</li>
                  <li>Storybook</li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </AboutTemplate>
    </PageTemplate>
  );
};

export default About;
