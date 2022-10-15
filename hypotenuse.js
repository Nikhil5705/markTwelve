var sides = document.querySelectorAll(".side-length");
var hypotenuseLengthBtn = document.querySelector("#hypotenuse-length-btn");
var output = document.querySelector("#output");

function getSquares(a, b){
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuseLength(){
    var sideOne = sides[0].value;
    var sideTwo = sides[1].value;
    if(sideOne == '' || sideTwo == ''){
    output.innerText = "Please fill all fields";
    }
    else if(Number(sideOne) <= 0 || Number(sideTwo) <= 0){
    output.innerText = "Entered Side must be greater than 0";
    }
    else{
var sumOfSquares = getSquares(Number(sides[0].value), Number(sides[1].value));
var lengthofhypotenuse = Math.sqrt(sumOfSquares);
output.innerText = "Hypotenuse Length is " + lengthofhypotenuse.toFixed(2);
    }
}

hypotenuseLengthBtn.addEventListener("click", calculateHypotenuseLength);