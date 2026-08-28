//DARK & LIGHT MODE//
const knapp = document.getElementById("darkmode");
knapp.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "black";
  document.getElementById("text").style.backgroundColor = "white";
});

const light = document.getElementById("lightmode");

light.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "white";
  document.getElementById("text").style.backgroundColor = "transparent";
});

// POENGTELLER  //
let poeng1 = 0;
let poeng2 = 0;

//SPILLER 1 //
document.getElementById("pluss1").addEventListener("click", function () {
  poeng1++;
  document.getElementById("poeng1").textContent = poeng1;
});

document.getElementById("minus1").addEventListener("click", function () {
  poeng1--;
  document.getElementById("poeng1").textContent = poeng1;
});

document.getElementById("nullstill").addEventListener("click", function () {
  poeng1 = 0;
  document.getElementById("poeng1").textContent = poeng1;
});

//SPILLER 2 //

document.getElementById("pluss2").addEventListener("click", function () {
  poeng2++;
  document.getElementById("poeng2").textContent = poeng2;
});

document.getElementById("minus2").addEventListener("click", function () {
  poeng2--;
  document.getElementById("poeng2").textContent = poeng2;
});

document.getElementById("nullstill2").addEventListener("click", function () {
  poeng2 = 0;
  document.getElementById("poeng2").textContent = poeng2;
});

//TILFELDIG SITAT //

const sitater = [
  "Believe in yourself!",
  "You can do it!",
  "Never give up!",
  "Everything will be okay!",
  "Be yourself!",
];
document.getElementById("sitatKnapp").addEventListener("click", function () {
  const tilfeldig = Math.floor(Math.random() * sitater.length);

  document.getElementById("sitat").textContent = sitater[tilfeldig];
});

//HUMØR STYLING  //

const glad = document.getElementById("glad");
const trist = document.getElementById("trist");
const rolig = document.getElementById("rolig");

glad.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "lightyellow";
  document.getElementById("body").style.color = "orange";
});

trist.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "lightblue";
  document.getElementById("body").style.color = "blue";
});

rolig.addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = "lightgreen";
  document.getElementById("body").style.color = "green";
});
