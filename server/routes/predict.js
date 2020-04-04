const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.predict.get);

router.post('/create',controllers.predict.post); //?


module.exports = router;