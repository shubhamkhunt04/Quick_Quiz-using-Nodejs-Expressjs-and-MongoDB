const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Quiz = require("../models/addquizs");


const quizs = express.Router();

quizs.use(bodyParser.json());

quizs.route('/')
.get((req,res,next)=>{
    Quiz.find({})
    .then((quiz)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    Quiz.create(req.body)
    .then((quiz)=>{
        console.log("quiz Created ",quiz);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },
        (err)=>next(err))
    .catch((err)=>next(err));
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation dose not support on /addquiz');
})
.delete((req,res,next)=>{
    Quiz.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },
    (err)=>next(err))
.catch((err)=>next(err));
});



quizs.route('/:quizId')
.get((req,res,next)=>{
    Quiz.findById(req.params.quizId)
    .then((quiz)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+req.params.dishId);
})
.put((req,res,next)=>{
    Quiz.findByIdAndUpdate(req.params.quizId,{
        $set:req.body
    },{new :true})
    .then((quiz)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req,res,next)=>{
    Quiz.findByIdAndRemove(req.params.quizId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },
    (err)=>next(err))
.catch((err)=>next(err));
});


module.exports = quizs;