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
    // console.log(req.body.quizname)
    // console.log(req.body);
    Quiz.findOne({quizname:req.body.quizname})
    .then((quiz)=>{
        if(quiz==null)
        {
            console.log("null")
            Quiz.create(req.body)
            .then((quiz)=>{
                // console.log("quiz Created ",quiz);
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(quiz);
            },(err)=>console.log(err));

        }else
        {
            // console.log(quiz.qusans)
            // console.log(req.body.qusans)
            quiz.qusans.push(req.body.qusans);
            // quiz.qusans.push(req.quiz.qusans);
            // console.log(quiz.qusans);
            // console.log(req.body.qusans);
            

            quiz.save((err,res)=>{
                if(err) console.log(err)
                else console.log("successfully push");
            })
            res.json(quiz);
        } 
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
    Quiz.findOne({quizname : req.params.quizId})
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
    res.statusCode = 403;
    res.end('PUT operation not supported on /addquiz/'+req.params.dishId);
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Quiz.findOneAndRemove(req.params.quizId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },
    (err)=>next(err))
.catch((err)=>next(err));
});


module.exports = quizs;