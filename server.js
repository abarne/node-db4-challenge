const express = require('express');
const helmet = require('helmet');

const RecipieRouter = require('./data/recipies/recipie-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipies', RecipieRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Server is running' });
});

module.exports = server;
