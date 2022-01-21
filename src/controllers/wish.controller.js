const express = require('express');

const Wish = require('../models/wish.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const wish = await Wish.find().lean().exec();
        return res.render("wishlist",{
            wish : wish
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const wish = await Wish.create(req.body);

        return res.status(201).send(wish);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const wish = await Wish.findById(req.params.id).lean().exec();

        const Reqwish = await RequiredProd.create(wish);
        
        return res.render("redirected",{
            required : Reqwish
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;