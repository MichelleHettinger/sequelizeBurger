var express = require("express");
var mo = require("method-override");
var bp = require("body-parser");

var Burgers = require("../models/")["Burgers"];
var router = express.Router();

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

//Read
//Grab all from events, then send the data to browser
router.get('/burgers', function(req,res) {
    Burgers.findAll()

    .then(function(burger_data){

        // console.log(burger_data);

        return res.render('index', {burger_data})

    }); 
});

//Create
//Make the burger with burger name and devoured status, then redirect
router.post('/burgers/create', function(req,res) {

	Burgers.create({

		name: req.body.burger_name,

		devoured: req.body.devoured

	})
	.then (function(){

		res.redirect('/burgers')	

	});
});

//Update
//Update devoured where id = req.params.id. Then redirect to /burgers
router.put('/burgers/update/:id', function(req,res) {

	Burgers.update(
	{
		devoured: req.body.devoured
	},
	{
		where: {id:req.params.id}
	})
	.then(function (){

		res.redirect('/burgers');

	});


});

module.exports = router;