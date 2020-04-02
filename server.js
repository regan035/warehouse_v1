const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

//routes
const inventory = require('./routes/router.js');
app.use('/inventory',inventory);

const authRoutes = require('./routes/auth.js');
app.use('/auth', authRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory';
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useFindAndModify: false
},(err)=>{
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    else
        console.log('successfully connected to the database');
});

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log('app is running');
});