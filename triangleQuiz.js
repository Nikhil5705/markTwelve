var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-answer-btn");
var output = document.querySelector("#output");  

var correctAnswer = ["80°", "60°", "180", "90°", "acute"];

function calculateScore(){
    let score = 0;
    let index = 0;
    var result = new FormData(quizForm);
    for(let value of result.values()){
        console.log("value"+value);
        console.log("correctAnswer[index]"+correctAnswer[index]);
        if (value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "You Scored " + score;
}

submitBtn.addEventListener("click", calculateScore);