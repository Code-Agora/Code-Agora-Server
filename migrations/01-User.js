
exports.up = function(knex, Promise) {
	return knex.schema.createTable('_User', (table) => {
        table.increments('id');
        table.string('username', 100).notNullable();
        table.datetime('date_joined').notNullable();
        table.integer('reputation').notNullable();
        table.string('lastname', 100);
        table.string('firstname', 100);
        table.string('email', 100).notNullable();
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('_User');
};