const title = document.getElementById("title");
const kicks = document.getElementById("kick-button");
const punchs = document.getElementById("punch-button");
const groundSmashs = document.getElementById("sheild-button");
const healh = document.getElementById("health");
const armorStatus = document.getElementById("status");
const encounterImg = document.getElementById("encounter-img");
var dinoOne = {
  levels: ["base", "moderatlely hurt", "Enraged", "Dead"],
  levelImages: ["trex.jpg"],
  title: "tRex",
  health: 100,
  armorStatus: 140,
  level: "base"
};
const dinoTwo = {
  levels: ["base", "moderatlely hurt", "Enraged", "Dead"],
  levelImages: [],
  title: "carno",
  health: 120,
  armorStatus: 90,
  level: "base"
};

let groundSmashNum = 15;
let dinoHReset = 100;
let sKick = 5;
function encounterStart() {
  title.innerText = dinoOne.title;
  level.innerText = dinoOne.level;
  health.innerText = dinoOne.health.toString();
  levelInput();

  if (dinoOne.health === 0) {
    punch.disabled = true;
    kick.disabled = true;
    block.disabled = true;
  }
}
function punch() {
  dinoOne.health--;
  levelInput();
  encounterStart();
}

function reset() {
  dinoOne.health = dinoHReset;
  levelInput()
  encounterStart();
}
function kick() {
  dinoOne.health = dinoOne.health - sKick;
  levelInput();
  encounterStart();
}
function groundSmash() {
  dinoOne.health = dinoOne.health - groundSmashNum;
  levelInput();
  encounterStart();
}

function levelInput() {
  if (dinoOne.health <=100) dinoOne.level = "base"
  if (dinoOne.health <= 70) dinoOne.level = "moderately hurt";
  if (dinoOne.health <= 50) dinoOne.level = "maimed";
  if (dinoOne.health <= 30) dinoOne.level = "almost dead";
  if (dinoOne.health <= 0) dinoOne.level = " dead";
  encounterStart();
}



