const { Router } = require("express");
const express  = require("express");
const multer = require("multer");

const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createproduct } = require("../controller/product");
const router = express.Router();
const shortid = require('shortid');
const path = require('path');
const { getcategories } = require("../controller/category");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.dirname(__dirname), "uploads"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortid.generate() + "-" + file.originalname);
//   },
// });
const dev = 'dev';
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null,path.join(path.dirname(__dirname), "uploads"))
   },
   filename: function (req, file, cb) {
     cb(null, file.originalname)
   }
 })
  
 var upload = multer({ storage })


 router.post('/product/create',upload.single('productpicture'), createproduct );
// router.post('/product/create' , createproduct );
 router.get('/product/getproducts', getcategories );

    module.exports = router;