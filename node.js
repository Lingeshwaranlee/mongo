//node.js
1. // node hello.js -------->to run node js( node file name)
2.//in node js we don't have document,window so tha we use
// console.log(global); 

//{inbuilt package}
//const os= require("os");----->(inbuilt package)
//console.log("Free memory" , os.freemem());--------->free memory,free ram
//console.log("Total memory" , os.totalmem());--------->total memory,total ram
//console.log("Version",os.version());---------->tells the about os version
//console.log("Processor",os.cpus());----------> tells which cou do you have intell or amd
//console.log("Total memory in GB" , os.totalmem()/1024 /1024/1024);

//{file system}
//    const fs = require("fs");------------>(we are importing the file)
//    fs.writeFile("names.txt",data,(err)=>{
//   console.log("completed writing!!1")
//    });
//we have 3 arguments 1)filename,2)content.3)call back

// example:
//   const fs = require("fs");
//   const quote="hi welcome to kirikalan magic show";
//   fs.writeFile("./awesome.html",quote,err=>{
//   console.log("completed writing!!")
//   })
// it will create a new file called awesome.html in your explorer
//
//task-1 
//create a folder called backup file in that you have to have 10 text.html file----->like text1-text10
//  const fs = require("fs");
//   const quote2="hey mama you hate mee";
//   for(let i = 1; i<=10;i++){
//   fs.writeFile(`./backup/text-${i}.html`,quote2,err=>{
//   console.log("completed writing!!")
//   });
//   }
//
//task -2 node file.js 20 means it should create 20 files
//   const fs = require("fs");
//   const quote3 ="esale cup namdhe";
//   console.log(process.argv);
//   const noOfFiles=process.argv[2];
//   for(let i = 1; i<=noOfFiles;i++){
//   fs.writeFile(`./backup/text-${i}.html`,quote3,err=>{
//    console.log("completed writing!!")
//    });
//    }
//
//to read particular file
//    const fs = require("fs");
//    fs.readFile("./cool.txt","utf-8",(err,data)=>{
//   if(err){
//     console.error(err);
//   }
 //   console.log(data)
//     );
//
//add to existing files
//    const fs = require("fs");
//    const data="hey sanga how are you";
//    fs.appendFile("./rishi.txt",data,(err)=>{
//    console.log("completed appending")
//    })
//
//
//delte a particular file
//     const fs = require("fs");
//     fs.unlink("./rishi.txt",(err) =>
//     {
//      console.log("deleted");
//      })
//
//
//
//
//
//
//
//
//
//
//
//
//
//



