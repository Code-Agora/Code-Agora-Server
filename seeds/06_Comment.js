const comments = require('../data/comments.json');

exports.seed = function(knex) {
    return knex('_Comment').del()
        .then(function() {
            return knex('_Comment').insert(comments);
        });
}