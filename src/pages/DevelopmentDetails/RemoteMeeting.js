import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class RemoteMeeting extends Component {
  render() {
    const name = "RemoteMeeting";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap center">
          <img src={require("statics/img/development/remote-meeting/main.png")} alt={name} />
        </section>

        <h2>
          리모트미팅...
        </h2>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2017</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>노트, 즐겨찾기, 테그 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>Javascript(ES6), React, SCSS, Firebase Realtime DB, Webpack</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://remotemeeting.com" className="button" target="_blank">Live</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default RemoteMeeting;
