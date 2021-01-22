const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

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



app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'world'}));
});
app.use('/api', function (req, res) {
    res.send(JSON.stringify({ Hellosdcsc: 'world'}));
   });
app.listen(port, function () {
 console.log('Example app listening on port !');
});

