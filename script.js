var h1 = 15;
var h2 = 0;
var h3 = 0;
var totalH = 15;
var hGen1 = 0;
var hGenCost = 15;
var hGen2Cost = 100;
var hGen2 = 0;
var hPerSecond = 0;
var h2Unlock = false;
var h3Unlock = false;
var chance = Math.random();
var hGenSecond = setInterval(hGenPlus, 1000);
var check = setInterval(check, 10);
var randomizer = setInterval(randomize, 10);
function randomize() {
  chance = Math.random();
}
function check() {
  if (hGen1 > 0) {
    getTag("HgenT2").style.display = "block";
  }
}
function addH(x) {
  for (y = 0; y < x; y++) {
    if (h2Unlock == false) {
      h1++;
      totalH++;
    } else if (h2Unlock == true) {
      if (chance < 0.999884) {
        h1++;
        totalH++;
      } else if (chance <= 1) {
        h2++;
        totalH++;
      }
    }
  }  
}
function update() {
  getTag("hydrogenNum").innerHTML = h1;
}
function hGenPlus() {
  addH(hPerSecond);
  update();
}
function buyGen(elm, tier) {
  if (elm == "h") {
    if (tier == "1" && h1 >= hGenCost) {
      h1 -= hGenCost;
      hGen1++;
      hPerSecond++;
      hGenCost = Math.round((hGenCost * 2 + 10) / 1.5);
      getTag("HperSecond").innerHTML = hPerSecond + " H/s";
      getTag("hGenNum").innerHTML = hGen1;
      getTag("hGenCost").innerHTML = hGenCost + " H";
      getTag("hGenTotal").innerHTML = "Total: " + hGen1 + " H/s";
      update();
    } else if (tier == 2 && h1 >= hGen2Cost) {
      h1 -= hGen2Cost;
      hGen2Cost = Math.round((hGen2Cost * 3) / 1.7 + 10);
      hGen2 += x;
      hPerSecond += x * 3;
      getTag("HperSecond").innerHTML = hPerSecond + " H/s";
      getTag("hGen2Num").innerHTML = hGen2;
      getTag("hGen2Cost").innerHTML = hGen2Cost + " H";
      getTag("hGen2Total").innerHTML = "Total: " + hGen2 * 3 + " H/s";
      update();
    }
  }
}
function getTag(id) {
  return document.getElementById(id);
}