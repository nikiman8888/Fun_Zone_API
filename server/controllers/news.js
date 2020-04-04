const models = require('../models');

module.exports = {

    get: (req, res, next) => {   // take only products created by user

       // const userId = req.user;

        models.News.find()
        .sort({date:-1})
            .then(news=> res.send(news))
            .catch(next)
    },

    post :(req,res,next) =>{
       // console.log('here');
       //const date = Date.now().toLocaleString();
       const {title,content,imageUrl,date} = req.body;
       models.News.create({title,content,imageUrl,date})
       .then(created =>{
           res.send(created);
           
       })
       .catch(next)   
    }
};