const express = require("express");
const router = express.Router();
const mongoose= require('mongoose');
const Ad = require("../models/Ad");

//Fetching all ads
router.get('/allads',(req,res)=>{
    Ad.find()
    .then(ads=>res.json(ads))
    .catch(err=>res.json(err))
    console.log("object")
})

//Fetching only one ad
router.get('/:ad_id',(req,res)=>{
    Ad.findById(req.params.id)
    .then(ad=>res.json(ad))
    .catch(err=>res.json(err))
})

//Post a new ad
router.post('/',(req,res)=>{
    let newAd =new Ad({
        category:req.body.category,
        subCategory:req.body.subCategory,
        adType:req.body.adType,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        roomNumber:req.body.roomNumber,
        livingRoomNumber:req.body.livingRoomNumber,
        bathNumber:req.body.bathNumber,
        grossSize:req.body.grossSize,
        netSize:req.body.netSize,
        heatingType:req.body.heatingType,
        age:req.body.age,
        floor:req.body.floor,
        totalFloor:req.body.totalFloor,
        availableForLoan:req.body.availableForLoan,
        shape:req.body.shape,
        furnished:req.body.furnished,
        fuelType:req.body.fuelType,
        structureType:req.body.structureType,
        structureState:req.body.structureState,
        usageState:req.body.usageState,
        dues:req.body.dues,
        onSite:req.body.onSite,
        siteName:req.body.siteName,
        facade:req.body.facade,
        rentalIncome:req.body.rentalIncome,
        adress:req.body.adress,
        adImages:req.body.adImages,
        interiorFeatures:req.body.interiorFeatures,
        externalFeatures:req.body.externalFeatures,
        location:req.body.location,
        createdAt:Date.now(),
    })

        newAd.save()
        .then(ad=>res.json(ad))
        .catch(err=>res.json(err))
})

//put-update an ad
router.put('/:ad_id',(req,res)=>{

    let updatedAd =new Ad({
        category:req.body.category,
        subCategory:req.body.subCategory,
        adType:req.body.adType,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        roomNumber:req.body.roomNumber,
        livingRoomNumber:req.body.livingRoomNumber,
        bathNumber:req.body.bathNumber,
        grossSize:req.body.grossSize,
        netSize:req.body.netSize,
        heatingType:req.body.heatingType,
        age:req.body.age,
        floor:req.body.floor,
        totalFloor:req.body.totalFloor,
        availableForLoan:req.body.availableForLoan,
        shape:req.body.shape,
        furnished:req.body.furnished,
        fuelType:req.body.fuelType,
        structureType:req.body.structureType,
        structureState:req.body.structureState,
        usageState:req.body.usageState,
        dues:req.body.dues,
        onSite:req.body.onSite,
        siteName:req.body.siteName,
        facade:req.body.facade,
        rentalIncome:req.body.rentalIncome,
        adress:req.body.adress,
        adImages:req.body.adImages,
        interiorFeatures:req.body.interiorFeatures,
        externalFeatures:req.body.externalFeatures,
        location:req.body.location,
        createdAt:Date.now,
    })

    Ad.findByIdAndUpdate(req.params.id,updatedAd)
        .save()
        .then(ad=>res.json(ad))
        .catch(err=>res.json(err))


     
})

module.exports=router;