const os= require("os");
console.log("Free memory" , os.freemem());
console.log("Total memory in GB" , os.totalmem()/1024 /1024/1024);
console.log("Version",os.version());
console.log("Processor",os.cpus());