var hydrogen = 15;
var h2 = 0;
var totalH = 15;
var hGen1 = 0;
var hGenCost = 15;
var hGenIICost = 100;
var hGenII = 0;
var hPerSecond = 0;
var h2Unlock = false;
var h3Unlock = false;
var chance = Math.random();
var hGenSecond = setInterval(hGenPlus, 1000);
var check = setInterval (check, 10);
function check() {
  if (hGen1 > 0) {
    getTag("HgenT2").style.display = "block";
  }
}
function addH(x) {
  for (y = 0; y < x; y++) {
    if (h2Unlock == false) {
      hydrogen++;
      totalH++;
    } else if (h2Unlock == true) {
      if (chance < 0.999884) {
        hydrogen++;
        totalH++;
      } else if (chance <= 1) {
        h2++;
      }
    }
  }  
}
function update() {
  getTag("hydrogenNum").innerHTML = hydrogen;
}
function hGenPlus() {
  addH(hPerSecond);
  update();
}
function buyGen(elm, tier) {
  if (elm == "h") {
    if (tier == "1" && hydrogen >= hGenCost) {
      hydrogen = hydrogen - hGenCost;
      hGen1++;
      hPerSecond++;
      hGenCost = Math.round((hGenCost * 2 + 10) / 1.5);
      getTag("HperSecond").innerHTML = hPerSecond + " H/s";
      getTag("hGenNum").innerHTML = hGen1;
      getTag("hGenCost").innerHTML = hGenCost + " H";
      getTag("hGenTotal").innerHTML = "Total: " + hGen1 + " H/s";
      update();
    } else if (tier == 2 && hydrogen >= hGenIICost) {
      hydrogen -= hGenIICost;
      hGenIICost = Math.round((hGenIICost * 3) / 1.7 + 10);
      hGenII += x;
      hPerSecond += x * 3;
      getTag("HperSecond").innerHTML = hPerSecond + " H/s";
      getTag("hGenIINum").innerHTML = hGenII;
      getTag("hGenIICost").innerHTML = hGenIICost + " H";
      getTag("hGenIITotal").innerHTML = "Total: " + hGenII * 3 + " H/s";
      update();
    }
  }
}
function getTag(id) {
  return document.getElementById(id);
}