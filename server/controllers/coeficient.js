const models = require('../models');

module.exports = {

    get: (req, res, next) => {   // take only products created by user

       // const userId = req.user;

        models.Coeficient.find()
            .then(coeficents => res.send(coeficents))
            .catch(next)
    },

    post :(req,res,next) =>{
       // console.log('here');
       const {formulaResult,finalEnd,league} = req.body;
       models.Coeficient.create({formulaResult,finalEnd,league})
       .then(created =>{
           res.send(created);
           
       })
       .catch(next)   
    }
};