// Array with questions and answers for the HTML section
let htmlInfo = [
    {
        question: 'What is HTML?',
        answer1: 'HTML (HyperText Markup Language) is the most basic building block of the Web.'
    },

    {
        question: 'What does HyperText refer to?',
        answer2: '"HyperText" refers to links that connect web pages to one another, either within a single website or between websites.'
    },

    {
        question: 'The HTML <head>',
        answer3: 'The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.'
    }
];

let htmlQuestion = document.getElementById('html-section');

let counter = 0;
htmlQuestion.addEventListener('click', function () {


    // for (let i = 0; i < htmlInfo.length; i++) {

        // if (counter === i) {

            let node = document.createElement("p");
            let text = document.createTextNode(htmlInfo[counter].question);
            node.appendChild(text)
            document.getElementById("div-question").appendChild(node);

            counter = counter + 1;
            console.log(counter);
        // }
       
    // }
});

let htmlAnswer = document.getElementById('answer');

htmlAnswer.addEventListener('click', function () {

})



// console.log(htmlInfo[2].question3);
// console.log(htmlInfo[2].answer3);
