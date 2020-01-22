var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// body.style.background = "blue"; this sytax to change CSS properties "element".style."property" = "whatever you want";

function gradientChanger() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColor() {
  var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  return newColor;
}

function randomGradient() {
  color1.value = randomColor();
  color2.value = randomColor();
  gradientChanger();
}

color1.addEventListener("input", gradientChanger);
color2.addEventListener("input", gradientChanger);
random.addEventListener("click", randomGradient);
