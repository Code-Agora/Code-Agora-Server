
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Question', (table) => {
        table.increments('id');
        table.integer('votes');
        table.integer('user_id');
        table.foreign('user_id').references('_User.id').onDelete('CASCADE');
        table.integer('view_count').defaultTo(0);
        table.text('title').notNullable();
        table.text('body').notNullable();
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Question');
};