const mongoose = require("mongoose");
const { model } = require("./user");

const categoryschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    categoryImage:{
        type:String,
    },
    
        parentid:{
            type:String,
        
        }
    
}, {
    timestamps:true
})

module.exports = mongoose.model('Category', categoryschema);