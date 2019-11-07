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

router.get('/:id/shopping-list', (req, res) => {
	id = req.params.id;

	Recipies.getShoppingList(id)
		.then((list) => {
			res.status(200).json(list);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the shopping list' });
		});
});

router.get('/:id/instructions', (req, res) => {
	id = req.params.id;

	Recipies.getInstructions(id)
		.then((instructions) => {
			res.status(200).json(instructions);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the instructions' });
		});
});

router.get('/ingredients/:id', (req, res) => {
	id = req.params.id;

	Recipies.getRecipiesByIngredient(id)
		.then((recipies) => {
			res.status(200).json(recipies);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the recipies' });
		});
});

module.exports = router;
