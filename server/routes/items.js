var express = require('express');
var router = express.Router();

const item_controller = require('../controllers/item_controller.js');

// router.get('/', function(req, res, next) {
//   res.send('index');
// });

router.get('/category/:cat', item_controller.findByCategory)
router.get('/:id', item_controller.findOneItem);
router.get('/', item_controller.getAllItem);
router.post('/',item_controller.insertItem);
router.put('/:id',item_controller.updateItem);
router.delete('/:id',item_controller.destroyItem);

module.exports = router;
