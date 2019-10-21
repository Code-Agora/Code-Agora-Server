
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Tag', (table) => {
        table.string('name', 100).primary();
        table.text('description').notNullable();
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Tag');
};