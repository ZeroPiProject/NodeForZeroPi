var ZeroPi = require("zeropi").ZeroPi;
var bot = new ZeroPi(onStart);

var level = 0;
function loop(){
  level++;
  if(level>7){
    level = 0;
  };
  switch(level){
    case 0:
     {
      bot.stepperRun(1,200);
     }
     break;
    case 1:
     {
      bot.stepperRun(1,500);
     }
     break;
    case 2:
     {
      bot.stepperRun(1,200);
     }
     break;
    case 3:
     {
      bot.stepperStop(1);
     }
     break;
    case 4:
     {
      bot.stepperRun(1,-200);
     }
     break;
    case 5:
     {
      bot.stepperRun(1,-500);
     }
     break;
    case 6:
     {
      bot.stepperRun(1,-200);
     }
     break;
    case 7:
     {
      bot.stepperStop(1);
     }
     break;
   }
}
function onStart(){
  bot.stepperStop(1);
  setInterval(loop,2000);
}