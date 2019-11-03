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
var hGenSecond = setInterval (hGenPlus, 1000);
var check = setInterval (check, 10);
function check() {
  if (hGen1 > 0) {
    document.getElementById("HgenT2").style.display = "block";
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
  document.getElementById("hydrogenNum").innerHTML = hydrogen;
}
function hGenPlus() {
  addH(hPerSecond);
  update();
}
function buyHgen() {
  if (hydrogen >= hGenCost) {
    hydrogen = hydrogen - hGenCost;
    hGen1++;
    hPerSecond++;
    hGenCost = Math.round((hGenCost * 2 + 10) / 1.5);
    document.getElementById("HperSecond").innerHTML = hPerSecond + " H/s";
    document.getElementById("hGenNum").innerHTML = hGen1;
    document.getElementById("hGenCost").innerHTML = hGenCost + " H";
    document.getElementById("hGenTotal").innerHTML = "Total: " + hGen1 + " H/s";
    update();
  }
}
function buyHgenII(x) {
  if (hydrogen >= (hGenIICost * x)) {
    hydrogen = hydrogen - hGenIICost * x;
    hGenIICost = Math.round((hGenIICost * 3) / 1.7 + 10);
    hGenII = hGenII + x;
    hPerSecond = hPerSecond + (x * 3);
    document.getElementById("HperSecond").innerHTML = hPerSecond + " H/s";
    document.getElementById("hGenIINum").innerHTML = hGenII;
    document.getElementById("hGenIICost").innerHTML = hGenIICost + " H";
    document.getElementById("hGenIITotal").innerHTML = "Total: " + hGenII * 3 + " H/s"
    update();
  }
}
