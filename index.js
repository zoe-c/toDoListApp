var express = require('express');
var bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
// var expressValidator = require('express-validator');

var app = express();

// scaffold
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// styles
app.use(express.static('public'));

// content + data
const complete = {
   complete: [
     {"task":"Make A To Do List", "status": "complete"} ,
     {"task":"Get It To Render", "status": "complete"} ,
     {"task":"Add Strike Through", "status": "complete"} ,
]};



app.get("/", function (req, res) {
  res.render('index', complete);
});

app.post("/addItem", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})



// PARSER
// Set app to use bodyParser()` middleware.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//'extended: false' parses strings and arrays.
//'extended: true' parses nested objects
//'expressValidator' must come after 'bodyParser', since data must be parsed first!
// app.use(expressValidator());








app.listen(3000, function(){
  console.log('Started express application!')
});
