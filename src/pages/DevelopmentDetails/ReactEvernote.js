import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';

class ReactEvernote extends Component {
  render() {
    return (
      <DevelopmentDetailTemplate title="React Evernote">
        <div className="image-wrap">
          <img src={require("statics/img/development/thumb-react-evernote.png")} alt="" />
        </div>

        <h2>
          React와 Firebase에 관심을 갖던 시기에 두가지를 활용해서 무언가를 만들어 보고 싶었다.<br />
          그래서 평소에 자주 사용하는 Evernote를 구현해 보기로 하고 조금씩 작업을 시작해 보았다.
        </h2>
        
        <div>
          <a href="#">Live</a> | <a href="#">Github</a>
        </div>

        <ul>
          <li>개발기간: 2017.7 ~ 2017.9</li>
          <li>역할: Frontend 개발, Firebase 스키마 설계 및 연동</li>
          <li>주요개발항목: </li>
          <li>사용기술: Javascript(ES6), React, Firebase Realtime DB</li>
        </ul>
      </DevelopmentDetailTemplate>
    );
  }
}

export default ReactEvernote;
