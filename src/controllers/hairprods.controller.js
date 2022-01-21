const express = require('express');

const Hair = require('../models/hair.model');

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const hairMakeup = await Hair.find().lean().exec();
        return res.status(200).send(hairMakeup);

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const hair = await Hair.create(req.body);
        return res.status(201).send(hair);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;