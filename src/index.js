const express = require('express');
const port = process.env.PORT || 2000;
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const env = require("dotenv");
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const cart = require('./models/cart');
const product = require('./models/product');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path')
env.config();
mongoose.connect(
    ` mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.fuodx.mongodb.net/${process.env.MONDO_DB_DATATBASE }?retryWrites=true&w=majority`, 
     { useNewUrlParser: true, 
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false
     }).then(()=>{
         console.log("DATABASE CONNECTED SUCCESSFULLY");
         
     }
     )
     .catch(err => console.log(err));

    //  app.use(multer().array())
    
app.use(cors());
app.use( express.json());
app.use('/public', express.static(path.join(__dirname,'uploads')))
app.get('/category/getcategory', function (req, res) {
 res.send('res');
});
app.get('/getproducts', (req, res) => {

    product.find(function(err, cart) {

        if (err) return console.error(err);

        res.send(cart);

    });

});

app.use('/api', authRoutes);
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.listen(port, function () {
 console.log('Example app listening on port !');
});

