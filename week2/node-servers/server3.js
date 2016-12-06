var http = require('http');
var path = require('path');
var fs = require('fs');
var port = 3000;

http.createServer((req,res)=>{
    
    console.log(`FileExtention : ${extension}`)
    
    switch(extension){
        case '.html' :
             console.log('seartching for HTML files...');
            fs.readFile('./public/html/index.html', 
                       (err, data)=>{
                if(err) {
                    res.writeHead(404);
                    re.end('You got nothin')
                }
                else{
                    res.writeHead(200, {"Content-Type" : "text/html"});
                }
            })
            break
        case '.js' :
            
            break
        case '.css' :
            
            break
     }
            
}).listen(port)