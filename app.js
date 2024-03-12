const express = require('express');
const app = express();
app.use(express.json());

const func=(req,res)=>{
    res.send("AMIT");
}
// app.use('/',)
app.get('/',func);
app.get('/app/:am',(req,res)=>{
    const params = req.params;
    console.log(params);
    res.send("hey /app")
})
app.post('/post/:id/:userid',(req,res)=>{
    const data  = req.body;
    const query = req.query;
    const params = req.params;
    console.log(data,query,params);
    res.status(200).json({
        data
    })
})

module.exports = app;