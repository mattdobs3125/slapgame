const title = document.getElementById("title");
const kicks = document.getElementById("kick-button");
const punchs = document.getElementById("punch-button");
const groundSmashs = document.getElementById("sheild-button");
const healh = document.getElementById("health");
const armorStatus = document.getElementById("status");
const encounterImg = document.getElementById("encounter-img");
const ironGloves = document.getElementById("iron-glove")
var dinoOne = {
  levels: ["base", "moderatlely hurt", "Enraged", "Dead"],
  levelImages: ["trex.jpg"],
  title: "tRex",
  health: 100,
  armorStatus: 140,
  level: "base",
  items:[],
};

let items = {
  ironGlove:{
    name :"glove",
    modifier: .4,
    description: "look a cool glove"
  },
  strengthPotion:{
    name : "strength",
    modifier: 1,
    description: "strength pot"
  },
  electricity:{
    name :"Electricity",
    modifier: 3,
    description:"electrify your hits"

  }
}

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
  if (dinoOne.health == 0) {
    punch.disabled = true;
    kick.disabled = true;
    block.disabled = true;
  }
 
  

}
// fuction 
function addHandMods(){
  let total = 1
  dinoOne.items.forEach(item => {
    total+= item.modifier
  });
  return total;
}
function punch() {
  dinoOne.health -= 1 * addHandMods();
  levelInput();
  encounterStart();
}
function electrify(){
  dinoOne.items.push(items.electricity)
}
function ironGlove (){
 dinoOne.items.push(items.ironGlove)
}
function potion(){
  dinoOne.items.push(items.strengthPotion)
}


function reset() {
  dinoOne.health = dinoHReset;
  dinoOne.items = []
  levelInput()
  encounterStart();
}
function kick() {
 dinoOne.health -= sKick * addHandMods();
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



