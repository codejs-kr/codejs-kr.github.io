export default [
  {
    name: '심플 채팅',
    role: '웹 어플리케이션 설계 및 개발',
    date: '2019',
    description:
      'WebSocket를 활용한 웹 채팅 토이프로젝트입니다.\n' +
      'React로 UI 컴포넌트를 구현하였고 Redux rematch framework로 상태 관리 하도록 개발하였습니다.',
    link: '/development/simple-chat',
    devItems: ['레이아웃 & 모션', '프로필 셀렉터', '채팅', '참여자 목록', 'WebSocket 핸들러', '라우팅 등'],
    techStack: ['React', 'Redux rematch', 'ES6', 'SCSS', 'WebPack', 'NodeJS', 'Socket.io'],
  },
  {
    name: '짱구',
    role: '웹 어플리케이션 설계 및 개발',
    date: '2016, 2019',
    description:
      '대학교 2학년 때 Java Applet을 이용하여 만들었던 저의 첫 게임입니다.\n' +
      '프론트엔드 개발을 하면서 언젠간 당시 게임을 웹 버전으로 구현해 보고 싶다는 생각하였고 오래전 코드를 보며 토이프로젝트로 재 구현해 보았습니다.',
    link: '/development/zzanggu',
    devItems: [
      'Canvas 드로잉 핸들러',
      '캐릭터 처리',
      '미사일 처리',
      '충돌 처리',
      '키보드 이벤트 처리',
      '사운드 처리',
      '스코어 처리',
    ],
    techStack: ['React', 'ES6', 'Canvas', 'SCSS', 'WebPack', 'Firebase Firestore'],
  },
  {
    name: 'Speech Recognition',
    role: '웹 어플리케이션 설계 및 개발',
    date: '2017',
    description: '음성 인식 API를 개발에 활용하기 위해 테스트하며 정리한 내용을 예제로 만들어 보았습니다.',
    link: '/development/speech-recognition',
    devItems: ['Speech recognition handler', 'Text to speech 예제 등'],
    techStack: ['Javascript speech recognition API'],
  },
  {
    name: 'WebRTC 연구실',
    role: '웹 어플리케이션 설계 및 개발',
    date: '2016 ~ 2018',
    description:
      'WebRTC를 배우고 싶어 하는 분들이 조금 더 진입하기 쉽게 하는 것을 목적으로 제가 알게 된 정보들을 다듬어서 바로 사용할 수 있는 예제 공간으로 만들어 보았습니다.',
    link: '/development/webrtc-lab',
    devItems: ['마이크 & 캠 접근하기', '비디오 필터', '이미지 캡쳐', '화면 공유', '1:1 화상회의 등'],
    techStack: ['WebRTC', 'WebSocket', 'ES6', 'HTML5', 'CSS3', 'NodeJS', 'Express', 'EJS'],
  },
  {
    name: 'React Evernote',
    role: '웹 어플리케이션 설계 및 개발',
    date: '2016 ~ 2017',
    description:
      'React와 Firebase에 관심을 갖던 시기에 두가지를 활용해서 무언가를 만들어 보고 싶었습니다.\n그래서 평소에 자주 사용하는 Evernote를 구현해 보기로 하고 조금씩 작업을 시작해 보았습니다.',
    link: '/development/react-evernote',
    devItems: ['노트 CRUD', '즐겨찾기', '테그기능', 'Cloud DB 핸들러 등'],
    techStack: ['React', 'ES6', 'HTML5', 'SCSS', 'WebPack', 'Firebase Realtime DB'],
  },
  {
    name: 'Book cover animation',
    role: '웹 프론트엔드 개발',
    date: '2013',
    description: 'CSS3 Transform 속성을 활용하여 만든 멋진 UI를 보고 한눈에 반해서 코드 분석 후 만들어 보았습니다.',
    link: '/development/book-transform',
    // devItems: ['노트 CRUD', '즐겨찾기', '테그기능 등'],
    techStack: ['CSS3 Transform', 'Transition', 'HTML5'],
  },
];
