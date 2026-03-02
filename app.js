
const fs=require('fs');
const path=require('path');

const http=require('http');
const subtract=require('./sum.js');



console.log(subtract(6,5));



// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1>hello world welcome to webskitters</h1>');
   
//     res.end();
// }).listen(3005);

//read file

// fs.writeFile('./users.txt','hello world',function(err){
//      if(err) throw err;
//      console.log('file created');
//  })

//append file

// fs.appendFile('./users.txt',' hello world',function(err){
//     if(err) throw err;
//     console.log('file created');
// })


// fs.readFile('./users.txt','utf8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })

//delete file

fs.unlink('./users.txt',function(err){
    if(err) throw err;
    console.log('file deleted');
})

//path module
//console.log(path);


 //console.log(path.basename(__filename));
 //console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));