var client;

async function init() {
	const MongoClient = require('mongodb').MongoClient;
	client = new MongoClient('mongodb://localhost:27017/');
}

init().catch(console.error)

module.exports = client
