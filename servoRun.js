var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi();

var level = 1;
function loop(){
  bot.servoRun(0,level?100:40);
  level = 1-level;
}
setInterval(loop,1000);
