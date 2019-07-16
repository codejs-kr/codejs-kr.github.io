import React from 'react';
import { PageTemplate, AboutTemplate, A } from 'components';
import { Link } from 'react-router-dom';

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
                현재 진행 중인 프로젝트는 리모트미팅(WebRTC 기반 화상회의 서비스)입니다.<br /><br />

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
                  <li>ReactNative</li>
                  <li>jQuery</li>
                  <li>Socket.io</li>
                  <li>MQTT</li>
                  <li>Firebase</li>
                  <li>Express</li>
                  <li>EJS</li>
                  <li>Cron</li>
                  <li>Nodemailer</li>
                </ul>
              </div>

              <div>
                <h3>개발도구</h3>
                <ul>
                  <li>Webstorm</li>
                  <li>Git / GitFlow</li>
                  <li>SVN</li>
                  <li>Webpack</li>
                  <li>Parcel</li>
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
                  <li>
                    <div className="flag">
                      <p>Rsupport</p>
                      <span>2010.07 ~ 2019.07 현재</span>
                    </div>
                    <div>
                      <h3>리모트미팅</h3>
                      <span className="info">
                        <span className="dot-right">웹 프론트엔드 개발</span>
                        <span className="date">2014.09 ~ 2019.07</span>
                      </span>
                    </div>
                    <div>
                      <p className="description">
                        WebRTC 기반 온라인 화상회의 서비스 설계 및 개발을 담당하였습니다.<br />
                        2014년 WebRTC 기술을 알게 된 후 관련 파일럿 프로젝트를 주도한 것을 시작으로 리모트미팅 프로젝트의 시작을 함께 할 수 있었습니다.
                      </p>
                      <ul className="row-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>WebRTC</li>
                        <li>MQTT</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>WebPack</li>
                      </ul>
                      <A href="/#/development/remotemeeting">상세 보기</A>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>리모트라이브</h3>
                      <span className="info">
                        <span className="dot-right">웹 프론트엔드 개발</span>
                        <span className="date">2014.05 ~ 2014.08</span>
                      </span>
                    </div>
                    <div>
                      <p className="description">
                        RemoteLive는 WebRTC 기반의 서비스의 가능성을 검토하기 위한 파일럿 프로젝트였습니다.<br />
                        상용화 된 리모트미팅 프로젝트의 디딤돌이 된 프로젝트이며, Websocket 채팅과 P2P 기반의 화상회의 기능을 모듈화하여 기존 회사 서비스에 적용시키는 방법을 제안한 프로젝트입니다.
                      </p>
                      <ul className="row-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>WebRTC</li>
                        <li>WebSocket</li>
                        <li>ES5</li>
                        <li>jQuery</li>
                        <li>Gulp</li>
                      </ul>
                      <A href="/#/development/remotelive">상세 보기</A>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h3>리모트 WOL</h3>
                      <span className="info">
                        <span className="dot-right">웹 프론트엔드 개발</span>
                        <span className="date">2012.09 ~ 2014.09</span>
                      </span>
                    </div>
                    <div>
                      <p className="description">
                        RemoteWOL은 전원이 꺼져 있는 PC의 전원을 원격에서 켤 수 있도록 하는 제품입니다. WOL 기능을 지원하는 하드웨어에 작은 Goahead 웹서버가 구성되었고 그 내부에서 하드웨어 동작을 제어 & 관리하는 싱글 페이지 어플리케이션을 개발하였습니다.
                      </p>
                      <ul className="row-list">
                        <li>Canvas</li>
                        <li>CSS3</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>WebPack</li>
                        <li>Firebase Firestore</li>
                      </ul>
                      <A href="/#/development/remotemeeting">상세 보기</A>
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
