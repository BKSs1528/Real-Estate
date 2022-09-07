const mongoose = require("mongoose");

const propSchema = new mongoose.Schema({
    mail:{
        type:String,
        required:true
    },
    price:{
        type:Number,
    },
    Negotiable:{
        type:String,
    },
    Ownership:{
        type:String,
    },
    PropertyType:{
        type:String,
        // required:true
    },
    PropertyAge:{
        type:String,
    },
    PropertyApproved:{
        type:String,
    },
    PropertyDescription:{
        type:String,
    },
    Views:{
        type:Number,
        
    },
    BankLoan:{
        type:String,
    },
    Length:{
        type:Number,
    },
    Breadth:{
        type:Number,
    },
    TotalArea:{
        type:Number,
        // required:true
    },
    AreaUnit:{
        type:String,
    },
    NoOfBHK:{
        type:Number,
    },
    NoOfFloor:{
        type:String,
    },
    Attached:{
        type:String,
    },
    WesternToilet:{
        type:String,
    },
    Furnished:{
        type:String,
    },
    CarParking:{
        type:String,
    },
    Lift:{
        type:String,
    },
    Electricity:{
        type:String,
    },
    Facing:{
        type:String,
    },
    Name:{
        type:String,
    },
    Mobile:{
        type:Number,
        maxLength :10,
        minLength:10
        // required:true
    },
    PostedBy:{
        type:String,
    },
    DaysLeft:{
        type:Number,
        // required:true
    },
    SaleType:{
        type:String,
    },
    FeaturedPackage:{
        type:String,
    },
    PPDPackage:{
        type:String,
    },
    Photo:{
        type:String,
    },
    Email:{
        type:String,
    },
    City:{
        type:String,
    },
    Area:{
        type:String,
    },
    Pincode:{
        type:Number,
        minLength:6,
        maxLength:6
    },
    Address:{
        type:String,
    },
    Landmark:{
        type:String,
    },
    Latitude:{
        type:String,
    },
    Longitude:{
        type:String,
    }
})

const propModel = mongoose.model("prop",propSchema);
module.exports = propModel;