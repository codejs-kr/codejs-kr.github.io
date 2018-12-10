import React, { Component } from 'react';
import { PageTemplate, DevelopmentDetailTemplate } from 'components';
import {
  ReactEvernote,
  WebrtcLab,
  SpeechRecognition,
  Balloon,
  RemoteMeeting,
  WebrtcPresentation,
  Localization,
  FileAPI,
  ImageSlider,
  CanvasCase,
  FrontendConvensionVer2,
  FrontendConvensionVer1,
  BookTransform,
  RemoteWOL,
  NateOnMyPC,
  DropboxTourBook,
  RemoteViewPersonal,
  RemoteViewBusiness,
  RemoteViewAdmin,
  IpadSmartCover
} from 'pages';

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
      case 'speech-recognition':
        currentPage = <SpeechRecognition />;
        break;
      case 'balloon':
        currentPage = <Balloon />;
        break;
      case 'remotemeeting':
        currentPage = <RemoteMeeting />;
        break;
      case 'webrtc-presentation':
        currentPage = <WebrtcPresentation />;
        break;
      case 'localization':
        currentPage = <Localization />;
        break;
      case 'file-api':
        currentPage = <FileAPI />;
        break;
      case 'image-slider':
        currentPage = <ImageSlider />;
        break;
      case 'canvas-case':
        currentPage = <CanvasCase />;
        break;
      case 'frontend-convension-ver2':
        currentPage = <FrontendConvensionVer2 />;
        break;
      case 'frontend-convension-ver1':
        currentPage = <FrontendConvensionVer1 />;
        break;
      case 'book-transform':
        currentPage = <BookTransform />;
        break;
      case 'remotewol':
        currentPage = <RemoteWOL />;
        break;
      case 'nateon-mypc':
        currentPage = <NateOnMyPC />;
        break;
      case 'dropbox-tour-book':
        currentPage = <DropboxTourBook />;
        break;
      case 'remoteview-admin':
        currentPage = <RemoteViewAdmin />;
        break;
      case 'remoteview-business':
        currentPage = <RemoteViewBusiness />;
        break;
      case 'remoteview-personal':
        currentPage = <RemoteViewPersonal />;
        break;
      case 'ipad-smart-cover':
        currentPage = <IpadSmartCover />;
        break;
    }

    return (
      <PageTemplate thema="white" isSubpage>
        {currentPage}
      </PageTemplate>
    );
  }
}

export default DevelopmentDetails;