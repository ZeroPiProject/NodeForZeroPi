var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

var level = 1;
function loop(){
  bot.dcMotorRun(1,level?100:0);
  level = 1-level;
}
function onStart(){
  setInterval(loop,2000);
}