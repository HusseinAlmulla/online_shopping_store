const express = require('express');
const app = express();
const bodyparse = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const oss_db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: '',
		database: 'oss_db'
	}
});


app.use(bodyparse.json());
app.use(cors());

app.post('/register', (req, res) => {

	const { username, first_name, last_name, email, password, date_birth } = req.body;
	console.log(req.body)
	oss_db('register').insert({
		username: username,
		first_name: first_name,
		last_name: last_name,
		email: email,
		password: password,
		date_birth: date_birth,
		joined: new Date()
	}).returning('*')
		.then(user => res.status(200).json(user[0]))
		.catch(err => {
			// this regular expression match the return error.
			let reg = (/Key\s\(([a-z]+)\)=(\(.*\).*)/)
			let match = reg.exec(err.detail);
			let msg = "The ".concat(match[1], " ", match[2])
			error = { "error": msg};
			res.status(400).json(error );
		});
})


app.listen(3000, () => console.log("The server running on port 3000"));