var color1 = document.getElementById ("color1");
var color2 = document.getElementById ("color2");
var css = document.querySelector ("h3"); 
var body = document.getElementById ("gradient");
var btn = document.querySelector ("button");

function addGradient (){
	body.style.background=
	"linear-gradient(to right, " 
	+ color1.value
	 + ", " 
	+ color2.value
	 + ")";

	 css.textContent = body.style.background + ";";
};



color1.addEventListener ("input", addGradient);

color2.addEventListener ("input", addGradient);

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function randomHexColor2() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function changeColor() {
  let hex = randomHexColor();
  let hex2 = randomHexColor2();
  color1.value = hex;
  color2.value = hex2;
  body.style.background=
	"linear-gradient(to right, " 
	+ color1.value
	 + ", " 
	+ color2.value
	 + ")";

	 css.textContent = body.style.background + ";";
}


btn.addEventListener("click", changeColor);