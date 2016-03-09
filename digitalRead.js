var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi();

function onRead(level){
  console.log("onRead:"+level);
}

function loop(){
  bot.digitalRead(13,onRead);
  setTimeout(loop,200);
}
setTimeout(loop,200);
