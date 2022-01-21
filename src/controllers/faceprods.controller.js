const express = require('express');

const Face = require('../models/face.model');

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const FaceMakeup = await Face.find().lean().exec();
        return res.status(200).send(FaceMakeup);

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const face = await Face.create(req.body);
        return res.status(201).send(face);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;