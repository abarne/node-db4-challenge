const db = require('../db-config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
	getRecipiesByIngredient
};

function getRecipes() {
	return db('Recipie');
}

function getShoppingList(recipe_id) {
	return db
		.select('Quantity')
		.from('Recipie_Ingredient')
		.select('Name')
		.from('Ingredients')
		.join('Recipie_Ingredient', 'Ingredients.id', '=', 'Recipie_Ingredient.Ingredients_Id')
		.where('Recipie_Ingredient.Recipie_Id', recipe_id);
}

function getInstructions(recipe_id) {
	return db.select('Instructions').from('Recipie').where('Recipie.id', recipe_id);
}

function getRecipiesByIngredient(ingredient) {
	return db
		.select('Recipie.Name', 'Recipie.Instructions')
		.from('Recipie')
		.join('Recipie_Ingredient', 'Recipie_Ingredient.Recipie_id', '=', 'Recipie.id')
		.join('Ingredients', 'Recipie_Ingredient.Ingredients_Id', '=', 'Ingredients.id')
		.where('Ingredients.id', ingredient);
}
