var base = document.querySelector("#base-length");
var height = document.querySelector("#height-length");
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function mulltiplyOfSides(a, b){
  var sidesMultiple = 1/2*a*b;
  return sidesMultiple;
}

function calculateArea(){
   var sidesMultiple = mulltiplyOfSides(Number(base.value), Number(height.value));
   var areaOfTriangle = sidesMultiple;
  console.log(areaOfTriangle);
    output.innerText = "Area of △ is " + areaOfTriangle + " cm²";

}

calculateBtn.addEventListener("click", calculateArea);