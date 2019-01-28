import React, { Component } from 'react';
import { PageTemplate } from 'components';
import { Redirect } from 'react-router-dom';
import {
  ReactEvernote,
  WebrtcLab,
  SpeechRecognition,
  Balloon,
  RemoteMeeting,
  RemoteLive,
  WebrtcPresentation,
  Localization,
  FileAPI,
  ImageSlider,
  CanvasCase,
  FrontendConvension,
  BookTransform,
  RemoteWOL,
  NateOnMyPC,
  DropboxTourBook,
  RemoteViewPersonal,
  RemoteViewBusiness,
  IpadSmartCover,
  ZzangGu
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
      case 'remotelive':
        currentPage = <RemoteLive />;
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
      case 'canvas-use-cases':
        currentPage = <CanvasCase />;
        break;
      case 'frontend-convension':
        currentPage = <FrontendConvension />;
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
      case 'remoteview-business':
        currentPage = <RemoteViewBusiness />;
        break;
      case 'remoteview-personal':
        currentPage = <RemoteViewPersonal />;
        break;
      case 'ipad-smart-cover':
        currentPage = <IpadSmartCover />;
        break;
      case 'zzanggu':
        currentPage = <ZzangGu />;
        break;
      default:
        currentPage = <Redirect to="/development" />
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