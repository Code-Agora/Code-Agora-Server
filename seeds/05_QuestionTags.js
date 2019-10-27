const question_tags = require('../data/question_tags.json');

exports.seed = function(knex) {
    return knex('Question_Tags').del()
        .then(function() {
            return knex('Question_Tags').insert(question_tags);
        });
}