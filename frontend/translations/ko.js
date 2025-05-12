export const ko = {
  sections: {
    education: "학력",
    licenses: "자격증",
    experience: "경력 (총 2년 9개월)",
    awards: "수상",
    leadership: "대외활동 및 프로젝트",
    skills: "테크니컬 스킬",
    blog: "블로그"
  },
  contact: {
    email: "이메일: jooyoungmmm@gmail.com",
    mobile: "연락처: +82-10-6435-6299",
    linkedin: "링크드인"
  },
  education: {
    title: "University of Wisconsin-Madison | Statistics 학사",
    period: "2021.12 - 2024.05 졸업",
    description: "FINANCE 365/765 (Blockchain and Cryptocurrencies) 교과목 조교"
  },
  licenses: [
    {
      title: "Securities Industry Essentials (자격증 ID T0207379) | FINRA",
      period: "2023.01"
    },
    {
      title: "Tableau Certified Data Analyst (자격증 ID T000134652) | Tableau",
      period: "2024.01"
    },
    {
      title: "TOEIC (985)",
      period: "2024.07"
    }
  ],
  skills: {
    comfortable: [
      { text: "PYTHON (프로그래밍)", keywords: [] },
      { text: "MySQL (데이터베이스)", keywords: [] },
      { text: "AWS (EC2 / S3 / RDS)", keywords: [] },
      { text: "FASTAPI (개발)", keywords: [] },
      { text: "TABLEAU (데이터 시각화)", keywords: [] }
    ],
    familiar: [
      { text: "REACT / JAVASCRIPT / CSS", keywords: [] },
      { text: "DOCKER", keywords: [] },
      { text: "SWIFT (iOS)", keywords: [] }
    ]
  },
  experience: [
    {
      company: "미래에셋캐피탈",
      location: "서울, 대한민국",
      role: "리서치 애널리스트",
      period: "2024.10 - 현재",
      responsibilities: [
        { 
          text: "AI, 스페이스테크, 반도체 등에 관한 시장 및 회사 리서치, 투자 포인트 및 리스크 정리를 통한 투자심사보고서 작성했음",
          keywords: ["리서치", "투자심사보고서"] 
        },
        { 
          text: "포트폴리오 회사 잠재 고객사 연결 및 회사 소개서 및 프레젠테이션 작성했음",
          keywords: ["프레젠테이션"] 
        },
        { 
          text: "미국 기반 VC 어소시에이트와의 네트워크 확장을 통한 미국 내 딜 흐름 파악 및 펀드오브펀드 기회 모색했음",
          keywords: [] 
        }
      ]
    },
    {
      company: "Assembly Global",
      location: "서울, 대한민국",
      role: "디지털 마케팅 인턴",
      period: "2024.08 - 2024.09",
      responsibilities: [
        { 
          text: "글로벌 패션, IT브랜드들의 디지털 마케팅 캠페인 셋업 및 여러 채널(페이스북, 레딧, 링크드인, 구글, 네이버 등)에서의 KPI 추적 관리했음",
          keywords: ["디지털 마케팅 캠페인"] 
        }
      ]
    },
    {
      company: "Cross River Bank",
      location: "포트 리, 뉴저지",
      role: "제품 리서치 인턴",
      period: "2023.06 - 2023.08",
      responsibilities: [
        { 
          text: "미국 즉시 결제 시스템 (FedNow, RTP) 및 최적의 상품 가격 책정을 위한 경쟁사 리서치 수행했음",
          keywords: ["리서치"] 
        }
      ]
    },
    {
      company: "Factorial Funds",
      location: "원격",
      role: "벤처 어소시에이트",
      period: "2021.11 - 2023.03",
      responsibilities: [
        { 
          text: "여러 건의 구주 거래 프로세스를 주도하며 잠재적 판매자와 구매자를 찾고, Carta를 통해 거래를 마무리했음",
          keywords: ["구주 거래"] 
        },
        { 
          text: "Salesforce를 활용하여 LP 펀드레이징 캠페인을 구축 및 관리했음",
          keywords: ["펀드레이징 캠페인", "Salesforce"] 
        }
      ]
    },
    {
      company: "ComTrue Technologies",
      location: "서울, 대한민국",
      role: "인공지능 엔지니어 인턴",
      period: "2021.03 - 2021.08",
      responsibilities: [
        { 
          text: "Transformer를 포함한 최신 머신러닝 논문을 PyTorch로 구현하여 회사의 OCR 모델 성능 향상했음",
          keywords: ["PyTorch", "OCR 모델"] 
        },
        { 
          text: "Lightning Memory-Mapped Database와 멀티프로세싱을 적용하여 데이터 로딩 병목 현상 최적화했음. Ray를 구현하여 최적의 하이퍼파라미터 탐색했음",
          keywords: [] 
        }
      ]
    }
  ],
  awards: [
    {
      title: "이더리움 서울 해커톤",
      period: "2022.08",
      award: "폴리곤 및 프라이버시 트랙 1등 (6,000 USDC)",
      description: { 
        text: "(5인 팀) 이더리움의 Optimistic 롤업을 활용한 Polygon Nightfall을 이용해, Zero Knowledge Proof (영지식 증명)으로 거래 암호화가 적용된 Private 암호화폐 급여 솔루션을 개발했음. 이후 폴리곤 팀에서 추가 지원금을 받았음.",
        keywords: ["암호화폐 급여 솔루션을 개발"] 
      },
      demoLabel: "데모 영상:",
      demoLink: "https://youtu.be/cM9kDD1reJ4?si=F0Qm3WqA1RaOSeTe",
      demoText: "유튜브에서 보기"
    },
    {
      title: "DB 금융 경제 공모전",
      period: "2020.05",
      award: "동상 (600만원)",
      description: { 
        text: "(개인) SVM과 LSTM을 포함한 여러 머신러닝 모델을 활용하여 바이오제약 주식의 변동성에 중점을 둔 단기 일중 거래 전략을 제시하고, 실시간 데이터와 감정 분석을 통합하여 예측 성능을 향상시켰음.",
        keywords: ["단기 일중 거래 전략"] 
      }
    },
    {
      title: "미래에셋 디지털 금융 페스티벌",
      period: "2019.11",
      award: "동상 (100만원)",
      description: { 
        text: "(3인 팀) 기술 부문 주식 움직임 예측을 위해 뉴스 데이터, Dart의 공시 데이터, 증권사 보고서로부터 키워드를 추출하여 더 나은 자연어 처리를 위한 도메인 감정사전 사용을 제안했음.",
        keywords: ["도메인 감정사전", "자연어 처리"] 
      }
    }
  ],
  leadership: [
    {
      title: "Build the Future With Chainlink 이벤트",
      period: "2024.09",
      description: { 
        text: "한국 블록체인 위크 기간 중 체인링크 이벤트에서 패널리스트로 발표했음.",
        keywords: [] 
      },
      linkLabel: "이벤트 포스트:",
      link: "https://x.com/chainlink/status/1830585790667133320",
      linkText: "X에서 보기"
    },
    {
      title: "BaeTos (토익 스피킹 연습 웹 앱)",
      period: "2024.06 - 2024.09",
      description: { 
        text: "토익스피킹 시험의 각 파트별 문제은행을 풀어보며 실시간으로 피드백 받고, 실전 모의고사, 템플릿 문장 영작 등을 학습할 수 있는 웹앱을 개발했음. 유료 사용자 확보했음! (현재 운영 중 @baetos.com)",
        keywords: [] 
      },
      linkLabel: "웹사이트:",
      link: "https://baetos.com",
      linkText: "baetos.com"
    },
    {
      title: "BaeTalk (영어 말하기 연습 앱)",
      period: "2024.02 - 2024.06",
      description: { 
        text: "AI 아바타와 화상 통화를 통해 영어를 연습할 수 있는 풀스택 웹 앱을 개발했음. HeyGen, Whisper, ElevenLabs, GPT API를 사용하고 FASTAPI 백엔드를 EC2에 배포했음. (현재 서비스 종료)",
        keywords: [] 
      },
      linkLabel: "데모 영상:",
      link: "https://www.youtube.com/watch?v=Cjni0TkboPw",
      linkText: "유튜브에서 보기"
    },
    {
      title: "Sols on the Square (레스토랑 메뉴 웹 페이지)",
      period: "2024.01 - 2024.02",
      description: { 
        text: "매디슨의 한식당을 위한 고객 추적 웹페이지를 개발했음. React 프론트엔드와 Flask 백엔드를 Docker로 AWS EC2에 배포하고 MySQL을 AWS RDS에서 구축하여 사용자 참여 데이터를 저장했음 (현재 서비스 종료).",
        keywords: [] 
      },
      linkLabel: "웹사이트:",
      link: "https://solsonthesquare.online",
      linkText: "solsonthesquare.online"
    }
  ],
  blog: {
    posts: [
      {
        title: "내가 되고 싶은 것과 그 이유",
        date: "2025-05-12",
        summary: "미래 경력 목표, 벤처 캐피탈리스트가 되고 싶은 이유, 그리고 개인적 성장에 대한 성찰.",
        content: `5-10년 후에 나는 무엇이 되고 싶은가? 미국에서 역량 있는 벤처 캐피탈리스트가 되고 싶다.

왜 미국인가? 세계에서 가장 큰 VC 및 스타트업 시장이기 때문이다.

그리고 나는 미국뿐만 아니라 전 세계 스타트업에 투자하고 싶다. 10년 후에는 현재 정체된 것처럼 보이는 신흥 시장 - 아프리카나 남아시아 같은 곳 - 에서 의미 있는 성장을 볼 수 있을 것이라고 믿기 때문이다.


왜 벤처 캐피탈리스트가 되고 싶은가?

나는 경력을 쌓을 수 있다고 생각했던 네 개의 다른 산업에서 다섯 번의 인턴십을 했는데, VC 인턴십이 가장 즐거웠다.

왜 다른 인턴십보다 더 즐거웠을까?

나는 새로운 것을 배우는 것을 좋아한다. 내 가장 큰 장점 - 그리고 아마도 약점이기도 한 - 은 다양한 분야에 관심이 있다는 것이다.

나는 어떤 한 분야의 전문가도 아니다. 전문가가 되고 싶지만, 아직 내 분야를 찾지 못했다. 솔직히 이것은 내 가장 큰 불안 중 하나다.

대부분의 직업은 특정 수준의 전문성을 요구한다. 지금 나는 모호한 상태에 있으며, 이것에 대해 약간 자의식을 느낀다.

그렇지만, 어쩌면 한동안 한 가지에 집중하는 것이 맞을지도 모른다. 하지만 자꾸 떠오르는 스타트업 아이디어들이 내 주의를 끌고 있다. 솔직히 말하면 산만하다.

한 분야를 전문으로 해야 한다면, 아마도 데이터 사이언스나 코딩이었을 것이다.

하지만 지금 AI의 부상으로, 우리가 무엇을 배워야 하는지 혼란스럽다. 물론 기본 이론을 이해하는 것은 항상 가치가 있지만 - "처음부터 코딩을 배우는 것이 여전히 가치가 있을까?"

자동차가 이미 발명된 후에 말 타는 법을 배우는 것 같은 느낌이다.

그 혼란이 지금으로서는 내 스타트업에서 일하게 된 이유다.

내면을 들여다보면, 나는 많은 것에 호기심이 있고 빨리 배운다. 하지만 일할 때 더 진지하고 집중해야 한다는 것도 안다.

일을 가볍게 생각하는 것이 아니다 - 그렇지 않다.

하지만 솔직히 말하면, 때로는 마음 깊은 곳에서, 일을 약간 장난스럽게 접근해도 성공할 수 있다고 생각한다.

나는 호기심과 즐거움을 우선시하는 경향이 있음을 깨달았고, 때로는 그것이 너무 과한 것 같다.

그래서 더 많은 규율을 개발해야 한다고 생각한다 - 하지만 강제로가 아니라. 내가 원하는 것, 내가 하고 있는 것, 그리고 왜 그것을 하고 있는지와 일치하고 싶다. 그렇게 하면 규율이 더 자연스럽게 생길 수 있다.

다른 이야기로, 이상하게 들릴 수도 있지만, 실제로 미국으로 이주하기 전에 일본에서 시간을 보내고 싶다.

왜? 일본의 문화, 미학을 진심으로 좋아하기 때문이다 - 모든 부분이 아닐 수도 있지만, 그곳에서 한동안 살면서 직장 문화를 경험하고 싶을 만큼은 충분하다.

5-10년 내에 바로 미국으로 가는 데 도움이 되지 않을 수도 있다.

하지만 100년의 삶이다. 나는 아직 70년 이상의 시간이 남아 있다.

그래서 지금은 내가 필요한 것뿐만 아니라 원하는 것을 탐색하고 위험을 감수할 때이다.

우회로가 되더라도, 그것이 나를 형성하고 다른 방법으로는 배우지 못했을 것들을 가르쳐 줄 것이라고 믿는다.

또한, 언어를 배우는 것은 다른 방법으로는 자극받지 않았을 두뇌의 다른 부분을 활성화한다고 생각한다. 찾아보니, 모든 언어가 서로 다르게 표현하기 때문에 언어 학습이 더 넓은 방식으로 생각하는 데 도움이 될 수 있다. 사람들을 더 잘 이해하고 싶다면 이것은 매우 가치 있다고 생각한다.

그래서, 이것이 내가 되고 싶은 것에 대한 약간의 이야기다 - 적어도 경력 측면에서는. 오늘의 글은 경력에 더 초점을 맞췄기 때문에, 어떤 사람이 되고 싶은지에 대해서도 쓸 예정이다.

마지막으로, 방금 배운 것은 뇌의 왼쪽 반구는 일반적으로 언어, 논리, 분석적 사고와 관련이 있고, 오른쪽 반구는 창의성, 직관, 공간 추론과 연결되어 있다는 것이다. 사람들은 도전을 추구하고 호기심을 기르는 것이 더 창의적이 되는 데 도움이 될 수 있다고 말한다.

당신은 10년 후에 무엇이 되고 싶은가, 그리고 왜?`
      },
      {
        title: "금융과 기술의 교차점에서의 나의 여정",
        date: "2024-10-15",
        summary: "금융과 기술 분야에서의 경력 경로에 대한 성찰.",
        content: "샘플 블로그 포스트 내용입니다. 금융과 기술 역할 사이의 전환 경험, 직면한 도전, 그리고 얻은 교훈에 대해 논의할 것입니다. AI 엔지니어링에서 벤처 캐피탈, 금융 리서치까지 이어진 여정에서 이러한 산업들이 어떻게 중첩되고 서로 영향을 미치는지에 대한 독특한 관점을 얻었습니다."
      },
      {
        title: "BaeTos 개발: 제품 개발에서 얻은 교훈",
        date: "2024-09-20",
        summary: "성공적인 언어 학습 애플리케이션 개발 및 출시에서 얻은 인사이트.",
        content: "BaeTos 구축에 관한 향후 블로그 포스트를 위한 임시 콘텐츠입니다."
      },
      {
        title: "금융 서비스에서의 AI에 대한 생각",
        date: "2024-08-05",
        summary: "현대 금융 기관에서 인공지능의 영향 탐구.",
        content: "금융 서비스에서의 AI에 관한 향후 블로그 포스트를 위한 임시 콘텐츠입니다."
      }
    ]
  }
}; 