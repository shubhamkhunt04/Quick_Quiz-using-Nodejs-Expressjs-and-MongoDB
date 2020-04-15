const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    A: {
        type: String,
    },
    B: {
        type: String,
    },
    C: {
        type: String,
    },
    D: {
        type: String,
    }
});


const quizSchema = new Schema({
    qustion: {
        type: String,
        required: true,
        unique: true
    },
    answer:{
        type:String,
        required:true
    },
    options: [optionSchema]
}, {
    timestamps: true
});

var Quizs = mongoose.model('quiz', quizSchema);

module.exports = Quizs

