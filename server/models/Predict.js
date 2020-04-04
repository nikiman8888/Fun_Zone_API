const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const predictSchema = new Schema({
    levelAuth:{
        type:String
    },
    homeTeam:{
        type:String,
    },
    guestTeam:{
        type:String
    },
    predict:{
        type:String
    },
    finalEnd:{
        type:String
    },
    day:{
        type:String
    },
    month:{
        type:String
    },
    year:{
        type:String
    },
    league:{
        type:String
    }
});

module.exports = new Model('Predict', predictSchema);