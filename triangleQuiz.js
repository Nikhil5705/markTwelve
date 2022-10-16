var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-answer-btn");
var output = document.querySelector("#output");  

var correctAnswers = ["80°", "60°", "Equilateral", "90°", "acute"];


    function calculateScore(){
 
    let score = 0;
    let index = 0;
    var formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if (value === correctAnswers[index]){
        score ++;
        }
        index ++;
    }
    output.innerText = "You Scored " + score;
}

submitBtn.addEventListener("click", calculateScore);