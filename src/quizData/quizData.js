const quizData = {
  categories: ["HTML/CSS", "JavaScript", "웹 표준/접근성", "웹 기획/디자인", "서버/네트워크"],
  quizzes: [
    // HTML/CSS 카테고리
    {
      id: 1,
      category: "HTML/CSS",
      difficulty: "쉬움",
      question: "💬 친구 지훈:\n \"웹 페이지 만들 때 글자 크기나 색깔 바꾸는 건 뭘로 해?\"\n👉 어떤 언어를 말하는 걸까?",
      choices: ["HTML", "CSS", "JavaScript", "Python"],
      correct: "CSS"
    },
    {
      id: 2,
      category: "HTML/CSS",
      difficulty: "보통",
      question: "🧠 서연이:\n \"웹 페이지 구조를 만드는 뼈대 같은 언어가 뭐지?\"\n👉 정답은?",
      choices: ["CSS", "JavaScript", "HTML", "SQL"],
      correct: "HTML"
    },
    {
      id: 3,
      category: "HTML/CSS",
      difficulty: "어려움",
      question: "😰 민준:\n \"CSS에서 요소의 안쪽 여백을 조절하는 속성은?\"\n👉 어떤 속성일까?",
      choices: ["margin", "padding", "border", "outline"],
      correct: "padding"
    },
    {
      id: 4,
      category: "HTML/CSS",
      difficulty: "쉬움",
      question: "📦 예나:\n \"웹 페이지에 이미지를 넣을 때 쓰는 HTML 태그는?\"",
      choices: ["<img>", "<p>", "<a>", "<div>"],
      correct: "<img>"
    },
    {
      id: 5,
      category: "HTML/CSS",
      difficulty: "보통",
      question: "💡 도현:\n \"CSS에서 요소를 화면에 표시하지 않게 숨기는 속성은?\"\n👉 어떤 속성일까?",
      choices: ["visibility: hidden;", "display: none;", "opacity: 0;", "position: absolute;"],
      correct: "display: none;"
    },

    // JavaScript 카테고리
    {
      id: 6,
      category: "JavaScript",
      difficulty: "쉬움",
      question: "📘 유진:\n \"웹 페이지에서 버튼 누르면 '뿅!' 하고 움직이는 효과 같은 거 만들 때 쓰는 언어는?\"\n👉 어떤 언어일까?",
      choices: ["HTML", "CSS", "JavaScript", "PHP"],
      correct: "JavaScript"
    },
    {
      id: 7,
      category: "JavaScript",
      difficulty: "보통",
      question: "📈 태준:\n \"JavaScript에서 변수를 선언할 때 쓰는 키워드가 아닌 것은?\"\n👉 틀린 것은?",
      choices: ["var", "let", "const", "int"],
      correct: "int"
    },
    {
      id: 8,
      category: "JavaScript",
      difficulty: "어려움",
      question: "📊 하은:\n \"JavaScript에서 웹 문서의 요소를 선택하고 조작할 때 사용하는 표준 객체 모델은?\"\n👉 무엇일까?",
      choices: ["BOM", "DOM", "JSON", "AJAX"],
      correct: "DOM"
    },
    {
      id: 9,
      category: "JavaScript",
      difficulty: "쉬움",
      question: "🎯 건우:\n \"JavaScript에서 어떤 동작을 수행하는 코드의 묶음을 뭐라고 해?\"\n👉 정답은?",
      choices: ["변수", "함수", "배열", "객체"],
      correct: "함수"
    },
    {
      id: 10,
      category: "JavaScript",
      difficulty: "보통",
      question: "🧑‍💼 지우:\n \"JavaScript에서 조건에 따라 다른 코드를 실행하고 싶을 때 쓰는 문법은?\"\n👉 어떤 문법일까?",
      choices: ["for", "while", "if", "function"],
      correct: "if"
    },

    // 웹 표준/접근성 카테고리
    {
      id: 11,
      category: "웹 표준/접근성",
      difficulty: "쉬움",
      question: "📆 민서:\n \"모든 사람이 웹사이트를 똑같이 잘 이용할 수 있게 만드는 걸 뭐라고 해?\"\n👉 정답은?",
      choices: ["웹 표준", "웹 접근성", "웹 보안", "웹 디자인"],
      correct: "웹 접근성"
    },
    {
      id: 12,
      category: "웹 표준/접근성",
      difficulty: "보통",
      question: "🏠 준서:\n \"W3C에서 정한 웹 기술 표준을 지키는 걸 뭐라고 해?\"",
      choices: ["웹 접근성", "웹 호환성", "웹 표준", "웹 사용성"],
      correct: "웹 표준"
    },
    {
      id: 13,
      category: "웹 표준/접근성",
      difficulty: "어려움",
      question: "📉 채원:\n \"이미지에 대한 설명을 제공하여 시각 장애인이 이해할 수 있도록 돕는 HTML 속성은?\"\n👉 어떤 속성일까?",
      choices: ["src", "href", "alt", "title"],
      correct: "alt"
    },
    {
      id: 14,
      category: "웹 표준/접근성",
      difficulty: "쉬움",
      question: "💳 현서:\n \"웹 접근성을 높이기 위해 키보드만으로도 웹사이트를 이용할 수 있게 하는 건 어떤 원칙에 해당될까?\"",
      choices: ["인식의 용이성", "운용의 용이성", "이해의 용이성", "견고성"],
      correct: "운용의 용이성"
    },
    {
      id: 15,
      category: "웹 표준/접근성",
      difficulty: "보통",
      question: "🔍 우진:\n \"웹 표준을 지키면 어떤 점이 좋을까?\"\n👉 가장 거리가 먼 것은?",
      choices: ["다양한 브라우저에서 잘 보임", "검색 엔진 최적화에 유리", "웹 접근성 향상", "웹사이트 디자인이 자동으로 예뻐짐"],
      correct: "웹사이트 디자인이 자동으로 예뻐짐"
    },

    // 웹 기획/디자인 카테고리
    {
      id: 16,
      category: "웹 기획/디자인",
      difficulty: "쉬움",
      question: "🚗 수현:\n \"웹사이트 만들기 전에 어떤 내용을 넣을지, 어떻게 구성할지 정하는 단계를 뭐라고 해?\"\n👉 정답은?",
      choices: ["코딩", "디자인", "기획", "테스트"],
      correct: "기획"
    },
    {
      id: 17,
      category: "웹 기획/디자인",
      difficulty: "보통",
      question: "⏳ 지훈:\n \"사용자가 웹사이트를 얼마나 쉽고 편리하게 사용할 수 있는지를 나타내는 말은?\"\n👉 무엇일까?",
      choices: ["유용성", "심미성", "사용성", "기능성"],
      correct: "사용성"
    },
    {
      id: 18,
      category: "웹 기획/디자인",
      difficulty: "어려움",
      question: "🏥 아영:\n \"웹사이트 디자인할 때, 화면 크기에 따라 레이아웃이 자동으로 바뀌는 디자인 기법은?\"\n👉 어떤 기법일까?",
      choices: ["고정형 디자인", "반응형 디자인", "적응형 디자인", "플랫 디자인"],
      correct: "반응형 디자인"
    },
    {
      id: 19,
      category: "웹 기획/디자인",
      difficulty: "쉬움",
      question: "🕊️ 승우:\n \"웹사이트의 전체적인 구조와 페이지 간 이동 경로를 그림으로 나타낸 것은?\"\n👉 무엇일까?",
      choices: ["와이어프레임", "스토리보드", "사이트맵", "프로토타입"],
      correct: "사이트맵"
    },
    {
      id: 20,
      category: "웹 기획/디자인",
      difficulty: "보통",
      question: "📑 서준:\n \"웹 디자인의 기본 요소 중 하나로, 시각적인 안정감과 통일성을 주는 것은?\"\n👉 무엇일까?",
      choices: ["레이아웃", "컬러", "타이포그래피", "모두 해당"],
      correct: "모두 해당"
    },

     // 서버/네트워크 카테고리
    {
      id: 21,
      category: "서버/네트워크",
      difficulty: "쉬움",
      question: "🌐 민지:\n \"웹사이트 주소창에 입력하는 www.example.com 같은 걸 뭐라고 해?\"\n👉 정답은?",
      choices: ["IP 주소", "도메인 이름", "URL", "서버 이름"],
      correct: "도메인 이름"
    },
    {
      id: 22,
      category: "서버/네트워크",
      difficulty: "보통",
      question: "💻 현수:\n \"웹 페이지 파일들이 저장되어 있고, 사용자가 요청하면 보내주는 컴퓨터는?\"\n👉 무엇일까?",
      choices: ["클라이언트", "서버", "라우터", "모뎀"],
      correct: "서버"
    },
    {
      id: 23,
      category: "서버/네트워크",
      difficulty: "어려움",
      question: "🔒 지호:\n \"웹사이트 주소 앞에 'https'가 붙어있으면 뭐가 좋은 거야?\"\n👉 가장 큰 장점은?",
      choices: ["웹사이트 속도가 빨라짐", "검색 순위가 높아짐", "데이터가 암호화되어 안전함", "디자인이 예뻐짐"],
      correct: "데이터가 암호화되어 안전함"
    },
    {
      id: 24,
      category: "서버/네트워크",
      difficulty: "쉬움",
      question: "📡 유나:\n \"인터넷에서 정보를 주고받을 때 지켜야 하는 약속 같은 걸 뭐라고 해?\"\n👉 정답은?",
      choices: ["프로그램", "데이터", "프로토콜", "알고리즘"],
      correct: "프로토콜"
    },
    {
      id: 25,
      category: "서버/네트워크",
      difficulty: "보통",
      question: "📊 재민:\n \"웹 브라우저가 웹 서버에게 웹 페이지를 달라고 요청할 때 사용하는 프로토콜은?\"\n👉 무엇일까?",
      choices: ["FTP", "SMTP", "HTTP", "SSH"],
      correct: "HTTP"
    }
  ]
};

export default quizData;

