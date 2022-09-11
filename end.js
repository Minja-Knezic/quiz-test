const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});
saveHighScore = (e) => {
    e.preventDefault();
}