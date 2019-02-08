// Array with questions
let questions = [
    {
        question: 'What is HTML?'
    },
    {
        question: 'What does HyperText refer to?'
    },
    {
        question: 'The HTML <head>'
    },
    {
        question: 'What is CSS?'
    },
    {
        question: 'What is a CCS Selector?'
    },
    {
        question: 'What is a CSS Declaration?'
    },
    {
        question: 'JavaScript (JS)'
    },
    {
        question: 'Variables'
    },
    {
        question: 'Functions'
    }
];

// array with answers
let answers = [
    {
        answer: ['HTML (HyperText Markup Language) is the most basic building block of the Web.', 'test1',
            'another test1', 'final test1'],
        correctAnswerIndex: 0
    },
    {
        answer: ['test2', 'HyperText" refers to links that connect web pages to one another, either within a single website or between websites.', 'another test2', 'final test2'],
        correctAnswerIndex: 1
    },
    {
        answer: ['test3', 'another test3', 'The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheet', 'final test3'],
        correctAnswerIndex: 2
    },
    {
        answer: ['test 1', 'test 2', 'test 3', 'Cascading Style Sheets (CSS)'],
        correctAnswerIndex: 3
    },
    {
        answer: ['A CSS Selector selects the element(s) to be styled.', 'test 1', 'test 2', 'test 3'],
        correctAnswerIndex: 0
    },
    {
        answer: ['test 1', 'A single rule like color: red; specifying which of the element\'s properties you want to style.', 'test 2', 'test 3'],
        correctAnswerIndex: 1
    },
    {
        answer: ['test 1', 'test 2', 'Scripting language for Web pages', 'test 3'],
        correctAnswerIndex: 2
    },
    {
        answer: ['test 1', 'test 2', 'test 3', 'Variables are containers that you can store values in'],
        correctAnswerIndex: 3
    },
    {
        answer: ['Functions are a way of packaging functionality that you wish to reuse', 'test 1', 'test 2', 'test 3'],
        correctAnswerIndex: 0
    }

];

let countQuestion = 0;
let countAnswer = -1;
let correctAnswers = 0


// resetting the divs everytime someone clicks the button
function clearDivs() {

    document.getElementById("div-question").innerHTML = "";
    document.getElementById("div-answer").innerHTML = "";
}

// creating a message that displays "Thank you for participating!" when the questions are finished.
function questionMessage() {

    if (countQuestion === questions.length) {
        const message = document.createElement('p');
        const messageText = document.createTextNode('Thank you for participating!')
        message.appendChild(messageText);
        document.getElementById("div-question").appendChild(message);
    }
}

function answerMessage(){

    if (countQuestion === answers.length) {
        const message = document.createElement('p');
        const messageText = document.createTextNode(`You answered ${correctAnswers} out of ${countQuestion} questions correctly`)
        message.appendChild(messageText);
        document.getElementById("div-answer").appendChild(message);

        // alertMessage()
    }

}

// adding one question at the time when someone clicks "Next Question"
function addQuestions() {

    if (countQuestion < questions.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(questions[countQuestion].question);
        node.appendChild(text);
        document.getElementById("div-question").appendChild(node);
    }
}

// function that creates a button for every possible answer for each question
function addAnswers() {

    for (let j = 0; j < 4; j++) {

        let node = document.createElement("a");
        node.setAttribute('href', '#');
        node.setAttribute('class', 'button-answer')
        node.setAttribute('data-index', j)
        let text = document.createTextNode(answers[countQuestion].answer[j]);
        node.appendChild(text);
        document.getElementById("div-answer").appendChild(node);

    }
}

// function that avoids clicking when an answer is selected
function avoidClick() {

    let answerDom = document.querySelectorAll('.button-answer');



    // loop through answer elements
    for (let i = 0; i < answerDom.length; i++) {
        const answer = answerDom[i];
        answer.style.pointerEvents = 'none';
    }
}

// Display questions when the "Next Button" is clicked
let question = document.getElementById('question');
question.addEventListener('click', function () {

    clearDivs();

    questionMessage();

    addQuestions();

    answerMessage()

    addAnswers();

    // counter to move through the indexes of the arrays "questions" and "answers"
    countQuestion++;
    countAnswer++;

})

// grabbing the div-answer object from the DOM
let divAnswer = document.getElementById('div-answer');
divAnswer.addEventListener('click', function (evt) {


    if (evt.target.classList.contains('button-answer')) {
        // mark the current answer with a background color of green and keeps track of the correct answer
        if (evt.target.getAttribute('data-index') == answers[countAnswer].correctAnswerIndex) {
            evt.target.style.backgroundColor = 'green';
            correctAnswers++;
        }

        // mark the wrong answer with a background color of red
        else if (evt.target.getAttribute('data-index') != answers[countAnswer].correctAnswerIndex) {
            evt.target.style.backgroundColor = 'red';

        }
        avoidClick();
    }


})