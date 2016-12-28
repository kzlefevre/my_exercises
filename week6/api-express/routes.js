
var API = require('./controllers/api');



module.exports = (app) => {
    
    app.post('/api/booze', API.create);
    
};


