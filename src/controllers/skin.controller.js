const express = require('express');

const Skin = require('../models/skin.model');

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const skincare = await Skin.find().lean().exec();

        return res.render("skinproducts",{
            skin : skincare 
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const skin = await Skin.create(req.body);

        return res.status(201).send(skin);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;


        

