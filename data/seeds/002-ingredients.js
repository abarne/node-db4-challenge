exports.seed = function(knex) {
	return knex('Ingredients').insert([ { Name: 'Apples' }, { Name: 'Milk' }, { Name: 'Cheese' } ]);
};
