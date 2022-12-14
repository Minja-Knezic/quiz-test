const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem("HighScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem('highScores',JSON.stringify(highScores));
    window.location.assign("index.html")
}
