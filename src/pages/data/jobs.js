export default [
  {
    name: 'Kakaopay 💼',
    team: '프론트엔드개발팀',
    date: '2020.06 ~ 재직중',
    list: [
      {
        name: '함께하는 자산관리 서비스',
        role: '프로젝트 구조 설계 및 프론트엔드 개발',
        date: '2024.01 ~ 2024.07',
        description:
          '부부 혹은 가족끼리 마이데이터 기반의 계좌 / 지출 / 대출 / 투자 자산을 선택하여 손쉽게 공유하고 함께 관리할 수 있는 서비스입니다. 카카오톡 메시지 서비스와 연동하여 공유된 내역에 메모와 호응을 메시지를 통해 상호작용 할 수 있어 오픈 후 고정 유저층이 있는 서비스로 현재도 안정적으로 운영되고 있습니다.',
        techStack: ['Next.js,', 'Typescript', 'ReactQuery', 'Zustand', 'Axios', 'HTML5', 'SCSS', 'Vite', 'Sentry'],
      },
      {
        name: '웹뷰 기반 자산관리 서비스의 속도 최적화',
        role: '선행 개발 및 리딩',
        date: '2023.09 ~ 2023.11',
        description:
          '웹뷰로 구성된 자산관리 서비스의 체감 로딩 속도를 개선하기 위해 서비스별 전체 페이지의 FCP 및 LCP 지표를 측정하여 성능 병목을 분석했습니다. 이를 바탕으로 이미지 최적화와 API 요청 우선순위 조정, 초기 로딩에 필요한 정보를 병렬 호출하도록 개선했습니다. 개선 방법 및 목표 지표를 설정하고, 서비스별 담당자에게 작업을 분배하여 효율적으로 프로젝트를 진행했습니다. 3차수에 걸쳐 개선 버전을 순차적으로 배포했으며, 그 결과 서비스 초기 로딩 속도를 약 40% 향상시켜 사용자 경험을 크게 개선했습니다.',
        techStack: ['FCP Optimization', 'LCP Optimization', 'Image Optimization'],
      },
      {
        name: '연말정산 사전점검 서비스',
        role: '프로젝트 구조 설계 및 프론트엔드 개발',
        date: '2023.07 ~ 2024.01',
        description:
          '마이데이터를 활용하여 사용자의 연말정산 절세 상태를 사전에 진단하고, 환급금액을 최대화하기 위해 필요한 정보를 제공합니다. 연말정산 기간 이전에 환급 예상 금액을 미리 확인할 수 있도록 하여, 사용자가 절세를 위한 추가 공제 항목을 점검하고 부족한 부분을 보완할 수 있게 도와주는 예상 환급 금액 시뮬레이션 방식의 서비스입니다.',
        techStack: ['Typescript', 'React', 'ReactQuery', 'Rematch', 'Axios', 'HTML5', 'SCSS', 'Vite', 'Sentry'],
      },
      {
        name: '자산관리 모노레포 전환',
        role: '선행 개발 및 리딩',
        date: '2023.02 ~ 2023.06',
        description:
          '자산관리 서비스는 버티컬하게 다양한 프로젝트로 구성되어 있어, 코드 일관성 및 효율성을 높이기 위해 터보레포(Turborepo) 기반 모노레포 구조로 전환하였습니다. 이를 통해 코드베이스의 분산을 방지하고, 각 서비스 간에 코드 공유와 의존성 관리가 간소화되도록 했습니다. 전환 후 현재 9개의 운영 프로젝트가 하나의 레포에서 개발되고 있습니다.',
        techStack: ['TurboRepo', 'SSR', 'CSR'],
      },
      {
        name: '금융일정 & 고정지출 서비스',
        role: '프로젝트 구조 설계 및 프론트엔드 개발',
        date: '2022.01 ~ 2022.12',
        description:
          '금융일정서비스는 카드 결제일, 대출 이자 납부일 등의 주요 금융 일정을 한눈에 볼 수 있도록 구현했습니다. 이를 통해 사용자는 돈이 빠져나가는 시기를 명확히 파악하고, 필요할 경우 미리 대비할 수 있습니다. 알림 기능을 추가하여 중요한 납부일이 임박했을 때 알림을 받을 수 있도록 지원하여, 사용자들의 재정 관리 효율성을 높였습니다.',
        techStack: ['Typescript', 'React', 'ReactQuery', 'Rematch', 'Axios', 'HTML5', 'SCSS', 'Vite', 'Sentry'],
      },
      {
        name: '자산관리 마이데이터 서비스',
        role: '프로젝트 구조 설계 및 프론트엔드 개발',
        date: '2021.03 ~ 2024.11',
        description:
          '계좌, 카드, 투자, 전자금융, 통신, 보험, 대출 등의 정보를 제공 하는 자산관리 서비스는 마이데이터 자격을 획득하기 위한 대형 프로젝트로 심사 준비부터 시작을 함께하였습니다. 마이데이터 사업 가이드에 맞춰 프로젝트를 설계하고 개발을 진행하였고 2022년 1월에 성공적으로 오픈후 2024년 지금까지 국내 가입자가 가장많은 자산관리 서비스로 현재도 성장중인 프로젝트입니다.',
        techStack: [
          'TurboRepo',
          'Typescript',
          'React',
          'ReactQuery',
          'Recoil',
          'Axios',
          'HTML5',
          'SCSS',
          'Vite',
          'Sentry',
        ],
      },
      {
        name: '알림피드 서비스',
        role: '프로젝트 구조 설계 및 프론트엔드 개발',
        date: '2021.02 ~ 2021.05',
        description:
          '카카오페이 사용자에게 전달되는 알림을 한 곳에서 확인할 수 있도록 피드 형태로 구현한 서비스입니다. 사용자가 가입한 서비스의 주요 알림뿐만 아니라, 송금 요청과 같은 개인화된 알림까지 통합하여 관리할 수 있게 하였으며, 알림을 통해 바로 송금까지 진행할 수 있도록 개발하여 사용자 경험을 개선하였습니다.',
        techStack: ['Typescript', 'React', 'Redux Saga', 'Axios', 'HTML5', 'SCSS', 'WebPack', 'Sentry'],
      },
      {
        name: '내문서함 서비스',
        role: '프론트엔드 개발',
        date: '2020.06 ~ 2021.02',
        description: `내문서함 서비스는 이용자에게 중요한 전자 문서들을 한곳에서 관리할 수 있는 효율적인 방법을 제공하는 서비스입니다. 주민세, 자동차검사, 과태료, 민방위 통지 등 전자문서와 관련된 작업을 손쉽게 처리 및 열람 할 수 있도록 돕는 서비스입니다.`,
        techStack: ['Typescript', 'React', 'Mobx', 'Axios', 'HTML5', 'SCSS', 'WebPack', 'Sentry'],
      },
    ],
  },
  {
    name: 'Rsupport 💼',
    team: '프론트엔드개발팀',
    date: '2010.07 ~ 2020.05',
    list: [
      {
        name: '리모트미팅',
        role: '프론트엔드 개발',
        date: '2014.09 ~ 2020.05',
        description:
          'WebRTC · WebSocket 기반 온라인 화상회의 서비스 클라이언트 설계 및 개발을 담당하였습니다.\n' +
          '2014년 WebRTC 기술을 이용한 파일럿 프로젝트를 주도한 것을 시작으로 리모트미팅 프로젝트의 시작을 함께 할 수 있었습니다.',
        link: '/development/remotemeeting',
        devItems: [
          'WebRTC 모듈',
          'WebSocket 핸들러',
          'Video Audio 핸들러',
          '화면공유',
          '문서뷰어',
          'Canvas 그리기도구',
          '채팅',
          '회의록',
          '초대기능',
          '크롬 캡쳐 확장프로그램',
          '모바일 웹뷰',
          '실시간 룸리스트',
          '예약 캘린더',
        ],
        techStack: [
          'React',
          'Redux thunk',
          'WebRTC',
          'WebSocket',
          'MQTT',
          'ES6',
          'Ajax',
          'Canvas',
          'HTML5',
          'SCSS',
          'WebPack',
        ],
      },
      {
        name: '리모트세미나',
        role: '프로토타입 설계, 프론트엔드 개발',
        date: '2019.01 ~ 2019.10',
        description:
          '온라인 미팅 제품에 이어 세미나 제품을 회사에서 신규서비스로 출시를 준비중입니다.\n' +
          'WebRTC 기반으로 설계되어 기존에 담당하던 리모트미팅과 구조상 유사점이 많아 제품 초기 프로토타입 개발과 알파버전 개발을 담당하였습니다.',
        link: '/development/remoteseminar',
        devItems: [
          'WebRTC 모듈',
          'WebSocket 핸들러',
          'Video Audio 핸들러',
          '화면공유',
          '문서뷰어',
          '그리기도구',
          '업로더',
          '채팅 등',
        ],
        techStack: [
          'React',
          'Redux',
          'WebRTC',
          'WebSocket',
          'MQTT',
          'ES6',
          'Ajax',
          'Canvas',
          'HTML5',
          'SCSS',
          'CSS modules',
          'WebPack',
        ],
      },
      {
        name: '칭찬합시다',
        role: '기획, 디자인, 프론트엔드, 백엔드 개발',
        date: '2015.03 ~ 2015.12',
        description:
          '회사 규모가 커지며 조금 경직된 내부 분위기를 개선하고자 기획한 프로젝트입니다. 서비스 특징으로 매달 칭찬 풍선이 7개가 충전이되고, 메시지를 보낼 때 하나씩 소모됩니다. 한 달간 자신에게 전달된 메시지는 다음 달 1일에 공개하도록 했으며, 바로 확인할 수 있는 메신저가 아닌 느린 우체통처럼 아날로그 감성의 편지를 주고 받는 느낌을 주려고 기획했습니다.',
        link: '/development/balloon',
        devItems: [
          '구글 계정 연동',
          '메시징 처리',
          '데이터 암호화',
          '스케줄러',
          '자동 메일 발송',
          '관리자 페이지',
          'REST API 개발',
        ],
        techStack: [
          'HTML5',
          'SCSS',
          'ES5',
          'Ajax',
          'jQuery',
          'Gulp',
          'NodeJS',
          'Express',
          'EJS',
          'MongoDB',
          'Cron',
          'Nodemon',
          'Nodemailer',
        ],
      },
      {
        name: '리모트라이브',
        role: '기획, 프론트엔드, 백엔드 개발',
        date: '2014.04 ~ 2014.08',
        description:
          'RemoteLive는 WebRTC 기반의 서비스의 가능성을 검토하기 위한 파일럿 프로젝트였습니다.\n' +
          '상용화 된 리모트미팅 프로젝트의 디딤돌이 된 프로젝트이며, Websocket 채팅과 P2P 기반의 화상회의 기능을 모듈화하여 기존 회사 서비스에 적용시키는 방법을 제안한 프로젝트입니다.',
        link: '/development/remotelive',
        devItems: ['WebRTC 모듈', 'WebSocket 핸들러', '화상회의', '채팅 등'],
        techStack: [
          'WebRTC',
          'Socket.io',
          'ES5',
          'HTML5',
          'CSS3',
          'Ajax',
          'jQuery',
          'Gulp',
          'Node.js',
          'Express',
          'EJS',
        ],
      },
      {
        name: '리모트WOL',
        role: '프론트엔드 개발',
        date: '2013.02 ~ 2014.03',
        description:
          'RemoteWOL은 전원이 꺼져 있는 PC의 전원을 원격에서 켤 수 있도록 하는 제품입니다. WOL 기능을 지원하는 하드웨어에 작은 Goahead 웹서버와 그 내부에서 하드웨어를 제어 & 관리할 수 있는 싱글 페이지 어플리케이션을 개발하였습니다.',
        link: '/development/remotewol',
        devItems: [
          '관리 화면 UI',
          '동적 렌더러',
          '하드웨어 설정 기능',
          '시스템 로그',
          '다이얼로그',
          '서비스 전체 기능 및 UI 개발 담당',
        ],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery', 'Gulp'],
      },
      {
        name: '삼성 RemotePC',
        role: '프론트엔드 개발',
        date: '2013',
        description:
          '삼성 Remote PC 프로젝트는 직원들이 자신의 PC를 테블릿에서 원격제어 하기위해 개발된 프로젝트입니다.\n' +
          '웹에서 PC에 에이전트 설치, 연동, 상태 관리를 제공하였습니다.',
        link: '/development/samsung-remote-pc',
        devItems: ['원격제어 에이전트 설치 모듈', '원격 장치 관리 기능', '서비스 전체 기능 및 UI 개발 담당'],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery'],
      },
      {
        name: '프론트엔드 컨벤션 사이트',
        role: '기획, 설계, 프론트엔드 개발',
        date: '2012.11 ~ 2014.12',
        description:
          '코딩 컨벤션을 공유하고 Bootstrap 같은 자주 사용하는 UI 컴포넌트를 만들기로 시작한 프로젝트이며, 오픈 이후 팀 프로젝트로 발전시킬 수 있었습니다.',
        link: '/development/frontend-convension',
        devItems: ['사이트 개발', '컨벤션 작성', '플러그인 개발', '컴포넌트 개발 등'],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery', 'Handlebars'],
      },
      {
        name: '네이트온 내 PC제어 리뉴얼',
        role: '프론트엔드 개발',
        date: '2012.03 ~ 2012.10',
        description:
          '네이트온 내 PC제어 프로젝트는 이미 5년 이상 서비스 중인 웹 사이트를 리뉴얼 및 UI 개선하는 프로젝트였습니다.\n리뉴얼 후 유지보수 개발을 진행하였습니다.',
        link: '/development/nateon-mypc',
        devItems: ['원격제어 모듈 런쳐', '서비스 전체 기능 및 UI 개발 담당'],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery'],
      },
      {
        name: '리모트뷰 기업용',
        role: '프론트엔드 개발',
        date: '2011.08 ~ 2014.08',
        description:
          '회사의 주력 제품이며 PC를 원격에서 접속하여 재택근무를 가능하게 해주는 유용한 서비스입니다.\n' +
          '원격지에 설치된 PC의 목록이 노출되며, 해당 PC에 접속하면 전용 뷰어를 통해서 PC를 제어할 수 있습니다.',
        link: '/development/remoteview-business',
        devItems: [
          '원격 컴퓨터관리 기능',
          '이미지 라이브 뷰어',
          '동적 렌더러',
          '다이얼로그',
          '컨텍스트메뉴',
          '트리뷰',
          '리포팅 차트',
          '드레그 & 드롭 기능',
          '기능별 CRUD 비동기 로직 개발 등',
          '서비스 전체 기능 및 UI 개발 담당',
        ],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery', 'jQuery.ui', 'Handlebars', 'flot chart'],
      },
      {
        name: '리모트뷰 개인용',
        role: '프론트엔드 개발',
        date: '2010.09 ~ 2013.09',
        description:
          '개인 사용자들을 위한 PC원격제어 서비스인 리모트뷰는 제가 담당할 당시 이전 버전 서비스를 완전히 리뉴얼하는 프로젝트였으며, ' +
          '저의 프론트엔드 개발에 씨앗이 되어준 프로젝트입니다.',
        link: '/development/remoteview-personal',
        devItems: [
          '원격 컴퓨터관리 기능',
          '리포팅 차트',
          '브랜드 사이트',
          '어드민 사이트',
          '서비스 전체 기능 및 UI 개발 담당',
        ],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery', 'jQuery mobile', 'flot chart'],
      },
      {
        name: '알서포트닷컴 리뉴얼',
        role: '프론트엔드 개발',
        date: '2010.08 ~ 2011.01',
        description:
          '회사 공식 사이트 리뉴얼 프로젝트입니다. 5개 국어를 지원하는 사이트로 다국어 처리를 고려하여 UI 요소들을 확장 가능하도록 개발 하였습니다.',
        link: '/development/rsupport',
        devItems: ['사이트 전체 마크업', 'Slider UI', 'Tab UI', '동영상 플레이어 연동', '회원가입', '다국어 처리 등'],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery'],
      },
      {
        name: '리모트콜',
        role: '프론트엔드 개발',
        date: '2010.07 ~ 2011.07',
        description:
          '주로 상담원이 고객의 PC를 제어하는 서비스인 리모트콜 제품의 유지보수와 솔루션 납품 커스터마이징을 담당하였습니다.',
        link: null,
        devItems: ['원격제어 모듈 런쳐', '유지보수', '솔루션 납품 개발'],
        techStack: ['HTML5', 'CSS3', 'ES5', 'Ajax', 'jQuery'],
      },
    ],
  },
  {
    name: 'Nexon 💼',
    team: '인프라기술팀',
    date: '2010.03 ~ 2010.06',
    list: [
      {
        name: '웹오피스',
        role: '사내 그룹웨어 UI 개발',
        date: '2010.03 ~ 2010.06',
        description:
          '넥슨 전직원이 사용하는 그룹웨어 개발프로젝트에서 UI 개발을 담당하였습니다.\n' +
          'UI 공통 스타일 가이드를 만들어 범용적으로 사용 가능하게 하였습니다.',
        devItems: ['UI 컴포넌트화'],
        techStack: ['HTML5', 'CSS', 'ES5', 'Ajax', 'jQuery'],
      },
    ],
  },
];
