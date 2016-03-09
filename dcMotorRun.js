var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi();

var level = 1;
function loop(){
  bot.dcMotorRun(1,level?100:0);
  level = 1-level;
}
setInterval(loop,2000);
