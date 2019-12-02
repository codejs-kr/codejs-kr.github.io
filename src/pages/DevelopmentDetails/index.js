import React from 'react';
import { PageTemplate } from 'components';
import { Redirect } from 'react-router-dom';

import ReactEvernote from './ReactEvernote';
import WebrtcLab from './WebrtcLab';
import SpeechRecognition from './SpeechRecognition';
import Balloon from './Balloon';
import RemoteMeeting from './RemoteMeeting';
import RemoteLive from './RemoteLive';
import RemoteSeminar from './RemoteSeminar';
import WebrtcPresentation from './WebrtcPresentation';
import Localization from './Localization';
import FileAPI from './FileAPI';
import ImageSlider from './ImageSlider';
import CanvasCase from './CanvasCase';
import FrontendConvension from './FrontendConvension';
import BookTransform from './BookTransform';
import RemoteWOL from './RemoteWOL';
import NateOnMyPC from './NateOnMyPC';
import SamsungRemotePC from './SamsungRemotePC';
import DropboxTourBook from './DropboxTourBook';
import RemoteViewPersonal from './RemoteViewPersonal';
import RemoteViewBusiness from './RemoteViewBusiness';
import IpadSmartCover from './IpadSmartCover';
import ZzangGu from './ZzangGu';
import SimpleChat from './SimpleChat';
import Rsupport from './Rsupport';

const DevelopmentDetails = ({ match }) => {
  const { name } = match.params;
  let currentPage = null;
  // console.log('확인 name', name, match);

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
    case 'remoteseminar':
      currentPage = <RemoteSeminar />;
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
    case 'samsung-remote-pc':
      currentPage = <SamsungRemotePC />;
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
    case 'simple-chat':
      currentPage = <SimpleChat />;
      break;
    case 'rsupport':
      currentPage = <Rsupport />;
      break;
    default:
      currentPage = <Redirect to="/development" />;
      break;
  }

  return (
    <PageTemplate thema="white" isSubpage>
      {currentPage}
    </PageTemplate>
  );
};

export default DevelopmentDetails;
