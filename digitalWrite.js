var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

var level = 1;
function loop(){
  bot.digitalWrite(13,level);
  level = 1-level;
}
function onStart(){
  setInterval(loop,100);
}