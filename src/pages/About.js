import React, { Component } from 'react';
import { PageTemplate, AboutTemplate } from 'components';

class About extends Component {
  render() {
    return (
      <PageTemplate thema="white" isSubpage>
        <AboutTemplate>
          <header>
            원인없는 결과란 없다.
          </header>

          박정식<br />
          프론트앤드 개발자<br />
          <br /><br />

          저는 알서포트라는 회사에서 프론트앤드 개발자로 일하고 있으며,
          2010년 부터 프론트앤드 개발자로 다수의 프로젝트를 진행 하고 있습니다.
          현재 진행중인 프로젝트는 리모트미팅 (WebRTC기반 화상회의 서비스) 입니다.

          이메일, 링크드인?
        </AboutTemplate>
      </PageTemplate>
    );
  }
}

export default About;
