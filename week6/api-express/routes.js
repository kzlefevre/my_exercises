//require the controller files

var API = require('./controllers/api');

//we register routes with methods like 'app.get', 'app.post', etc. How do we get 'app' into this file from server.js?
//normally we export objects, but we can export functions too.

//this function will be called in 'server.js' and it will pass in the 'app object.

module.exports = (app) => {
    
    //creating a new album api, passing it a function
    app.post('/api/album', api.album);
    
};


//JSON needs " " for strings and no trailing comas