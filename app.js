const express = require('express');
const bookRouter = require('./routes/book');

const app = express();

app.use(express.json());
app.use('/books',bookRouter);

app.use((req,res,next)=>{
    res.status(404).json({error:req.url+' API not supported'});
});


app.use((err,req,res,next)=>{
    if(err.message=='Not Found'){
        res.status(404).json({error:err.message});
    }else{
        res.status(500).json({error:'Internal Server Error! Please contact Administrator'});
    }
});

app.listen(3000,()=>{
    console.log("Server Running on 3000");
});