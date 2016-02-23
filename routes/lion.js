var express = require('express');
var router = express.Router();
var Lion = require('../models/lions');

router.route('/lions')
	.get(function(req, res){
		Lion.find(function(err, lion){
			if(err){
			console.log(err);
			} else {
			res.json(lion);
			}
		})
		
	})
	.post(function(req, res){
		console.log('hello world! inpost');
		console.log(req.body);
		var lion = new Lion();

		lion.name = req.body.name;
		lion.age = req.body.age;
		lion.pride = req.body.pride;
		lion.gender = req.body.gender;

		lion.save(function(err, lion){
			if(err){
				console.log(err);
			} else {
				res.json(lion);
			}
		})
	});


router.route('/lions/:lions_id')
	.get(function(req, res){

		Lion.findById(req.params.lions_id, function(err, lion){
			if(err){
			console.log(err);
			} else {
			res.json(lion);
			}
		})
		
	})
	.put(function(req, res){
		Lion.findById(req.params.lions_id, function(err, lion){
			if(err){
				console.log(err)
			} else {
				lion.name = req.body.name ? req.body.name : lion.name;
				lion.age = req.body.age ? req.body.age : lion.age;
				lion.pride = req.body.pride ? req.body.pride : lion.pride;
				lion.gender = req.body.gender ? req.body.gender : lion.gender;

				lion.save(function(err){
					if(err){
						console.log(err)
					} else {
						res.json({title: "lion updated"})
					}
				})
			}
		})
	})

	






module.exports = router;