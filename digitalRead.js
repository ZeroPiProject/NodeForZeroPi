var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

function onRead(level){
  console.log("onRead:"+level);
}

function loop(){
  bot.digitalRead(13,onRead);
  setTimeout(loop,200);
}
function onStart(){
  setTimeout(loop,200);
}