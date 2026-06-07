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

function startQuiz(){
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  showQuestion();
}

function showQuestion(){
  const question = questions[current];

  document.getElementById("progress-text").innerText =
    "質問 " + (current + 1) + " / " + questions.length;

  document.getElementById("progress-fill").style.width =
    ((current + 1) / questions.length * 100) + "%";

  document.getElementById("question-title").innerText = question.text;

  const answerArea = document.getElementById("answer-area");
  answerArea.innerHTML = "";

  question.answers.forEach(function(answer){
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerText = answer.text;

    button.onclick = function(){
      score += answer.score;
      scoreHistory.push(answer.score);
      current++;

      if(current < questions.length){
        showQuestion();
      }else{
        showResult();
      }
    };

    answerArea.appendChild(button);
  });

  const backButton = document.querySelector(".back-button");
  backButton.style.display = current === 0 ? "none" : "block";
}

function goBack(){
  if(current > 0){
    current--;
    const lastScore = scoreHistory.pop();
    score -= lastScore;
    showQuestion();
  }
}

function showResult(){
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let rank = "";
  let salary = "";
  let comment = "";

  if(score >= 360){
    rank = "Aランク";
    salary = "700〜800万円";
    comment = "エリアマネージャーや複数店舗管理など、高年収求人を狙える可能性があります。";
  }else if(score >= 310){
    rank = "B＋ランク";
    salary = "650〜750万円";
    comment = "ラウンダーや管理薬剤師として、高年収求人の対象になりやすい層です。";
  }else if(score >= 250){
    rank = "Bランク";
    salary = "550〜700万円";
    comment = "管理薬剤師や経験豊富な薬剤師として、転職市場で一定の評価が期待できます。";
  }else if(score >= 200){
    rank = "C＋ランク";
    salary = "500〜650万円";
    comment = "中堅薬剤師として、条件や勤務地によって年収アップを狙える可能性があります。";
  }else{
    rank = "Cランク";
    salary = "450〜600万円";
    comment = "一般薬剤師としての市場価値があります。経験や条件次第で今後さらに上を目指せます。";
  }

  document.getElementById("rank").innerText = rank;
  document.getElementById("salary").innerText = salary;
  document.getElementById("comment").innerText = comment;
}
