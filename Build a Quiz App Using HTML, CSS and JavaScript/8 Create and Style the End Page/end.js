const Username = document.getElementById('Username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
	console.log("highScores");
// localStorage.setItem("highScores", JSON.stringify([]));
//console.log(JSON.parse(localStorage.getItem("highScores")));

finalScore.innerText = mostRecentScore;

Username.addEventListener( 'keypup', () => {
    console.log(Username.value);
    saveScoreBtn.disabled = !Username.value;
});
saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefualt();
	
	const score = {
		score: mostRecentScore,
		name: Username.value
    };
    highScores.push(score);
	console.log(highScores);
};