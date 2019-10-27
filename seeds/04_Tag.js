const tag = require('../data/tag.json');

exports.seed = function(knex) {
    return knex('Tag').del()
        .then(function() {
            return knex('Tag').insert(tag);
        });
}