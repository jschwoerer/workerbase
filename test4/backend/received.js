const express = require('express');

const mongoClient = require('./mongoClient');

const router = express.Router();
router.get('/', async (req, res) => {
	res.send(
		await mongoClient
			.db('workerbase')
			.collection('received')
			.find()
			.project({
				"_id": 0,
				"MessageID": 1,
				"Recipient": 1,
				"Details": 1,
				"Tag": 1,
				"RecordType": 1
			})
			.toArray()
	);
});

module.exports = router;
