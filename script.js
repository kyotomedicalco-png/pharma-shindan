function startQuiz() {
  document.getElementById("start-screen").innerHTML = `
    <div class="card">
      <h1>質問1/7</h1>
      <p>年齢を選んでください</p>

      <button class="answer-button">20代</button>
      <button class="answer-button">30代</button>
      <button class="answer-button">40代</button>
      <button class="answer-button">50代以上</button>
    </div>
  `;
}
