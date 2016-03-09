var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

function onStart(){
  bot.stepperStop(1);
  onBackwardMoved();
}
function onForwardMoved(){
  console.log("backword");
  bot.stepperMoveTo(1,0,1000,onBackwardMoved);
}
function onBackwardMoved(){
console.log("forword");
  bot.stepperMoveTo(1,500,1000,onForwardMoved);
}