var inputs = document.querySelectorAll(".input-angle");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

function calculateAngles(angle1, angle2, angle3){
var totalSum = angle1 + angle2 + angle3;
return totalSum;
}

function triangle(){
  var angle1 = inputs[0].value;
  var angle2 = inputs[1].value;
  var angle3 = inputs[2].value;
  if(angle1 == '' || angle2 == '' || angle3 == ''){
    output.innerText = "Please enter all Angles";
  }
  else if(Number(angle1) <= 0 || Number(angle2) <= 0 || Number(angle3) <= 0){
    output.innerText = "Entered Angle Negative or 0"
  }
  else{
  var totalSum = calculateAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
  if(totalSum === 180){
   output.innerText = "The sum of all 3 Angles form a Triangle";
  }
  else{
    output.innerText = "The sum of all 3 Angles do not form a △";
  }
     }
}

checkBtn.addEventListener("click", triangle);