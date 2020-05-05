var h = 15;
var hPerSecond = 0;
var totalH = 15;
var hGen1 = 0;
var hGenCost1 = 15;
var hGen2 = 0;
var hGenCost2 = 100;
var hGen3 = 0;
var hGenCost3 = 250;
var hGen4 = 0;
var hGenCost4 = 1000;
var c = 0;
var cPerSecond = 0;
var totalC = 0;
var cGen1 = 0;
var cGenCost1 = 15;
var cGen2 = 0;
var cGenCost2 = 100;
var cGen3 = 0;
var cGenCost3 = 250;
var cGen4 = 0;
var cGenCost4 = 1000;
var h2 = 0;
var ch4 = 0;
setInterval(addH, 1000);
function addH() {
  h += hPerSecond;
  update();
}
function update() {
  get("hydrogenNum").innerHTML = h;
  get("HperSecond").innerHTML = `${hPerSecond}  H/s`;
}
function buyGen(elm, tier) {
  if (elm == "h") {
    if (tier == 1  && h >= hGenCost1) {
      h -= hGenCost1;
      hGen1++;
      hPerSecond++;
      hGenCost1 = Math.round((hGenCost1 * 2 + 10) / 1.5);
      get("hGenNum1").innerHTML = `${hGen1}`;
      get("hGenTotal1").innerHTML = `Total: ${hGen1} H/s`;
      get("hGenCost1").innerHTML = `${hGenCost1} H`;
      get("HgenT2").style.display = "block";
      update();
    } else if (tier == 2  && h >= hGenCost2) {
      h -= hGenCost2;
      hGen2++;
      hPerSecond += 3;
      hGenCost2 = Math.round((hGenCost2 * 2 + 10) / 1.5);
      get("hGenNum2").innerHTML = `${hGen2}`;
      get("hGenTotal2").innerHTML = `Total: ${hGen2 * 3} H/s`;
      get("hGenCost2").innerHTML = `${hGenCost2} H`;
      get("HgenT3").style.display = "block";
      update();
    } else if (tier == 3 && h >= hGenCost3) {
      h -= hGenCost3;
      hGen3++;
      hPerSecond += 10;
      hGenCost3 = Math.round((hGenCost3 * 2 + 10) / 1.5);
      get("hGenNum3").innerHTML = `${hGen3}`;
      get("hGenTotal3").innerHTML = `Total: ${hGen3 * 10} H/s`;
      get("hGenCost3").innerHTML = `${hGenCost3} H`;
      get("HgenT4").style.display = "block";
      update();
    } else if (tier == 4 && h >= hGenCost4) {
      h -= hGenCost4;
      hGen4++;
      hPerSecond += 50;
      hGenCost4 = Math.round((hGenCost4 * 2 + 10) / 1.5);
      get("hGenNum4").innerHTML = `${hGen4}`;
      get("hGenTotal4").innerHTML = `Total: ${hGen4 * 50} H/s`;
      get("hGenCost4").innerHTML = `${hGenCost4} H`;
      update();
    }
  }
}
function get(id) {
  return document.getElementById(id);
}