const questions = require('../data/questions.json');

exports.seed = function(knex) {
    return knex('Question').del()
        .then(function() {
            return knex('Question').insert(questions);
        });
}