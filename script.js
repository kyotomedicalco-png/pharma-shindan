const prefecturesByArea = {
  "北海道・東北": [
    { text: "北海道", score: 30 },
    { text: "青森県", score: 35 },
    { text: "岩手県", score: 35 },
    { text: "宮城県", score: 35 },
    { text: "秋田県", score: 35 },
    { text: "山形県", score: 35 },
    { text: "福島県", score: 35 }
  ],
  "関東": [
    { text: "東京都", score: 45 },
    { text: "神奈川県", score: 42 },
    { text: "埼玉県", score: 40 },
    { text: "千葉県", score: 40 },
    { text: "茨城県", score: 38 },
    { text: "栃木県", score: 38 },
    { text: "群馬県", score: 38 }
  ],
  "中部": [
    { text: "新潟県", score: 36 },
    { text: "富山県", score: 36 },
    { text: "石川県", score: 36 },
    { text: "福井県", score: 36 },
    { text: "山梨県", score: 38 },
    { text: "長野県", score: 38 },
    { text: "岐阜県", score: 38 },
    { text: "静岡県", score: 40 },
    { text: "愛知県", score: 42 }
  ],
"関西": [
  { text: "京都府", score: 42 },
  { text: "大阪府", score: 45 },
  { text: "兵庫県", score: 42 },
  { text: "滋賀県", score: 40 },
  { text: "奈良県", score: 40 },
  { text: "和歌山県", score: 38 },
  { text: "三重県", score: 40 }
],
  "中国・四国": [
    { text: "鳥取県", score: 35 },
    { text: "島根県", score: 35 },
    { text: "岡山県", score: 38 },
    { text: "広島県", score: 40 },
    { text: "山口県", score: 36 },
    { text: "徳島県", score: 35 },
    { text: "香川県", score: 36 },
    { text: "愛媛県", score: 36 },
    { text: "高知県", score: 35 }
  ],
  "九州・沖縄": [
    { text: "福岡県", score: 40 },
    { text: "佐賀県", score: 35 },
    { text: "長崎県", score: 35 },
    { text: "熊本県", score: 36 },
    { text: "大分県", score: 36 },
    { text: "宮崎県", score: 35 },
    { text: "鹿児島県", score: 35 },
    { text: "沖縄県", score: 35 }
  ]
};

const baseQuestions = [
  {
    key: "age",
    imageDesktop: "images/q1-age-desktop.png",
    imageMobile: "images/q1-age-v2.png",
    text: "年齢を選んでください",
    help: "現在の年齢に近いものを選択してください。",
    answers: [
      { text: "20代", score: 20 },
      { text: "30代", score: 35 },
      { text: "40代", score: 45 },
      { text: "50代以上", score: 35 }
    ]
  },
  {
    key: "experience",
    imageDesktop: "images/q2-desktop.png",
    imageMobile: "images/q2.png.png",
    text: "薬剤師としての経験年数は？",
    help: "薬剤師として勤務した通算年数を選択してください。",
    answers: [
      { text: "1年未満", score: 10 },
      { text: "1〜3年", score: 20 },
      { text: "4〜9年", score: 35 },
      { text: "10年以上", score: 50 }
    ]
  },
  {
    key: "workplace",
    imageDesktop: "images/q3-desktop.png",
    imageMobile: "images/q3.png.png",
    text: "現在の勤務先は？",
    help: "もっとも近い勤務先を選択してください。",
    answers: [
      { text: "調剤薬局", score: 35 },
      { text: "病院", score: 30 },
      { text: "ドラッグストア", score: 45 },
      { text: "企業", score: 50 },
      { text: "その他", score: 25 }
    ]
  },
  {
    key: "position",
    imageDesktop: "images/q4-desktop.png",
    imageMobile: "images/q4.png.png",
    text: "現在の役職は？",
    help: "役職が複数ある場合は、もっとも近いものを選択してください。",
    answers: [
      { text: "一般薬剤師", score: 20 },
      { text: "管理薬剤師", score: 55 },
      { text: "ラウンダー", score: 70 },
      { text: "薬局長・店長", score: 75 },
      { text: "エリアマネージャー", score: 90 },
      { text: "薬剤部長", score: 95 }
    ]
  },
  {
    key: "area",
    imageDesktop: "images/q5-desktop.png",
    imageMobile: "images/q5.png.png",
    text: "勤務希望エリアを選んでください",
    help: "現在の勤務エリア、または転職を希望するエリアを選択してください。",
    answers: Object.keys(prefecturesByArea).map(function(area) {
      return { text: area, score: 0 };
    })
  },
  {
    key: "motivation",
    imageDesktop: "images/q7-desktop.png",
    imageMobile: "images/q7.png.png",
    text: "転職意欲は？",
    help: "今のお気持ちに近いものを選択してください。",
    answers: [
      { text: "今は考えていない", score: 10 },
      { text: "良い求人があれば", score: 25 },
      { text: "半年以内に考えたい", score: 35 },
      { text: "すぐにでも考えたい", score: 45 }
    ]
  },
  {
    key: "priority",
    imageDesktop: "images/q8-desktop.png",
    imageMobile: "images/q8.png.png",
    text: "一番重視する条件は？",
    help: "転職や働き方で一番重視したいものを選択してください。",
    answers: [
      { text: "年収アップ", score: 45 },
      { text: "ワークライフバランス", score: 30 },
      { text: "キャリアアップ", score: 40 },
      { text: "人間関係・職場環境", score: 25 }
    ]
  }
];

let questions = [];
let current = 0;
let score = 0;
let answerHistory = [];
let selectedData = {
  area: "",
  prefecture: "",
  position: ""
};

function getQuestionImages(question) {
  return {
    desktop: question.imageDesktop || question.image || question.imageMobile || "",
    mobile: question.imageMobile || question.image || question.imageDesktop || ""
  };
}

function preloadImages() {
  const imagePaths = [];

  baseQuestions.forEach(function(question) {
    const images = getQuestionImages(question);
    if (images.desktop) imagePaths.push(images.desktop);
    if (images.mobile) imagePaths.push(images.mobile);
  });

  imagePaths.push("images/q6-desktop.png");
  imagePaths.push("images/q6.png.png");

  imagePaths.forEach(function(src) {
    const img = new Image();
    img.src = src;
  });
}

function buildQuestions() {
  questions = JSON.parse(JSON.stringify(baseQuestions));
}

function startQuiz() {
  preloadImages();
  buildQuestions();

  current = 0;
  score = 0;
  answerHistory = [];
  selectedData = {
    area: "",
    prefecture: "",
    position: ""
  };

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[current];
  const images = getQuestionImages(question);

  document.getElementById("question-badge").innerText = "Q" + (current + 1);
  document.getElementById("question-title").innerText = question.text;
  document.getElementById("question-help").innerText = question.help || "";

  const imageElement = document.getElementById("question-image");
  const desktopSource = document.getElementById("question-image-desktop-source");

  imageElement.src = images.mobile;
  desktopSource.srcset = images.desktop;

  const answerArea = document.getElementById("answer-area");
  answerArea.innerHTML = "";

  question.answers.forEach(function(answer) {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerText = answer.text;

    button.onclick = function() {
      selectAnswer(question, answer);
    };

    answerArea.appendChild(button);
  });

  renderProgressDots();

  document.querySelector(".back-button").style.visibility =
    current === 0 ? "hidden" : "visible";

  window.scrollTo(0, 0);
}

function renderProgressDots() {
  const dotsArea = document.getElementById("progress-dots");
  dotsArea.innerHTML = "";

  questions.forEach(function(_, index) {
    const dot = document.createElement("span");
    dot.className = "progress-dot" + (index === current ? " active" : "");
    dotsArea.appendChild(dot);
  });
}

function selectAnswer(question, answer) {
  score += answer.score;

  const historyItem = {
    questionKey: question.key,
    answerText: answer.text,
    score: answer.score,
    insertedPrefectureQuestion: false
  };

  if (question.key === "position") {
    selectedData.position = answer.text;
  }

  if (question.key === "area") {
    selectedData.area = answer.text;

    const prefectureQuestion = {
      key: "prefecture",
      imageDesktop: "images/q6-desktop.png",
      imageMobile: "images/q6.png.png",
      text: "都道府県を選んでください",
      help: selectedData.area + "の中から、現在または希望する都道府県を選択してください。",
      answers: prefecturesByArea[answer.text]
    };

    questions.splice(current + 1, 0, prefectureQuestion);
    historyItem.insertedPrefectureQuestion = true;
  }

  if (question.key === "prefecture") {
    selectedData.prefecture = answer.text;
  }

  answerHistory.push(historyItem);
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (current <= 0) return;

  current--;

  const last = answerHistory.pop();

  if (last) {
    score -= last.score;

    if (last.questionKey === "position") {
      selectedData.position = "";
    }

    if (last.questionKey === "prefecture") {
      selectedData.prefecture = "";
    }

    if (last.questionKey === "area") {
      selectedData.area = "";

      if (last.insertedPrefectureQuestion) {
        const nextQuestion = questions[current + 1];
        if (nextQuestion && nextQuestion.key === "prefecture") {
          questions.splice(current + 1, 1);
        }
      }
    }
  }

  showQuestion();
}

function getResult(score) {
  if (score >= 400) {
    return {
      salary: "750〜900万円",
      comment: "管理職・薬剤部長・エリアマネージャーなど、高年収帯を狙える可能性があります。"
    };
  }

  if (score >= 350) {
    return {
      salary: "700〜800万円",
      comment: "管理薬剤師やラウンダー、複数店舗管理などの高年収求人を狙える可能性があります。"
    };
  }

  if (score >= 300) {
    return {
      salary: "620〜750万円",
      comment: "経験や役職を活かして、条件の良い求人を狙いやすい層です。"
    };
  }

  if (score >= 240) {
    return {
      salary: "550〜680万円",
      comment: "中堅薬剤師として、勤務地や勤務形態によって年収アップを狙える可能性があります。"
    };
  }

  if (score >= 180) {
    return {
      salary: "500〜620万円",
      comment: "一般薬剤師として一定の市場価値があります。経験や条件次第でさらに上を目指せます。"
    };
  }

  return {
    salary: "450〜580万円",
    comment: "これから経験を積むことで、今後さらに市場価値を高められる可能性があります。"
  };
}

function showResult() {
  const result = getResult(score);

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("salary").innerText = result.salary;
  document.getElementById("comment").innerText = result.comment;

  document.getElementById("summary-area").innerText =
    selectedData.area || "未選択";

  document.getElementById("summary-prefecture").innerText =
    selectedData.prefecture || "未選択";

  document.getElementById("summary-position").innerText =
    selectedData.position || "未選択";

  window.scrollTo(0, 0);
}

function restartQuiz() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");

  window.scrollTo(0, 0);
}

window.addEventListener("load", preloadImages);
