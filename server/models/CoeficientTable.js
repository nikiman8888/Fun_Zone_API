const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const formulaSchema = new Schema({
    formulaResult :{
        type:String,
    },
    finalEnd:{
        type:String,
    },
    league:{
        type:String
    }
});

module.exports = new Model('Formula', formulaSchema);