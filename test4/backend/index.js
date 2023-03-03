const express = require('express');
const path = require('path');

// call init() in file
require('./mongoClient.js');

const app = express();

app.use(express.json());

const router = express.Router();

router.use('/send', require('./send.js'));
router.use('/sent', require('./sent.js'));
router.use('/receive', require('./receive.js'));
router.use('/received', require('./received.js'));

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(80);

// TODO add logic to explicity close mongoClient
