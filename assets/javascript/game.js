let barcelona = document.querySelector("#teamone-shoot-button");
let realmadrid = document.querySelector("#teamtwo-shoot-button");
let reset = document.querySelector("#reset-button");
let goals1 = document.querySelector("#teamone-numgoals");
let shotstaken1 = document.querySelector("#teamone-numshots");
let goals2 = document.querySelector("#teamtwo-numgoals");
let shotstaken2 = document.querySelector("#teamtwo-numshots");
let numberofresets = document.querySelector("#num-resets");

barcelona.addEventListener("click", function () {
  let newShotstaken1 = Number(shotstaken1.innerHTML) + 1;
  shotstaken1.innerHTML = newShotstaken1;
  if (Math.random() * 250 < 65) {
    console.log("Goal in the Net!");
    let newGoals1Value = Number(goals1.innerHTML) + 1;
    goals1.innerHTML = newGoals1Value;
  }
});

realmadrid.addEventListener("click", function () {
  let newShotstaken2 = Number(shotstaken2.innerHTML) + 1;
  shotstaken2.innerHTML = newShotstaken2;
  if (Math.random() * 250 < 85) {
    console.log("Goal in the Net!");
    let newGoals2Value = Number(goals2.innerHTML) + 1;
    goals2.innerHTML = newGoals2Value;
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
