var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

css.textContent =  "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0) )" ;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function gererateColors(){
return "#".concat(Math.floor(Math.random()*16777215).toString(16));
}

function randomiser(){
	body.style.background = 
	"linear-gradient(to right, " + gererateColors() + ", " + gererateColors() + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomiser);