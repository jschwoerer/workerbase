const express = require('express');

const mongoClient = require('./mongoClient');

const router = express.Router();
router.get('/', async (req, res) => {
	res.send(
		await mongoClient
			.db('workerbase')
			.collection('sent')
			.find()
			.project({
				"_id": 0,
				"from": 1,
				"to": 1,
				"subject": 1,
				"body": 1,
				"errorMsg": 1
			})
			.toArray()
	);
});

module.exports = router;
