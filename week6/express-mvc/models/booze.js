//model file for booze collection
var mongoose = require('mongoose');


//define our data schema/document
var boozeSchema = mongoose.Schema({
    abv           : Number,
    name          : String,
    flavornotes   : Array,
    effervescence : {type : Boolean, default : false}
});


//create the model/collection ...this value need to get OUT of this file
module.exports = mongoose.model('Booze' , boozeSchema)