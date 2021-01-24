const mongoose = require("mongoose");


const productschema = new mongoose.Schema({
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
    
    price:{
        type:Number,
        required:true,

    },
    writter:{
        type:String,
        required:true,
        trim:true
    },
    publication:{
        type:String,
        required: true,

    },
    quantity:{
         type:Number,
         required:true,

    },
    offer:{
        type:Number
    },
    productpicture:[
        {
            img:{
                type:String
            }   
            
        }
        
    ],

    reviews:[
        {
            userid:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
            review:String
        }
    ],
    category:{
        type:String, 
      
        required:true
    },
    tag:{
        type:String, 
        
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User',
       
    },
    updatedAt: Date,

    
}, {
    timestamps:true
})

module.exports = mongoose.model('Product', productschema);