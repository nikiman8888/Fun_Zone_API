const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);
    app.use('/api/coeficient',router.coeficient);
    app.use('/api/news',router.news);
    app.use('/api/predict',router.predict);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong.</h1>'))
};