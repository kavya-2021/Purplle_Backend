const express = require('express');

const Face = require('../models/face.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const FaceMakeup = await Face.find().lean().exec();
        return res.render("faceproducts",{
            face : FaceMakeup 
        });

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

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const product = await Face.findById(req.params.id).lean().exec();

        const Reqproduct = await RequiredProd.create(product);
        
        return res.render("redirected",{
            required : Reqproduct
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;