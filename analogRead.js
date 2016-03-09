var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

function onRead(level){
  console.log("onRead:"+level);
}

function loop(){
  bot.analogRead(1,onRead);
  setTimeout(loop,100);
}
function onStart(){
  setTimeout(loop,100);
}