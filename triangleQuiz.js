const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");  

const correctAnswer = ["80°", "60°", "180", "90°", "acute"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const result = new FormData(quizForm);
    for(let value of result.values()){
        if (value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "You Scored " + score;
}

submitBtn.addEventListener("click", calculateScore);