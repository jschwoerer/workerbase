const express = require('express');
const axios = require('axios');

const mongoClient = require('./mongoClient');

const router = express.Router();


const sendToPostmark = (doc, objectId) => {
}

const sentSuccess = (doc) => {
	mongoClient
		.db('workerbase')
		.collection('sent')
		.insertOne(doc)
		.catch(console.error);
}

const sentError = (doc, errMsg) => {
	mongoClient
		.db('workerbase')
		.collection('sent')
		.insertOne({
			...doc,
			"errMsg": errMsg
		})
		.catch(console.error);
}

router.post('/', (req, res) => {

	// TODO add validation of body
	
	const doc = {
		"from": req.body.from,
		"to": req.body.to,
		"subject": req.body.subject,
		"body": req.body.body
	};

	axios.post(
		'https://api.postmarkapp.com/email',
		{
			
			"From": doc.from,
			"To": doc.to,
			"Subject": doc.subject,
			"TextBody": doc.body
		},
		{
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"X-Postmark-Server-Token": process.env.POSTMARK_TOKEN,
			},
		}
	)
	.then(() => sentSuccess(doc))
	.catch(err => sentError(doc, err.response.data.Message))

	res.send({
		sending: true
	});
});

module.exports = router;

