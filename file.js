
//for(let i = 1; i<=10;i++){
 //   fs.writeFile(`./backup/text-${i}.html`,quote2,err=>{
  //      console.log("completed writing!!")
  //  });
//}

    const  fs =require("fs");
   fs.unlink("./rishi.txt",(err) =>
   {
     console.log("deleted");
   })