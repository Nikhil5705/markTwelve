var base = document.querySelector("#base-length");
var height = document.querySelector("#height-length");
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function mulltiplyOfSides(a, b){
  var sidesMultiple = 1/2*a*b;
  return sidesMultiple;
}

function calculateArea(){
  // if(base == '' || height ==''){
  //    output.innerText = "Enter all fields";
  // }
  if(base > 0 && height > 0){
   var sidesMultiple = mulltiplyOfSides(Number(base.value), Number(height.value));
   var areaOfTriangle = sidesMultiple;
  console.log(areaOfTriangle);
    output.innerText = "Area of △ is " + areaOfTriangle + " cm²";
  }
  else{
    output.innerText = "Please enter a Value greater than 0";
 }
 
}

calculateBtn.addEventListener("click", calculateArea);