//List :require(ments)
var express = require('express');
var bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');

//Create App
var app = express();

// Create var for input
var toDo = [];

//Set view engine/ scaffold
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


//Set app to USE bodyParser and return JSON (can now refer to your render content as req.body)
// Set extended to "true" to be able to parse nested objects, "false" to parse arrays and strings.
// validator always comes after parser!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

// styles
app.use(express.static('public'));

//render your mustache file: ('file', {your: data})
app.get("/", function (req, res) {
  res.render('index', {toDo: toDo});
});

app.post("/", function (req,res) {
   // Use .checkBody middleware
   //Tell middleware which validators to apply (can chain or just use one).
   //You are validating your input, here. <input name=""> should match that first arg you pass the middleware. The second arg is your message.
   req.checkBody('task','You forgot to enter a task! Please try again.').notEmpty();

   //Checking for validationErrors (you just set validation above== task must not be empty!)
   var errors = req.validationErrors();
     if (errors) {
       res.send( "You forgot to enter a task! Go back and try again.");
     } else {
        let addTask = {'task': req.body.task};
        toDo.push(addTask);
        res.render('index', {toDo: toDo});
      // res.redirect('/');

      // Using this helped stop the reprint (of the last task entered) on refresh
      next();
   }
});

app.listen(3000, function(){
  console.log('Started express application!')
});
