var express = require('express');
var PORT = process.env.PORT || 8080;

var app = express();


// app.use( bodyParser.json() );
// app.use( express.static('public') );





//Routes 


function knockKnock (req, res, next){
    
    if (req.query.wizardHandshake === 'ubersecret') {
        //they're good, let them in
        next();
    } else {
        res.send('You shall not pass!!!');
    }
  }

//vertically mounted all the requests below have to run first, run top down
// this middleware has to run first with 'next'
app.use((req, res, next) => {
    console.log('I am middleware!');
    next(); // continue to the next thing
});

//if doesn't match the /, then it goes to the next app.get request
app.get('/', (req, res) => {
    res.send("Grumpy Wizards make toxic brew for the Evil Queen and Jack.");
});

app.get('/about', (req, res) => {
    res.send("all about wizards...");
});

//horizontal middleware , pass as many middleware functions as you want
//knockKnock is our 'gate', if open, then will go on
app.get('/secret/wizardstuff', knockKnock, (req, res) => {
    res.json({
        spell: "BAM",
        elements: ['wind', 'eye of newt', 'wormwood'],
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});











