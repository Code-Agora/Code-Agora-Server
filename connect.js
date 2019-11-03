const knex = require('knex')({
	client: 'pg',
	connection:{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'agora_test'
	}
});

module.exports = knex;
