'use strict';

var SerialPort = require("serialport").SerialPort
var serialPort;
var buffer = "";
var selectors = {};
var isOpen = false;
function ZeroPi(onStart)
{
  serialPort = new SerialPort("/dev/ttyAMA0", {
    baudrate: 115200
  });
  serialPort.on("open", function () {
    isOpen = true;
    if(onStart){
       onStart();
     }
    serialPort.on('data', function(data) {

      buffer+=""+data;
	if(buffer.indexOf("\n")>-1){
	  buffer = buffer.split("\n").join("").split("\r").join("");
	  if(buffer.length>3){
	    if(buffer.indexOf(" OK")>-1){
	       if(buffer.indexOf("L")>-1){
               if(selectors[buffer.split(" L")[0]]){
		    selectors[buffer.split(" L")[0]](Number(buffer.split(" L")[1].split(" OK")[0]));
		   }
		 }else{
               var funcName = ""+buffer.split(" OK")[0];
		  if(selectors[funcName]){
		    selectors[funcName]();
		   }
 		 }
             buffer = "";
	     }
	  }
	}
     });
  });
}
ZeroPi.prototype.zeropi = function () {
  
}
function onResult(err, results) {
    //console.log(err,results);
}
function write(str){
  if(isOpen){
    serialPort.write("\n"+str+"\n",onResult);
  } 
}
ZeroPi.prototype.digitalWrite = function(pin,level){
  write("M11 D"+pin+" L"+level);
}
ZeroPi.prototype.pwmWrite = function(pin,pwm){
  write("M11 D"+pin+" P"+level);
}
ZeroPi.prototype.digitalRead = function(pin,callback){
  selectors["R12 D"+pin] = callback;
  write("M12 D"+pin);
}
ZeroPi.prototype.analogRead = function(pin,callback){
  selectors["R13 A"+pin] = callback;
  write("M13 A"+pin);
}
ZeroPi.prototype.dcMotorRun = function(device,speed){
  write("M21 D"+device+" P"+speed);
}
ZeroPi.prototype.dcMotorStop = function(device){
  write("M22 D"+device);
}
ZeroPi.prototype.servoRun = function(device,angle){
  write("M41 D"+device+" A"+angle);
}
ZeroPi.prototype.stepperRun = function(device,speed){
  write("M51 D"+device+" F"+speed);
}
ZeroPi.prototype.stepperMove = function(device,distance,speed,callback){
  selectors["R52 D"+device] = callback;
  write("M52 D"+device+" R"+distance+" F"+speed);
}
ZeroPi.prototype.stepperMoveTo = function(device,position,speed,callback){
  selectors["R52 D"+device] = callback;
  write("M52 D"+device+" A"+position+" F"+speed);
}
ZeroPi.prototype.stepperStop = function(device){
  write("M54 D"+device);
}
ZeroPi.prototype.steppersEnable = function(){
  write("M56");
}
ZeroPi.prototype.steppersDisable = function(){
  write("M57");
}
ZeroPi.prototype.stepperSetting = function(device,microstep,accelation){
  write("M53 D"+device+" S"+microstep+" A"+accelation);
}
exports.ZeroPi = ZeroPi;