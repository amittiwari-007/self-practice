const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = express();

const uri = process.env.DATABASE;
const port = process.env.PORT;
mongoose.connect(uri).then(()=>{
    console.log("database connected successfully");
})
app.listen(port,()=>{
    console.log("server connected");
})

