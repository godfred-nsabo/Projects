const Question = document.getElementById("Question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
//console.log(choices)
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");

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
        },
        {
            Question: "What is the full form of IP?",
            choice1: "Internet Provider",
            choice2: "Internet Port",
            choice3: "Internet Protocol",
            choice4: "Other",
            answer: 4
        },
        {
            Question: "Who is the founder of Microsoft?",
            choice1: "Bill Gates",
            choice2: "Steve Jobs",
            choice3: "Steve Wozniak",
            choice4: "Martin Shaba",
            answer: 1
        },
        {
            Question: "What was your first dream?",
            choice1: "8 bits",
            choice2: "64 bits",
            choice3: "1024 bits",
            choice4: "16 bits",
            answer: 1
        },
        {
            Question: "What does CC mean in emails?",
            choice1: "Carbon Copy",
            choice2: "Creative Commons",
            choice3: "Copy Carbon",
            choice4: "Create Copy",
            answer: 1
        }
];

//CONSTANTS

const { MAX_QUESTIONS, CORRECT_BONUS } = newFunction(); // How many questions does user get before he/she finishes

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    getNewQuestions();
};

//const newLocal = questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
getNewQuestions = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    
    // update progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    console.log(( questionCounter/ MAX_QUESTIONS) * 100);


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    Question.innerText = currentQuestion.Question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    const newLocal = acceptingAnswers = false;
    choice.addEventListener('click', e => {
        //console.log(e.target);
        if (!acceptingAnswers) return;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //const classToApply = 'incorrect';
        //if (selectedAnswer == currentQuestion.answer){
          // classToApply = 'correct'; }

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        //console.log(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        
        if (classToApply == "correct") {
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

startGame();


function newFunction() {
    const CORRECT_BONUS = 10; // WHen you get a question correct who much do u score
    const MAX_QUESTIONS = 7; // How many questions does user get before he/she finishes
    return { MAX_QUESTIONS, CORRECT_BONUS };
}
//function newFunction() {
  //  return document.getElementById("progressBarFull");
//}
