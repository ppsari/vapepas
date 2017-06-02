var express = require('express');
var router = express.Router();

const ongkir_controller = require('../controllers/ongkir_controller.js');
//
// router.get('/', function(req, res, next) {
//   res.send('index');
// });

router.get('/province', ongkir_controller.getProvince);
router.get('/province/:id', ongkir_controller.findProvince);
router.get('/city/:id', ongkir_controller.getCities);
// router.get('/subdistrict/:id', ongkir_controller.getSubdistricts);
router.post('/cost', ongkir_controller.getCost);

module.exports = router;
