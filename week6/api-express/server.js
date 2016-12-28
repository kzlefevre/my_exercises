

var express = require('express'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 8080,
    app = express(),
    morgan = require('morgan'),
    Router = require('./routes');



//mount middleware
app.use( 
    express.static('public'),
    bodyParser.json(), 
    bodyParser.urlencoded({extended : true}),
    morgan('dev')
);

//routes
Router(app); //passing the express app objecct as an argument



//listen for connections
app.listen(PORT, () => {
  console.log(`Sever running on ${PORT}`);
});