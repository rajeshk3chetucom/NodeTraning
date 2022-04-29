const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.get('/hello',
(req,res,next)=>{
    // Logic 
    console.log('req auth-->',req.auth)
    res.send("Connected to the Hello.")
})
app.get('/',(req,res,next)=>{
    // Logic 
    console.log('req auth-->',req.auth)
    res.send("Connected to the server.")
})

app.post('/form',(req,res,next)=>{
    console.log('Req body',req.body);
    res.send('We are in  the Form')
})


app.listen(8000,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('We are listing on port 8000');
})