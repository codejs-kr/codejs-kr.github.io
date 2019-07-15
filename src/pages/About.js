import React from 'react';
import { PageTemplate, AboutTemplate, A } from 'components';

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
              <h2>Front-End Engineer <span role="img" aria-label="like it">💻 🌏 🐘 🍺 🙏</span></h2>
              <p id="description">
                Rsupport라는 회사에서 프론트엔드 개발자로 일하고 있으며,
                2010년 부터 다수의 프로젝트를 진행하고 있습니다.<br />
                현재 진행 중인 프로젝트는 리모트미팅(WebRTC 기반 화상회의 서비스)입니다.<br />
                구두를 만드는 사람이 편한 구두를 만드는 방법을 고민하듯,<br />
                저 또한 사용하기 쉬운 서비스를 만들고자 UX/UI에 대한 고민을 많이하는 편입니다.
              </p>
              <p>
                <span role="img" aria-label="email">📧 </span>
                <a href="mailto:dodortus@gmail.com">dodortus@gmail.com</a>
              </p>
            </section>

            <section id="skills" className="division">
              <div>
                <h2>Skills</h2>
              </div>

              <div>
                <h3>언어</h3>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>CSS3 / SASS / PostCSS</li>
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
                  <li>Moment</li>
                  <li>jQuery</li>
                  <li>Express</li>
                  <li>EJS</li>
                  <li>Nodemailer</li>
                  <li>Cron</li>
                </ul>
              </div>

              <div>
                <h3>개발도구</h3>
                <ul>
                  <li>Webstorm</li>
                  <li>Git / GitFlow</li>
                  <li>SVN</li>
                  <li>Webpack</li>
                  <li>Gulp</li>
                  <li>Storybook</li>
                  <li>Jest</li>
                  <li>Nodemon</li>
                </ul>
              </div>
            </section>

            <section id="experience" className="division">
              <div>
                <h2>Experience</h2>
              </div>

              <div>
                <ul className="timeline">
                  <li data-flag="rsupport">
                    <h3>리모트미팅</h3>
                    <div>
                      <h4>WebRTC 기반 온라인 화상회의 서비스로 웹 프론트엔드 개발을 담당하였습니다.</h4>
                      <p>
                        <span className="date">2017.06 ~ 2018.07</span>
                        <span>웹 어플리케이션 설계 및 개발</span>
                      </p>
                      <A href="/#/development/remotemeeting">상세 보기</A>
                    </div>
                  </li>
                  <li>
                    <h3>프로젝트명</h3>
                    <div>
                      <h4>웹 어플리케이션 설계 및 개발</h4>
                      <span>2017.06 ~ 2018.07</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="education" className="division">
              <div>
                <h2>Education</h2>
              </div>

              <div>
                <ul className="list">
                  <li>
                    <p>React로 구현하는 웹어플리케이션 제작</p>
                    <span>2017.12 ~ 2018.03 패스트캠프</span>
                  </li>
                  <li>
                    <p>HTML5 블라블라</p>
                    <span>2017.12 ~ 2018.03 패스트캠프</span>
                  </li>
                  <li>
                    <p>컴퓨터정보처리학과</p>
                    <span>2004.03 ~ 2009.02 신구대학교</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="certificate" className="division">
              <div>
                <h2>Certificate</h2>
              </div>

              <div>
                <ul className="list">
                  <li>
                    <p>정보처리산업기사</p>
                    <span>2007.12.17 한국산업인력공단</span>
                  </li>
                  <li>
                    <p>컴퓨터그래픽스 운용기능사</p>
                    <span>2003.04.21 한국산업인력공단</span>
                  </li>
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
