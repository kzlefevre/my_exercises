/*  NPM - node package manager
 when starting a project use 'npm init'
 
 
 
 
 npm install express --save
*/

var express = require('express');
var app = express();

//talk about urls people are making requests to

app.get('/', (req, res)=>{
    res.send('<h1> Welcome to the home page! </h1>');
    
    app.get('/about', (req, res)=>{
        })
});

app.use (express.static('public')); //this would be our static file server. saves time with less code.


app.listen(3000, ()=>{
    console.log('Server working!');
})