exports.seed = function(knex) {
	return knex('Recipie').insert([
		{ Name: 'Milk and Apples', Instructions: 'Put some apples in some milk!' },
		{ Name: 'Cheese and Apples', Instructions: 'Pust cheese on those Apples' }
	]);
};
