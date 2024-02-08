var css = document.querySelector("h3");
var color1 = document.querySelector(".colr1");
var color2 = document.querySelector(".colr2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button-gen");


// there is an event called input

// DRY (DO NOT REPEAT YOURSELF) implementation

function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value + ", "
  + color2.value + ")";
  css.textContent = body.style.background + ";";
  css.classList.add("set-border");
}

function generateRandomColor() {
  // Generate random color with hex format
  return  color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function genBackground() {
  // get two random rgb values
  color1.value = generateRandomColor()
  color2.value = generateRandomColor();
  setGradient();
}

// we can also do it this way oninput="setGradient()" on click function
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", genBackground);
