// Array with questions and answers for the HTML section
// let arrayInfo = [
//     {
//         question: 'What is HTML?',
//         answer: 'HTML (HyperText Markup Language) is the most basic building block of the Web.',
//         tag: 'HTML'
//     },

//     {
//         question: 'What does HyperText refer to?',
//         answer: 'HyperText" refers to links that connect web pages to one another, either within a single website or between websites.',
//         tag: 'HTML'
//     },

//     {
//         question: 'The HTML <head>',
//         answer: 'The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.',
//         tag: 'HTML'
//     },

//     {
//         question: 'What is CSS?',
//         answer: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
//         tag: 'CSS'
//     },

//     {
//         question: 'What is a CCS Selector?',
//         answer: 'A CSS Selector is the HTML element name at the start of the rule set. It selects the element(s) to be styled.',
//         tag: 'CSS'
//     },

//     {
//         question: 'What is a CSS Declaration?',
//         answer: 'A single rule like color: red; specifying which of the element\'s properties you want to style.',
//         tag: 'CSS'
//     }
// ];

// let cssInfo = [
//     {
//         question: 'Q1. What is CSS?',
//         answer: 'A1. Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
//         tag: 'CSS'
//     },

//     {
//         question: 'Q2. What is a CCS Selector?',
//         answer: 'A2. A CSS Selector is the HTML element name at the start of the rule set. It selects the element(s) to be styled.',
//         tag: 'CSS'
//     },

//     {
//         question: 'Q3. What is a CSS Declaration?',
//         answer: 'A3. A single rule like color: red; specifying which of the element\'s properties you want to style.',
//         tag: 'CSS'
//     }
// ];


// grabs the CSS button from the DOM
// let cssQuestion = document.getElementById('css-section');


// let instructionCSS = 1;

// add instructions when the "HTML" buttom is clicked
// cssQuestion.addEventListener('click', function () {

//     if (instructionCSS === 1) {

//         let node = document.createElement("p");
//         let text = document.createTextNode('Please click on \"Next Question\" to begin.')
//         node.appendChild(text)
//         document.getElementById("div-question").appendChild(node);
//         instructionCSS++;
//     }
// });

// show the next question when "Next Question" buttom is click
// let questionCSS = document.getElementById('question');

// let counterQuestionCSS = 0;
// question.addEventListener('click', function(){

//      if (counterQuestionCSS < cssInfo.length) {

//         let node = document.createElement("p");
//         let text = document.createTextNode(cssInfo[counterQuestionCSS].question);
//         node.appendChild(text)
//         document.getElementById("div-question").appendChild(node);

//         counterQuestionCSS++;
//     }

// })

// grabs the "Show Answer" buttom from the DOM
// let cssAnswer = document.getElementById('answer');

// let cssCounterAnswer = 0;

// show the next answer when "Show Answer" buttom is click
// cssAnswer.addEventListener('click', function () {

//     if (cssCounterAnswer < htmlInfo.length) {

//         let node = document.createElement("p");
//         let text = document.createTextNode(htmlInfo[cssCounterAnswer].answer);
//         node.appendChild(text)
//         document.getElementById("div-answer").appendChild(node);

//         cssCounterAnswer++;    
// }
// });