import React, { Component } from 'react';
import { PageTemplate, DevelopmentDetailTemplate } from 'components';
import { ReactEvernote, WebrtcLab } from 'pages';

class DevelopmentDetails extends Component {
  render() {
    const { match } = this.props;
    const { name } = match.params;
    let currentPage = null;
    console.log('확인 name', name, match);

    switch (name) {
      case 'react-evernote':
        currentPage = <ReactEvernote />;
        break;
      case 'webrtc-lab':
        currentPage = <WebrtcLab />;
        break;
    }

    return (
      <PageTemplate thema="white">
        {currentPage}
      </PageTemplate>
    );
  }
}

export default DevelopmentDetails;