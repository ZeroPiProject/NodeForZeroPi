var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi();

var level = 1;
function loop(){
  bot.digitalWrite(13,level);
  level = 1-level;
}
setInterval(loop,100);
