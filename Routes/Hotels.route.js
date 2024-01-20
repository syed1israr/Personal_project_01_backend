const express= require('express');
const router=express.Router();
const hotels=require('../Models/Hotels.model.js');

router.route('/').get( async(req,res)=>{
    try {
            const hotelCategory=req.query.category;
            let hotel;
            if(hotelCategory){
                hotel=await hotels.findOne({category:hotelCategory});
            }else{
                hotel=await hotels.findOne({});
            }
        hotel ? res.json(hotel) :res.status(404).json({message:"No data Found"})
    } catch (error) {
        console.log("This error is from hotesl.routes.js",error)
    }
})

module.exports=router;