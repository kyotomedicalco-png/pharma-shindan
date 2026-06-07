const questions = [
  {
    question:"年齢を選んでください",
    answers:[
      { text:"20代", score:20 },
      { text:"30代", score:35 },
      { text:"40代", score:45 },
      { text:"50代以上", score:35 }
    ]
  },
  {
    question:"薬剤師としての経験年数は？",
    answers:[
      { text:"1年未満", score:10 },
      { text:"1〜3年", score:20 },
      { text:"4〜9年", score:35 },
      { text:"10年以上", score:50 }
    ]
  },
  {
    question:"現在の勤務先は？",
    answers:[
      { text:"調剤薬局", score:35 },
      { text:"病院", score:25 },
      { text:"ドラッグストア", score:45 },
      { text:"企業", score:50 }
    ]
  },
  {
    question:"現在の役職は？",
    answers:[
      { text:"一般薬剤師", score:20 },
      { text:"管理薬剤師", score:55 },
      { text:"ラウンダー", score:70 },
      { text:"エリアマネージャー", score:90 }
    ]
  },
  {
    question:"勤務エリアは？",
    answers:[
      { text:"地方", score:25 },
      { text:"郊外", score:35 },
      { text:"都市部", score:45 }
    ]
  },
  {
    question:"転職意欲は？",
    answers:[
      { text:"今は考えていない", score:10 },
      { text:"良い求人があれば", score:25 },
      { text:"半年以内に考えたい", score:35 },
      { text:"すぐにでも考えたい", score:45 }
    ]
  },
  {
    question:"一番重視する条件は？",
    answers:[
      { text:"年収アップ", score:45 },
      { text:"ワークライフバランス", score:30 },
      { text:"キャリアアップ", score:40 },
      { text:"人間関係・職場環境", score:25 }
    ]
  }
];

let currentQuestion = 0;
let totalScore = 0;
let history = [];

function startQuiz(){
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion(){
  const q = questions[currentQuestion];

  document.getElementById("progress-text").innerText =
    `質問 ${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerText = answer.text;

    button.onclick = () => {
      history.push(answer.score);
      totalScore += answer.score;
      currentQuestion++;

      if(currentQuestion < questions.length){
        showQuestion();
      }else{
        showResult();
      }
    };

    answersDiv.appendChild(button);
  });

  document.getElementById("back-button").style.display =
    currentQuestion === 0 ? "none" : "block";
}

function goBack(){
  if(currentQuestion > 0){
    currentQuestion--;
    const lastScore = history.pop();
    totalScore -= lastScore;
    showQuestion();
  }
}

function showResult(){
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  let rank = "";
  let salary = "";
  let comment = "";
  let jobs = [];

  if(totalScore >= 360){
    rank = "Aランク";
    salary = "700〜800万円";
    comment = "エリアマネージャーや複数店舗管理など、高年収求人を狙える可能性があります。";
    jobs = ["エリアマネージャー", "複数店舗管理", "高年収調剤薬局", "マネジメント求人"];
  }else if(totalScore >= 310){
    rank = "B＋ランク";
    salary = "650〜750万円";
    comment = "ラウンダーや管理薬剤師として、高年収求人の対象になりやすい層です。";
    jobs = ["ラウンダー", "管理薬剤師", "高年収求人", "在宅強化薬局"];
  }else if(totalScore >= 250){
    rank = "Bランク";
    salary = "550〜700万円";
    comment = "管理薬剤師や経験豊富な薬剤師として、転職市場で一定の評価が期待できます。";
    jobs = ["管理薬剤師", "調剤薬局", "ドラッグストア", "年収アップ求人"];
  }else if(totalScore >= 200){
    rank = "C＋ランク";
    salary = "500〜650万円";
    comment = "中堅薬剤師として、条件や勤務地によって年収アップを狙える可能性があります。";
    jobs = ["中堅薬剤師求人", "働き方改善求人", "地域密着薬局"];
  }else{
    rank = "Cランク";
    salary = "450〜600万円";
    comment = "一般薬剤師としての市場価値があります。経験や条件次第で今後さらに上を目指せます。";
    jobs = ["一般薬剤師求人", "未経験相談可", "教育体制あり", "働きやすさ重視求人"];
  }

  document.getElementById("rank-result").innerText = rank;
  document.getElementById("salary-result").innerText = salary;
  document.getElementById("comment").innerText = comment;

  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  jobs.forEach(job => {
    const li = document.createElement("li");
    li.innerText = job;
    jobList.appendChild(li);
  });
}
