
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Question_Tags', (table) => {
		table.string('tag_name', 100).notNullable();
		table.integer('question_id').notNullable();
		table.foreign('tag_name').references('Tag.name');
		table.foreign('question_id').references('Question.id');
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Question_Tags');
};