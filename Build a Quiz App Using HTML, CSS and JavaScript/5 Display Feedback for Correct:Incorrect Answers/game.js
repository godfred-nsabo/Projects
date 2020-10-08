const Question = document.getElementById("Question");
const choices = Array.from( document.getElementsByClassName('choice-text'));
// console.log(choices);
const questionCounterText  = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        Question: "Who invented JavaScript?",
        choice1: "Douglas Crockford",
        choice2: "Sheryl Sandberg",
        choice3: "Brendan Eich",
        choice4: "Steve Jobs",
        answer: 3
    },
    {
        Question: "Which one of these is a JavaScript package manager?",
        choice1: "Node.js",
        choice2: "TypeScript",
        choice3: "npm",
        choice4: "Maven",
        answer: 3
    },
    {
        Question: "Which tool can you use to ensure code quality?",
        choice1: "Angular",
        choice2: "jQuery",
        choice3: "RequireJS",
        choice4: "ESLint",
        answer: 4

    }
];

//CONSTANTS

const CORRECT_BONUS = 10; // WHen you get a question correct who much do u score
const MAX_QUESTIONS = 10; //How many questions does user get before he/she finishes

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    //console.log(availableQuestions);
    getNewQuestions();
};
getNewQuestions = () => {

    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        return window.location.assign("/end.html");

    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    Question.innerText = currentQuestion.Question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion[ 'choice' + number]
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener( 'click', e => {
        //console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //const classToApply = 'incorrect';
        //if (selectedAnswer == currentQuestion.answer){
         //   classToApply = 'correct'; }

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //console.log(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        if (classToApply == 'correct'){
            incrementScore (CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {

            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 1000);

    });
});
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
startGame();