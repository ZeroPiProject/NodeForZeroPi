var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi();

function onRead(level){
  console.log("onRead:"+level);
}

function loop(){
  bot.analogRead(1,onRead);
  setTimeout(loop,100);
}
setTimeout(loop,100);
