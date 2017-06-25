//List :require(ments)
var express = require('express');
var bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');

//Create App
var app = express();

// create var for input
var toDo = [];

// scaffold / set view engine
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// styles
app.use(express.static('public'));

//set up app to use bodyParser and return JSON. can now refer to your render content as req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// set extended to true to be able to parse nested objects, false = just arrays and strings.


// content + data
// const complete = {
//    complete: [
//      {"task":"Make A To Do List", "status": "complete"} ,
//      {"task":"Get It To Render", "status": "complete"} ,
//      {"task":"Add Strike Through", "status": "complete"} ,
// ]};

app.get("/", function (req, res) {
  res.render('index', {toDo: toDo});
});

app.post("/", function (req,res){
   let addTask = {"task": req.body.task};
   toDo.push(addTask);
   res.render('index', {toDo: toDo});
});

app.listen(3000, function(){
  console.log('Started express application!')
});
