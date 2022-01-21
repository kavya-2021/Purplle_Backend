const express = require('express');

const Skin = require('../models/skin.model');

const RequiredProd = require('../models/required.model')

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

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const product = await Skin.findById(req.params.id).lean().exec();

        const Reqproduct = await RequiredProd.create(product);
        
        return res.render("redirected",{
            required : Reqproduct
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;


        

