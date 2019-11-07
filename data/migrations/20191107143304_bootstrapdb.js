exports.up = function(knex) {
	return knex.schema
		.createTable('Ingredients', (tbl) => {
			tbl.increments();
			tbl.string('Name', 255).notNullable();
		})
		.createTable('Recipie', (tbl) => {
			tbl.increments();
			tbl.string('Name', 255).notNullable();
			tbl.string('Instructions', 550).notNullable();
		})
		.createTable('Recipie_Ingredient', (tbl) => {
			tbl.increments();
			tbl.string('Quantity', 255).notNullable();
			tbl
				.integer('Ingredients_Id')
				.unsigned()
				.references('id')
				.inTable('Ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');

			tbl
				.integer('Recipie_Id')
				.unsigned()
				.references('id')
				.inTable('Recipie')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {};
