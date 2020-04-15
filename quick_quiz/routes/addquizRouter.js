const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");

const Quiz = require("../models/addquizs");


const quizs = express.Router();

quizs.use(bodyParser.json());

quizs.route('/')
.get(authenticate.verifyUser,(req,res,next)=>{
    Quiz.find({})
    .then((quiz)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
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
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation dose not support on /addquiz');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
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
.get(authenticate.verifyUser,(req,res,next)=>{
    Quiz.findById(req.params.quizId)
    .then((quiz)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /addquiz/'+req.params.dishId);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
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
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
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