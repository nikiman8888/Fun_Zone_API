const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.coeficient.get);

router.post('/',controllers.coeficient.post);


module.exports = router;