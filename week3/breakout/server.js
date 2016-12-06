//npm init
//

//use express in here


//save it as a variable
var express = require('express');
var PORT = process.env.PORT || 8080;


var app = express(); //create an application object, calling it

//app.use are exe. for every request the server recieves, do we have a file?, then checking other methods that we call on that object.
app.use( express.static('public') ); //if a url that is requested matches a filepath that is INSIDE of the public folder... express will automatically send that file down the the browser.


//.get is a type of request (for main ones) 
// app.get('/about')

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});