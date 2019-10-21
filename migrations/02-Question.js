
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Question', (table) => {
        table.increments('id');
        table.integer('user_id');
        table.foreign('user_id').references('_User.id');
        table.integer('view_count').defaultTo(0);
        table.string('title', 50).notNullable();
        table.text('body').notNullable();
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Question');
};