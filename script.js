
// grabs the HTML button from the DOM
let htmlQuestion = document.getElementById('html-section');

let counterQuestion = 0;
let instruction = 1;

// add instructions when the "HTML" buttom is clicked
htmlQuestion.addEventListener('click', function () {

    if (instruction === 1) {

        let node = document.createElement("p");
        let text = document.createTextNode('Please click on next question to begin.')
        node.appendChild(text)
        document.getElementById("div-question").appendChild(node);
        instruction++;
    }
});

// show the next question when "Next Question" buttom is click
let question = document.getElementById('question');
question.addEventListener('click', function(){

     if (counterQuestion < htmlInfo.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(htmlInfo[counterQuestion].question);
        node.appendChild(text)
        document.getElementById("div-question").appendChild(node);

        counterQuestion++;
    }

})

// grabs the "Show Answer" buttom from the DOM
let htmlAnswer = document.getElementById('answer');

let counterAnswer = 0;

// show the next answer when "Show Answer" buttom is click
htmlAnswer.addEventListener('click', function () {

    if (counterAnswer < htmlInfo.length) {

        let node = document.createElement("p");
        let text = document.createTextNode(htmlInfo[counterAnswer].answer);
        node.appendChild(text)
        document.getElementById("div-answer").appendChild(node);

        counterAnswer++;    
}
});
