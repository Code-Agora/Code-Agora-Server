
exports.up = function(knex, Promise) {
	return knex.schema.createTable('_Comment', (table) => {
		table.increments('id');
		table.datetime('date_posted');
		table.integer('user_id').notNullable();
		table.integer('answer_id').notNullable();
		table.text('body');
		table.integer('question_id').notNullable();
		table.foreign('user_id').references('_User.id');
		table.foreign('answer_id').references('Answer.id');
		table.foreign('question_id').references('Question.id');
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('_Comment');
};