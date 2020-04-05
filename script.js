var h = 15;
var totalH = 15;
var hGen1 = 0;
var hGenCost = 15;
var hGen2Cost = 100;
var hGen2 = 0;
var hPerSecond = 0;
var hGenSecond = setInterval(addH, 1000);
function addH() {
  h += hPerSecond;
  update();
}
function update() {
  getTag("hydrogenNum").innerHTML = h;
}
function buyGen(elm, tier) {
  if (elm == "h") {
    h -= hGenCost;
    hGen1++;
    hPerSecond++;
    hGenCost = Math.round((hGenCost * 2 + 10) / 1.5);
    getTag("HperSecond").innerHTML = hPerSecond + " H/s";
    getTag("hGenNum").innerHTML = hGen1;
    getTag("hGenCost").innerHTML = hGenCost + " H";
    getTag("hGenTotal").innerHTML = "Total: " + hGen1 + " H/s";
    update();
  }
}
function getTag(id) {
  return document.getElementById(id);
}