var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/user_controller');

/* GET users listing. */
router.get('/', user_controller.getUsers);

router.post('/',user_controller.createUser);

module.exports = router;
