const express = require('express');
const router = express.Router();

const orderPaymentsHandler = require('./handler/order-payment');

/* GET orderPayments listing. */
router.get('/', orderPaymentsHandler.orderPayment);

module.exports = router;
