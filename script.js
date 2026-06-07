const questions = [
  {
    question: "年齢を選んでください",
    answers: ["20代", "30代", "40代", "50代以上"]
  },
  {
    question: "薬剤師としての経験年数は？",
    answers: ["1年未満", "1〜3年", "4〜9年", "10年以上"]
  },
  {
    question: "現在の勤務先は？",
    answers: ["調剤薬局", "病院", "ドラッグストア", "企業"]
  },
  {
    question: "現在の役職は？",
    answers: ["一般薬剤師", "主任", "管理薬剤師", "エリアマネージャー以上"]
  },
  {
    question: "勤務エリアは？",
    answers: ["地方", "郊外", "都市部"]
  },
  {
    question: "転職意欲は？",
    answers: ["今は考えていない", "良い求人があれば", "半年以内に考えたい", "すぐにでも考えたい"]
  },
  {
    question: "一番重視する条件は？",
    answers: ["年収アップ", "ワークライフバランス", "キャリアアップ", "人間関係・職場環境"]
  }
];

let currentQuestion = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.body.innerHTML = `
    <div class="app">
      <div class="card">
        <h1>質問${currentQuestion + 1}/7</h1>
        <p>${q.question}</p>
        <div id="answers"></div>
      </div>
    </div>
  `;

  const answersDiv = document.getElementById("answers");

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerText = answer;

    button.onclick = function() {
      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answersDiv.appendChild(button);
  });
}

function showResult() {
  document.body.innerHTML = `
    <div class="app">
      <div class="card result">
        <h1>診断結果</h1>
        <p>あなたの推定市場価値</p>
        <div class="salary">620〜720万円</div>
        <p class="comment">
          経験やスキルが評価されやすい年収帯です。<br>
          条件次第でさらに年収アップも狙えます。
        </p>
        <a href="https://line.me" target="_blank">
          <button class="line-button">LINEで無料相談する</button>
        </a>
      </div>
    </div>
  `;
}
