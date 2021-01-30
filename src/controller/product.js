const Product = require('../models/product')
const shortid =require("shortid");
const { default: slugify } = require('slugify');

exports.createproduct = (req, res) =>{
    // res.status(200).json({ file: req.files, body:req.body });
    res.setHeader("Access-Control-Allow-Origin", "*")
const {
    name,price,writter, publication ,category,quantity,tag, picname
}= req.body;

 

   const productpicture = req.file;
    
 
    const product = new Product({
        name ,
         slug:slugify(`${name}`),
        price ,
        tag,
        writter  ,
        publication ,
        productpicture,
        picname ,
        quantity,
        // createdBy:req.user._id,
        category,
    
    })
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error})
        if(product) return res.status(200).json({product})
    }))
}; 