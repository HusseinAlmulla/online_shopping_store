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
			error = { "error": msg };
			res.status(400).json(error);
		});
})

app.post('/products/category', (req, res) => {
	console.log(req.body);
	oss_db('category').where({
		main: req.body.main,
		sub: req.body.sub
	}).select('id')
		.then(category_id => oss_db('products')
			.where({ category: category_id[0].id, })
			.select('*').then(items => {
				items[0]
					? res.status(200).json(items)
					: res.status(200).json([{error: 'No results found'}])
			}))
		.catch(err => res.status(400).json([{error: 'Somthing went wrong\n' + err}]))
})


app.get('/products/search', (req, res) => {
	const keyword = '%'.concat(req.query.q).concat('%');
	
	oss_db('products')
	.where('short_title', 'like', keyword)
	.orWhere('long_title', 'like', keyword)
	.orWhere('description', 'like', keyword)
	.select('*').then(items => {items[0]
		? res.status(200).json(items)
		: res.status(200).json([{error: 'No results found'}])
	}).catch(err => res.status(400).json([{error: 'Somthing went wrong\n' + err}]))
})


app.listen(3000, () => console.log("The server running on port 3000"));