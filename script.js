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
createRow(16)

const superContainer = document.querySelector(".superContainer")

const button = document.querySelector("button")

function createNewGrid(a){
  container.remove()
  container = document.createElement("div");
  container.classList.add("container");
  superContainer.appendChild(container)
  createRow(a);
}

button.addEventListener("click", function() {
	let userSelection = prompt()
  while(userSelection > 100 || userSelection < 1 || isNaN(userSelection)){
  userSelection = prompt("Choose a number between 1 and 100!")
  }
  createNewGrid(userSelection)
});