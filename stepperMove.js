var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

function onStart(){
  bot.stepperStop(1);
  onBackwardMoved();
}
function onForwardMoved(){
  console.log("backword");
  bot.stepperMove(1,-2000,1000,onBackwardMoved);
}
function onBackwardMoved(){
console.log("forword");
  bot.stepperMove(1,2000,1000,onForwardMoved);
}