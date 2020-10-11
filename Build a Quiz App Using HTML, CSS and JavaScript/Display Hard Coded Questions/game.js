const Question = document.getElementById("Question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
// console.log(choices);

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
            Question: "Inside which HTML element do we put the JavaScript??",
            choice1: "<script>",
            choice2: "<javascript>",
            choice3: "<js>",
            choice4: "<scripting>",
            answer: 1
        },
        {
            Question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            choice1: "<script href='xxx.js'>",
            choice2: "<script name='xxx.js'>",
            choice3: "<script src='xxx.js'>",
            choice4: "<script file='xxx.js'>",
            answer: 3
        },
        {
            Question: " How do you write 'Hello World' in an alert box?",
            choice1: "msgBox('Hello World');",
            choice2: "alertBox('Hello World');",
            choice3: "msg('Hello World');",
            choice4: "alert('Hello World');",
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

const CORRECT_BONUS = 10; // WHen you get a question correct who much do u score
const MAX_QUESTIONS = 10; //How many questions does user get before he/she finishes

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [... questions];
    console.log(availableQuestions);
    getNewQuestions();
};
getNewQuestions = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    Question.innerText = currentQuestion.Question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
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
        const selectedAnswer = selectedChoice.dataset['number'];

        //const classToApply = 'incorrect';
        //if (selectedAnswer == currentQuestion.answer){
        //   classToApply = 'correct'; }

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //console.log(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {

            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 1000);

    });
});

startGame();