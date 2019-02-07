let arrayInfo = [
    {
        question: 'What is HTML?',
        tag: 'HTML'
    },

    {
        question: 'What does HyperText refer to?',
        tag: 'HTML'
    },

    {
        question: 'The HTML <head>',
        tag: 'HTML'
    },

    // {
    //     question: 'What is CSS?',
    //     answer: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
    //     tag: 'CSS'
    // },

    // {
    //     question: 'What is a CCS Selector?',
    //     answer: 'A CSS Selector is the HTML element name at the start of the rule set. It selects the element(s) to be styled.',
    //     tag: 'CSS'
    // },

    // {
    //     question: 'What is a CSS Declaration?',
    //     answer: 'A single rule like color: red; specifying which of the element\'s properties you want to style.',
    //     tag: 'CSS'
    // }
];

let answers = [
    {
        answer: ['HTML (HyperText Markup Language) is the most basic building block of the Web.', 'test1',
            'another test1', 'final test1'],
        correctAnswerIndex: 0
    },

    {
        answer: ['HyperText" refers to links that connect web pages to one another, either within a single website or between websites.', 'test2',
            'another test2', 'final test2'],
        correctAnswerIndex: 1
    },

    {
        answer: ['The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheet', 'test3',
            'another test3', 'final test3'],
        correctAnswerIndex: 2
    }
];

// grabs the HTML button from the DOM
// let htmlQuestion = document.getElementById('html-section');

let countQuestion = 0;
let countAnswer = -1;
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

    // resetting the divs everytime some clicks the button
    document.getElementById("div-question").innerHTML = "";
    document.getElementById("div-answer").innerHTML = "";

    // creating a message when there are not any question left
    if (countQuestion === arrayInfo.length) {
        const message = document.createElement('p');
        const messageText = document.createTextNode('Thank you for participating!')
        message.appendChild(messageText);
        document.getElementById("div-question").appendChild(message);
    }

    // adding one question at the time when someone clicks "Next Question"
    if (countQuestion < arrayInfo.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(arrayInfo[countQuestion].question);
        node.appendChild(text);
        document.getElementById("div-question").appendChild(node);

        // for loop that creates a button for every possible answer for each question
        for (let j = 0; j < 4; j++) {

            let node = document.createElement("a");
            node.setAttribute('href', '#');
            node.setAttribute('class', 'button-answer')
            node.setAttribute('data-index', j)
            let text = document.createTextNode(answers[countQuestion].answer[j]);
            node.appendChild(text);
            document.getElementById("div-answer").appendChild(node);

        }
        // coiunter to move through the indexes of the arrays "questions" and "answers"
        countQuestion++;
        countAnswer++;
    }
})


let divAnswer = document.getElementById('div-answer');
divAnswer.addEventListener('click', function (evt) {

    if (evt.target.getAttribute('data-index') == answers[countAnswer].correctAnswerIndex) {
        evt.target.style.backgroundColor = 'green';
        console.log('correct');

    }
    else {
        console.log('wrong');
        evt.target.style.backgroundColor = 'red';
    }

})




// grabs the "Show Answer" buttom from the DOM
// let htmlAnswer = document.getElementById('answer');

// let countAnswer = 0;

// show the next answer when "Show Answer" buttom is click
// htmlAnswer.addEventListener('click', function () {

//     document.getElementById("div-answer").innerHTML = "";

//     if (countAnswer === arrayInfo.length) {

//         const message = document.createElement('p');
//         const messageText = document.createTextNode('Thank you for participating!')
//         message.appendChild(messageText);
//         document.getElementById("div-answer").appendChild(message);
//     }

//     if (countAnswer < arrayInfo.length) {

//         let node = document.createElement("p");
//         let text = document.createTextNode(arrayInfo[countAnswer].answer);
//         node.appendChild(text);
//         document.getElementById("div-answer").appendChild(node);

//         countAnswer++;
//     }
// });

// let htmlQuestions = arrayInfo.filter(list => {
//     return list.tag === 'HTML';
// })

