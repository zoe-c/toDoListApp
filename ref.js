// const's and vars
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
// const data = require('./data.js');
const app = express();

// scaffold
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// styles
app.use(express.static('public'));

// data   content
const todos = {
   todos: [
  "Wash the car"
]};
app.get('/', function (req, res) {
   res.render('index', {todos: todos);
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})


// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//'extended: false' parses strings and arrays.
//'extended: true' parses nested objects
//'expressValidator' must come after 'bodyParser', since data must be parsed first!
app.use(expressValidator());


const todos = [
  "Wash the car"
];

app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})



app.listen(3000, function () {
  console.log('App Start Successful!')
});
