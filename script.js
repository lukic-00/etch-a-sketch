let container = document.querySelector(".container")

function createRow(a){
for (let i = 0; i < a; i++){
  const row = document.createElement("div")
  row.classList.add("row");
  container.appendChild(row);
    for (let i = 0; i < a; i++){
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    row.appendChild(pixel)
  pixel.onmouseenter = function(){
  pixel.classList.add("hoveredPixel")}
} }
} 
createRow(20)

const superContainer = document.querySelector(".superContainer")

const button = document.querySelector("button")

function createNewGrid(a){
  container.remove()
  container = document.createElement("div");
  container.classList.add("container");
  superContainer.appendChild(container)
  createRow(a);
}

let errorMessage = document.createElement("p")
errorMessage.classList.add("errorMessageClass")
const displayErrorContainer = document.querySelector(".displayErrorContainer")

button.addEventListener("click", function() {
 
  const numberInput = document.getElementById("numberInput")
	let userSelection = numberInput.value
  if(userSelection > 100 || userSelection < 1 || isNaN(userSelection)){

  userSelection = 20
  errorMessage.textContent = "Number must be between 1 and 100, without letters or symbols"
  displayErrorContainer.appendChild(errorMessage)
  } else {
    if(document.querySelector(".errorMessageClass")){
      displayErrorContainer.removeChild(errorMessage)
    }
   
  }

  createNewGrid(userSelection)

});