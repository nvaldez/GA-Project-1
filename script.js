let arrayInfo = [
    {
        question: 'What is HTML?',
        answer: 'HTML (HyperText Markup Language) is the most basic building block of the Web.',
        tag: 'HTML'
    },

    {
        question: 'What does HyperText refer to?',
        answer: 'HyperText" refers to links that connect web pages to one another, either within a single website or between websites.',
        tag: 'HTML'
    },

    {
        question: 'The HTML <head>',
        answer: 'The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.',
        tag: 'HTML'
    },

    {
        question: 'What is CSS?',
        answer: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
        tag: 'CSS'
    },

    {
        question: 'What is a CCS Selector?',
        answer: 'A CSS Selector is the HTML element name at the start of the rule set. It selects the element(s) to be styled.',
        tag: 'CSS'
    },

    {
        question: 'What is a CSS Declaration?',
        answer: 'A single rule like color: red; specifying which of the element\'s properties you want to style.',
        tag: 'CSS'
    }
];

// grabs the HTML button from the DOM
// let htmlQuestion = document.getElementById('html-section');

let countQuestion = 0;
// let instruction = 1;

// add instructions when the "HTML" buttom is clicked
// htmlQuestion.addEventListener('click', function () {

//     if (instruction === 1) {

//         let node = document.createElement("p");
//         let text = document.createTextNode('Please click on \"Next Question\" to begin.')
//         node.appendChild(text)
//         document.getElementById("div-question").appendChild(node);
//         instruction++;
//     }
// });

// show the next question when "Next Question" buttom is click
let question = document.getElementById('question');
question.addEventListener('click', function () {

    document.getElementById("div-question").innerHTML = "";

    if (countQuestion === arrayInfo.length) {

        const message = document.createElement('p');
        const messageText = document.createTextNode('Thank you for participating!')
        message.appendChild(messageText);
        document.getElementById("div-question").appendChild(message);
    }

    if (countQuestion < arrayInfo.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(arrayInfo[countQuestion].question);
        node.appendChild(text);
        document.getElementById("div-question").appendChild(node);

        countQuestion++;
    }
})

// grabs the "Show Answer" buttom from the DOM
let htmlAnswer = document.getElementById('answer');

let countAnswer = 0;

// show the next answer when "Show Answer" buttom is click
htmlAnswer.addEventListener('click', function () {

    document.getElementById("div-answer").innerHTML = "";

    if (countAnswer === arrayInfo.length) {

        const message = document.createElement('p');
        const messageText = document.createTextNode('Thank you for participating!')
        message.appendChild(messageText);
        document.getElementById("div-answer").appendChild(message);
    }

    if (countAnswer < arrayInfo.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(arrayInfo[countAnswer].answer);
        node.appendChild(text);
        document.getElementById("div-answer").appendChild(node);

        countAnswer++;
    }
});

let htmlQuestions = arrayInfo.filter(list => {
    return list.tag === 'HTML';
})


