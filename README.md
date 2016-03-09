# Node For ZeroPi
* prepare your ZeroPi board. ( install the Firmware: https://github.com/ZeroPiProject/ZeroPi_Firmware)
* git clone https://github.com/ZeroPiProject/NodeForZeroPi on your Raspberry Pi
* Install using npm, **npm install serialport@2.0.0**
* Enter the folder "NodeForZeroPi", and **sudo node** digitalWrite.js

## Example
```
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
```
## Node API
* **ZeroPi**(function onStart)

### GPIO
* **digitalWrite** ( Pin, Level ) 
* **pwmWrite** ( Pin, Pwm )  
* **digitalRead** ( Pin, **function** onRead )
* **analogRead** ( Pin, **function** onRead )
 
### DC Motor
* **motorRun** ( Device, Pwm ) 
 * Device : 0 = Slot1( 1A+,1A- ), 1 = Slot1( 1B+,1B- ), ... , 6 = Slot4( 4A+,4A- ), 7 = Slot4( 4B+,4B- )  
 * Pwm : -255 ~ 255

### Servo Motor
* **servoRun** ( Pin, Angle)
 * Pin : 0 - 8 ( A0, A1, A2, A3, MO, MI, SCK, SDA, SCL )
 * Angle : 0 ~ 180

### Stepper Motor
* **stepperRun**( Device, Speed )
 * Device : 0 ~ 3 ( Slot1~4 )
 * Speed : 0 ~ 20000
* **stepperStop** ( Device )
* **stepperMove** ( Device, Distance, Speed, **function** onFinish )
* **stepperMoveTo** ( Device, Position, Speed, **function** onFinish )
* **stepperSetting** ( Device, Microstep, Accelation )
 * Microstep : 1, 2, 4, 8, 16
 * Accelation : 100 ~ 10000
