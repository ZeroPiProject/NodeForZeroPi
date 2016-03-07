# Node For ZeroPi

 * Raspberry Pi Linux:
 * Starting with a a vanilla New Out of the Box Software (NOOBS) Raspbian image
 * Log into your Raspberry Pi through whatever means works best and ensure you are on a terminal prompt for the remaining steps. This could be local or  * through an SSH (or a serial connection if you like).
 * Issue the following commands to ensure you are up to date:
   sudo apt-get update
   sudo apt-get upgrade -y
 * Download and install node.js:
   wget https://node-arm.herokuapp.com/node_archive_armhf.deb
   sudo dpkg -i node_archive_armhf.deb
 * More information can be found at node-arm.

 * Install using npm, note this will take a while as it is actually compiling code and that ARM processor is getting a workout.
   npm install serialport
