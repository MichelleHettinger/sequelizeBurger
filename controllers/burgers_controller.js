var express = require("express");
var mo = require("method-override");
var bp = require("body-parser");

var Burgers = require("../models/")["Burgers"];
var router = express.Router();

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

//Read
router.get('/burgers', function(req,res) {
    // replace old function with sequelize function
    Burgers.findAll()
    // use promise method to pass the burgers...
    .then(function(burger_data){
        console.log(burger_data);
        // into the main index, updating the page
        return res.render('index', {burger_data})
    }); 
});

//Create
router.post('/burgers/create', function(req,res) {
	console.log(req.body.burger_name);
	burger.insertOne('events', req.body.burger_name, req.body.devoured, function(data){
		res.redirect('/burgers')
	});
});

//Update
router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne('events', {'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;