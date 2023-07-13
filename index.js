const sizingSliderText = document.querySelector("#sizingSlider-text")
const sizeSlider = document.querySelector("#sizeSlider")
const colorMode = document.querySelector("#color-mode")
const erase = document.querySelector("#erase")
const reset = document.querySelector("#reset")
const greyMode = document.querySelector("#grey-mode")
let color = ""


function squares0nSketchPad(size) {
  let sketchPad = document.querySelector(".sketch-pad");
  sketchPad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  let total = size * size
  for (let i = 0; i < total; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover",drawColor);
    square.style.backgroundColor = "#FAF0D7";
    sketchPad.append(square);
  }
}
squares0nSketchPad(16);

sizeSlider.addEventListener("click", function (e) {
  let squareSize = e.target.value;
  sizingSliderText.textContent = `${squareSize}x${squareSize}`;
})

function drawColor(){
  this.style.backgroundColor = color;
}

function colorChoice(choice){
  color = choice;
}

erase.addEventListener("click",colorChoice("#FAF0D7"));
greyMode.addEventListener("click",colorChoice("#424242"));
colorMode.addEventListener("click",colorChoice("red"));

















/*
function color(){
  this.style.backgroundColor = color;
}
 function changeColor(choice){
  color = choice;
}

greyMode.addEventListener("click",color());
colorMode.addEventListener("click",color("red"));
greyMode.addEventListener("click",color());
*/
