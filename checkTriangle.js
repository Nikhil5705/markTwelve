const inputs = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateAngles(angle1, angle2, angle3){
const totalSum = angle1 + angle2 + angle3;
return totalSum;
}

function triangle(){
  const totalSum = calculateAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
  if(totalSum === 180){
   output.innerText = "The sum of all 3 Angles form a Triangle";
  }
  else{
    output.innerText = "The sum of all 3 Angles do not form a △";
  }
    
}

checkBtn.addEventListener("click", triangle);