'use strict'
const express = require('express');
let router = express.Router();
let transactions_controller = require('../controllers/transaction_controller.js');

router.get('/:id',transactions_controller.findOneTransaction);
router.get('/', transactions_controller.listTransaction);
router.delete('/:id',transactions_controller.destroyTransaction);
router.post('/',transactions_controller.insertTransaction);


module.exports = router;