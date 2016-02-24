var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lions');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var todoRouter = require('./routes/todo');
var Todo = require('./models/todos');

app.use(express.static('public'));
app.set('view engine', 'ejs');

var port = process.env.PORT || 7000;

var router = express.Router();

app.get('/', function(req, res){
	res.render('index');
});

app.use('/api', todoRouter);

app.listen(port);
console.log("magic happens on " + port);