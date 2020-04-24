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
    quizname: {
        type: String
    },
    qusans:[{
        qustion: {
            type: String,
            required:true
        },
        answer: {
            type: String,
            required: true
        },
        options: [optionSchema]
    }]

}, {
    timestamps: true
});

var Quizs = mongoose.model('quiz', quizSchema);

module.exports = Quizs

/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/