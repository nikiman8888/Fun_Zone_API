const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const newsSchema = new Schema({
    title :{
        type:String,
    },
    content:{
        type:String,
    },
    imageUrl:{
        type:String
    },
    date:{
        type:Date
    }
});

module.exports = new Model('News', newsSchema);