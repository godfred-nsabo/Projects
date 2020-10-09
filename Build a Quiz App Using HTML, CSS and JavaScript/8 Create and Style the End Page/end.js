const Username = document.getElementById('Username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
//const button = document.querySelector ('button');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;


Username.addEventListener( 'keypup', () => {
    console.log(Username.value);
    saveScoreBtn.disabled = !Username.value;
});
saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefualt();
    
};