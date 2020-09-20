let barcelona = document.querySelector("#teamone-shoot-button");
let realmadrid = document.querySelector("#teamtwo-shoot-button");
let reset = document.querySelector("#reset-button");
let goals1 = document.querySelector("#teamone-numgoals");
let shotstaken1 = document.querySelector("#teamone-numshots");
let goals2 = document.querySelector("#teamtwo-numgoals");
let shotstaken2 = document.querySelector("#teamtwo-numshots");
let numberofresets = document.querySelector("#num-resets");

barcelona.addEventListener("click", function () {
  let newGoals1Value = Number(goals1.innerHTML) + 1;
  goals1.innerHTML = newGoals1Value;
  let newShotstaken1 = Number(shotstaken1.innerHTML) + 1;
  shotstaken1.innerHTML = newShotstaken1;
  if (Math.random() * 250 < 75) {
    console.log("Swish in the Basket!");
    let newShotstaken1 = Number(shotstaken1.innerHTML) + 1;
    shotstaken1.innerHTML = newShotstaken1;
  }
});

realmadrid.addEventListener("click", function () {
  let newGoals2Value = Number(goals2.innerHTML) + 1;
  goals2.innerHTML = newGoals2Value;
  let newShotstaken2 = Number(shotstaken2.innerHTML) + 1;
  shotstaken2.innerHTML = newShotstaken2;
  if (Math.random() * 250 < 75) {
    console.log("Swish in the Basket!");
    let newShotstaken2 = Number(shotstaken2.innerHTML) + 1;
    shotstaken2.innerHTML = newShotstaken2;
  }
});

reset.addEventListener("click", function () {
  let newNumberofresetsValue = Number(numberofresets.innerHTML) + 1;
  numberofresets.innerHTML = newNumberofresetsValue;
  shotstaken1.innerHTML = 0;
  goals1.innerHTML = 0;
  goals2.innerHTML = 0;
  shotstaken2.innerHTML = 0;
});
