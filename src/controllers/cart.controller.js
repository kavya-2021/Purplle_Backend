const express = require('express');

const Cart = require('../models/cart.model');

const RequiredProd = require('../models/required.model')

const router = express.Router();

router.get("/",async(req,res)=>{
    try{

        const cart = await Cart.find().lean().exec();
        return res.render("cart",{
            cart : cart
        });

    }catch(err){
        return res.status(500).send({ error: err.message});
    }
});

router.post("/",async(req,res)=>{
    try{

        const cart = await Cart.create(req.body);

        return res.status(201).send(cart);

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{

        const del = await RequiredProd.deleteMany({});
        
        const cart = await Cart.findById(req.params.id).lean().exec();

        const Reqcart = await RequiredProd.create(cart);
        
        return res.render("cart",{
            cartProducts : Reqcart
        });

    }catch(err){
        return res.status(500).send({error: err.message});
    }
});

module.exports = router;