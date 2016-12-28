//require the model that we're dealing with, this is a server side controller

var Booze = require('../models/booze.js') //this takes the other js file from that folder

//controller files are respnsible for creating the function that handle routes
//if export out then, need a require file in other doc.
module.exports = {
    
    create : (req, res) => {
        //creating new documents are typically done with a POST request. Data lives on the req.body or the bodyParser and will have to go through there
        
        //take our request body and use it to make a new document
        var newBooze = new Booze(req.body);
        
        //save doc to DB
        newBooze.save((err, doc)=>{
            res.send(doc); //send down the newly created doc
        });
    },
  
    read : (req, res) => {
        Booze.find({}, (err, boozes)=>{
            res.send(boozes);
        });
    },
    
};