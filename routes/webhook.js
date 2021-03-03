const express = require('express');
const router = express.Router();

const webhookHandler = require('./handler/webhook');

/* GET webhook listing. */
router.post('/', webhookHandler.webhook);

module.exports = router;
