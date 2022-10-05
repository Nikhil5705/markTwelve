const sides = document.querySelectorAll(".side-length");
const hypotenuseLengthBtn = document.querySelector("#hypotenuse-length-btn");
const output = document.querySelector("#output");

function getSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuseLength(){
const sumOfSquares = getSquares(Number(sides[0].value), Number(sides[1].value));
const lengthofhypotenuse = Math.sqrt(sumOfSquares);
output.innerText = "Hypotenuse Length is " + lengthofhypotenuse;

}

hypotenuseLengthBtn.addEventListener("click", calculateHypotenuseLength);