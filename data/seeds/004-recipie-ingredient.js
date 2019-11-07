exports.seed = function(knex) {
	return knex('Recipie_Ingredient').insert([
		{ Quantity: '5 Cups', Ingredients_Id: 2, Recipie_Id: 1 },
		{ Quantity: '3 Whole', Ingredients_Id: 1, Recipie_Id: 1 },
		{ Quantity: '3 Cups', Ingredients_Id: 3, Recipie_Id: 2 },
		{ Quantity: '2 Whole', Ingredients_Id: 1, Recipie_Id: 2 }
	]);
};
