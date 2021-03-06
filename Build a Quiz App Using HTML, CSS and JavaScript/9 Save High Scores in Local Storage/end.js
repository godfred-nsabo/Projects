const Username = document.getElementById('Username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
//const button = document.querySelector ('button');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

    //console.log("highScores");
    
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
        score: Math.floor( Math.random() * 100),
		//score: mostRecentScore,
		name: Username.value
    };
    highScores.push(score);
    // highScores.sort((a, b) => a.score - b.score)
    highScores.sort( (x, y) => {
        return y.score - x.score;
    })
    highScore.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/");
    
    //console.log(highScores);
};