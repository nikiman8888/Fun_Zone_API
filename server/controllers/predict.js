const models = require('../models');

module.exports = {

    get: (req, res, next) => {   // take only products created by user

        // const userId = req.user;

        models.Predict.find()
            .then(predicts => res.send(predicts))
            .catch(next)
    },

    post: (req, res, next) => {
         console.log('here');
        const {levelAuth,homeTeam, guestTeam, predict, day,month,year,league} = req.body;
        models.Predict.create({levelAuth,homeTeam, guestTeam, predict, day,month,year,league})
            .then(created => {
                res.send(created);

            })
            .catch(next)
    }
};