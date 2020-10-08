const Question = document.getElementById("Question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


/*if (!("scramble" in Array.prototype)) {
    Object.defineProperty(Array.prototype, "scramble", {
        enumerable: false,
        value: function () {
            var o, i, ln = this.length;
            while (ln--) {
                i = Math.random() * (ln + 1) | 0;
                o = this[ln];
                this[ln] = this[i];
                this[i] = o;
            }
            return this;
        }
    });
};*/
//function shuffle () {
    
let questions = [];

fetch("Question.json").then(response => {
    //console.log(response);
    return response.json();
}).then(loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions;

    startGame();
});

/*questions.forEach(q => q.choices.scramble());
//console.log(questions.choices);
for (var setIndex = 0; setIndex < questionSets.length; ++setIndex) {
    var questionSet = questionSets[setIndex];
    var questionIndex = Math.floor(Math.random() * questionSet.length);
    var question = questionSet[questionIndex];
    var selector = '#questions li:nth-child(' + (setIndex + 1).toString() + ')';
    //var setId = 'set_' + (setIndex + 1).toString();
    document.querySelector(selector).innerHTML = question;
    //document.getElementById(setId).innerHTML = question;
}
};*/

//CONSTANTS

const CORRECT_BONUS = 10; // WHen you get a question correct who much do u score
const MAX_QUESTIONS = 10; //How many questions does user get before he/she finishes

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    getNewQuestions();
};
getNewQuestions = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("/8 Create and Style the End Page/end.html");

    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // update progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    //console.log(( questionCounter/ MAX_QUESTIONS) * 100);


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    Question.innerText = currentQuestion.Question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        //console.log(e.target);
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //const classToApply = 'incorrect';
        //if (selectedAnswer == currentQuestion.answer){
        //   classToApply = 'correct'; }

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        //console.log(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {

            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 1000);

    });
});
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
