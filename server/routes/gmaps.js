const gmaps_controller = require('../controllers/gmaps_controller');
var express = require('express');
var router = express.Router();

router.get('/',(req,res) => { gmaps_controller.getDirection(req,res) });

module.exports = router;
