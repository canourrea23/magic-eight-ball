function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
lastIndex = -1;


function answerQuestion() {
    let answers = [
        "Chances are good.", 
        "Future uncertain.", 
        "Definitely yes.",
        "If you try hard.",
        "Ask again later."
    ];

    let index = 0;
    do {
    index = getRandomIntInclusive(0, answers.length);
    } while (index == lastIndex);
    console.log(index)
    lastIndex = index;
    makeAnswerAppear(answers[index]);

    makeBlack();
};
// Get the input field
let enter = document.getElementById("question");
let btn = document.querySelector('enter')

// Execute a function when the user releases a key on the keyboard
enter.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || btn) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    answerQuestion();
    // document.getElementById("question").click();
    }
});

function makeBlack(){
let liquid = document.getElementById('window')
    liquid.style.background = 'black'
}