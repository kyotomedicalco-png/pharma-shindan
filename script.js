const questions = [
  {
    text: "年齢を選んでください",
    answers: [
      { text: "20代", score: 20 },
      { text: "30代", score: 35 },
      { text: "40代", score: 45 },
      { text: "50代以上", score: 35 }
    ]
  },
  {
    text: "薬剤師としての経験年数は？",
    answers: [
      { text: "1年未満", score: 10 },
      { text: "1〜3年", score: 20 },
      { text: "4〜9年", score: 35 },
      { text: "10年以上", score: 50 }
    ]
  },
  {
    text: "現在の勤務先は？",
    answers: [
      { text: "調剤薬局", score: 35 },
      { text: "病院", score: 25 },
      { text: "ドラッグストア", score: 45 },
      { text: "企業", score: 50 }
    ]
  },
  {
    text: "現在の役職は？",
    answers: [
      { text: "一般薬剤師", score: 20 },
      { text: "管理薬剤師", score: 55 },
      { text: "ラウンダー", score: 70 },
      { text: "エリアマネージャー", score: 90 }
    ]
  },
  {
    text: "勤務エリアは？",
    answers: [
      { text: "地方", score: 25 },
      { text: "郊外", score: 35 },
      { text: "都市部", score: 45 }
    ]
  },
  {
    text: "転職意欲は？",
    answers: [
      { text: "今は考えていない", score: 10 },
      { text: "良い求人があれば", score: 25 },
      { text: "半年以内に考えたい", score: 35 },
      { text: "すぐにでも考えたい", score: 45 }
    ]
  },
  {
    text: "一番重視する条件は？",
    answers: [
      { text: "年収アップ", score: 45 },
      { text: "ワークライフバランス", score: 30 },
      { text: "キャリアアップ", score: 40 },
      { text: "人間関係・職場環境", score: 25 }
    ]
  }
];

let current = 0;
let score = 0;
let scoreHistory = [];

function startQuiz() {
  current = 0;
  score = 0;
  scoreHistory = [];

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[current];

  document.getElementById("progress-text").innerText =
    "質問 " + (current + 1) + " / " + questions.length;

  document.getElementById("progress-fill").style.width =
    ((current + 1) / questions.length * 100) + "%";

  document.getElementById("question-title").innerText = question.text;

  const answerArea = document.getElementById("answer-area");
  answerArea.innerHTML = "";

  question.answers.forEach(function(answer) {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerText = answer.text;

    button.onclick = function() {
      score += answer.score;
      scoreHistory.push(answer.score);
      current++;

      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answerArea.appendChild(button);
  });

  document.querySelector(".back-button").style.display =
    current === 0 ? "none" : "block";
}

function goBack() {
  if (current > 0) {
    current--;

    const lastScore = scoreHistory.pop();
    if (lastScore) {
      score -= lastScore;
    }

    showQuestion();
  }
}

function getResult(score) {
  if (score >= 360) {
    return {
      salary: "700〜800万円",
      comment: "エリアマネージャーや複数店舗管理など、高年収求人を狙える可能性があります。"
    };
  }

  if (score >= 310) {
    return {
      salary: "650〜750万円",
      comment: "ラウンダーや管理薬剤師として、高年収求人の対象になりやすい層です。"
    };
  }

  if (score >= 250) {
    return {
      salary: "550〜700万円",
      comment: "管理薬剤師や経験豊富な薬剤師として、転職市場で一定の評価が期待できます。"
    };
  }

  if (score >= 200) {
    return {
      salary: "500〜650万円",
      comment: "中堅薬剤師として、条件や勤務地によって年収アップを狙える可能性があります。"
    };
  }

  return {
    salary: "450〜600万円",
    comment: "一般薬剤師としての市場価値があります。経験や条件次第で今後さらに上を目指せます。"
  };
}

function showResult() {
  const result = getResult(score);

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("salary").innerText = result.salary;
  document.getElementById("comment").innerText = result.comment;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
