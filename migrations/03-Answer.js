
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Answer', (table) => {
        table.increments('id');
        table.float('rating');
        table.integer('user_id');
        table.integer('question_id');
        table.foreign('user_id').references('_User.id');
        table.foreign('question_id').references('Question.id');
        table.boolean('isBest').defaultTo(false);
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Answer');
};