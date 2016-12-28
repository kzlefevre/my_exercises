//logging middleware

//write a function that logs a message and the requested URL


var express = require('express');
    bodyParser = require('body-parser');
    PORT = process.env.PORT || 8080;
    app = express();
    morgan = require('morgan');



// function lumberjack ( req, res, next) {
//     console.log('Timber!');
//     next();
// }

app.use(express.static(__dirname + '/public'));

app.post('*' , 
         bodyParser.json(),
         bodyParser.urlencoded({extended:true}));

app.use(morgan('dev'));


app.use(funtion(req, res, next){
var requestInfo = {
    method : req.method,
    path : req.path,
    query : req.query,
    body : req.body,
    params : req.params
}
        
console.log(requestInfo);
next()
})

require('./routes')(app);



// app.use(lumberjack);

// app.use((req, res, next) => {
//     console.log('I am middleware!');
//     next();
// });


app.listen(PORT, () => {
  console.log(`Sever running on ${PORT}`);
});


//use index.js to automatically find the html with the router


funtion findOne(index){
    return library[index];
}

function findAll(){
    return library
}

function findGenre(genre){
    var genreBooks = library.filter(function(book){
        return book.genre == genre;
    })
    return genreBooks
}

funtion findGenreAuthor(genre, author){
    return library.filter(funtion(book){
       return (book.genre == genre && book.author == author)
    })
}

function addBook(bookInfo){
    console.log('Adding new book ' + bookInfo.title +)
}
                
                module.exports{
                
                }

                
                
                
                console.load('Loading routes')
    
    var LIBRARY = require('./library');
    
    module.exports = fuction(app) {
        app.get('/', function(req, res){
            res.sendFile('index.html', {root: './public/html'})
        })
    }
    
    app.get('/library/books', LIBRARY.books);
    
    app.get('/library/books/:genre', LIBRARY.genre);
                
    app.get('/library/books/:genre/:author', LIBRARY.genre.author);
                
    app.post('/library/book', LIBRARY.addBook);
                
                
                
                
                
                
                
                
                
                
