const express = require('express');

const mongoClient = require('./mongoClient');

// TODO consider adding webhook check and create logic?

const router = express.Router();

router.post('/', async (req, res) => {

	// TODO validate body? only allow traffic from postmark?
	
	try {
		await mongoClient
			.db('workerbase')
			.collection('received')
			.insertOne(req.body);

		res.status(200).end();
	} catch (error) {
		console.error(error);

		res.status(500).end();
	}
});

module.exports = router;
