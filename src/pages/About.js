import React, { useEffect } from 'react';
import { PageTemplate, AboutTemplate, TopButton, TimeLine } from 'components';
import jobsData from 'pages/data/jobs';
import toysData from 'pages/data/toys';
import utils from 'helpers/utils';

const setScroll = () => {
  const scrollInfo = utils.getStorageScroll();

  if (scrollInfo && scrollInfo.about) {
    utils.moveTop({ top: scrollInfo.about.top });
  }
};

const About = () => {
  useEffect(() => {
    setScroll();
  });

  return (
    <PageTemplate thema="white">
      <AboutTemplate>
        <TopButton />
        <header>
          <div className="inner-container">
            <strong>일단 만들면 미래가 바뀐다.</strong>
            {/* <strong>원인없는 결과란 없다.</strong> */}
            <span id="profile-img" />
          </div>
        </header>

        <article>
          <div className="inner-container">
            <section id="profile">
              <h1>박정식</h1>
              <h2>
                Front-End Engineer
                <span role="img" aria-label="like it">
                  💻 🌏 🐘 🍺 🙏
                </span>
              </h2>
              <p id="description">
                Kakaopay에서 프론트엔드 개발자로 재직중이며, 2010년부터 실무를 담당하고 있습니다.
                <br />
                Typescript와 React를 주로 사용하며 오늘도 즐거운 마음으로 일하고 있습니다.
                <br />
                <br />
                서비스 개발을 좋아하며, 구두를 만드는 사람이 편한 구두를 만들기 위해 고민하듯,
                <br />
                사용하기 쉬운 서비스를 만들고자 프로젝트 설계와 사용성에 대한 고민도 함께하고 있습니다.
              </p>
              <p id="email-info">
                <span role="img" aria-label="email">
                  📧
                </span>
                <a href="mailto:dodortus@gmail.com">dodortus@gmail.com</a>
                <br />
                {/* <span role="img" aria-label="open-book">
                  ⚡
                </span>
                <a href="//codejs.co.kr">Blog</a>
                <br /> */}
                <span role="img" aria-label="open-book">
                  📖
                </span>
                <a href="https://github.com/codejs-kr" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </p>
            </section>

            <section id="skills" className="division">
              <div>
                <h2>Skills</h2>
              </div>

              <div className="skill-item-wrap">
                <div>
                  <h3>언어</h3>
                  <ul>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>CSS3 / SCSS</li>
                    <li>HTML5</li>
                    <li>Nodejs</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div>
                  <h3>라이브러리 · 프레임웍</h3>
                  <ul>
                    <li>React</li>
                    <li>ReactQuery</li>
                    <li>Zustand</li>
                    <li>Rematch</li>
                    <li>Redux</li>
                    <li>Recoil</li>
                    <li>Nextjs</li>
                    <li>Express</li>
                    <li>WebSocket</li>
                    <li>WebRTC</li>
                    <li>MQTT</li>
                    <li>Firebase</li>
                    <li>ReactNative</li>
                    {/* <li>Handlebars</li>
                    <li>jQuery</li> */}
                    {/*<li>Cron</li>*/}
                    {/*<li>Nodemailer</li>*/}
                  </ul>
                </div>

                <div>
                  <h3>개발도구</h3>
                  <ul>
                    <li>Turborepo</li>
                    <li>Vite</li>
                    <li>Webpack</li>
                    <li>Parcel</li>
                    <li>Gulp</li>
                    <li>BrowserSync</li>
                    <li>Storybook</li>
                    <li>Cypress</li>
                    <li>Jest</li>
                    <li>Sentry</li>
                    <li>Webvitals</li>
                    <li>Git</li>
                    <li>SVN</li>
                    <li>VSCode</li>
                    <li>Webstorm</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="experience" className="division timeline-section">
              <div>
                <h2>Work experience</h2>
              </div>

              <div>
                <TimeLine data={jobsData} hidden={['삼성 RemotePC']} />
              </div>
            </section>

            <section id="toy" className="division timeline-section">
              <div>
                <h2>Toy projects 🕹️</h2>
              </div>

              <div>
                <TimeLine data={toysData} />
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
                    <span>2017.12 ~ 2018.03 패스트캠퍼스</span>
                  </li>
                  <li>
                    <p>모바일 웹개발자를 위한 실전 HTML5</p>
                    <span>2011.10.24 ~ 2011.10.28 한국생산성본부</span>
                  </li>
                  <li>
                    <p>컴퓨터공학 학사</p>
                    <span>2009.03 ~ 2009.08 교육과학기술부 학점은행제</span>
                  </li>
                  <li>
                    <p>국제교류학생 (Technology training program)</p>
                    <span>2008.01 ~ 2008.02 하와이 카피올라니대학</span>
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
                  <li>
                    <p>워드프로세스 2급</p>
                    <span>2001.08.04 대한상공회의소</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="awards" className="division">
              <div>
                <h2>Awards</h2>
              </div>

              <div>
                <ul className="list">
                  <li>
                    <p>최복동 수상 (최고의 복지는 동료상)</p>
                    <span>2023.12 카카오페이</span>
                  </li>
                  <li>
                    <p>프로젝트 공로상 (리모트미팅)</p>
                    <span>2016.12 알서포트</span>
                  </li>
                  <li>
                    <p>DevSwag 개발자 공모전 2위 (칭찬합시다)</p>
                    <span>2015.10 알서포트</span>
                  </li>
                  <li>
                    <p>프로젝트 공로상 (리모트뷰)</p>
                    <span>2013.12 알서포트</span>
                  </li>
                  <li>
                    <p>최우수 신규직원상</p>
                    <span>2012.12 알서포트</span>
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
