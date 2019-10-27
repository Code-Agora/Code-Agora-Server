const answers = require('../data/answers.json');

exports.seed = function(knex) {
    return knex('Answer').del()
        .then(function() {
            return knex('Answer').insert(answers);
        });
}