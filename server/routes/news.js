const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.news.get);

router.post('/create',controllers.news.post); //?


module.exports = router;