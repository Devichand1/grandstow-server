const Product = require('../models/product')
const shortid =require("shortid");
const { default: slugify } = require('slugify');

exports.createproduct = function (req, res) {
    // res.status(200).json({ file: req.files, body:req.body });
const {
    name,price,description,category,quantity,createdBy
}= req.body;

let productpicture=[];
if(req.files.length >0){
    productpicture= req.files.map(file=>{
        return {img:file.filename}
    })
}

    const product = new Product({
        name:req.body.name,
        slug:slugify(name),
        price,
        description,
        productpicture,
        quantity,
        createdBy:req.user._id,
        category
    
    })
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error})
        if(product) return res.status(200).json({product})
    }))
}; 