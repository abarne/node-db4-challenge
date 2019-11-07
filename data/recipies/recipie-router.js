const express = require('express');

const Recipies = require('./recipie-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Recipies.getRecipes()
		.then((recipies) => {
			res.status(200).json(recipies);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error retrieving the recipies.' });
		});
});

module.exports = router;
