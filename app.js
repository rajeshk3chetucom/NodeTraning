const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./modal/user');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.get('/hello/:userId',
(req,res,next)=>{
    // Logic 
    const name = req.query.name ?req.query.name :false
    console.log('Params', req.params.userId);
    console.log('Query', req.query);
    console.log('req auth-->',req.auth)
    res.send("Connected to the Hello.")
})
app.get('/',(req,res,next)=>{
    // Logic 
    console.log('req auth-->',req.auth)
    res.send("Connected to the server.")
});
app.post('/adduser',async (req,res,next)=>{
    const {name,age,address} = req.body;
    // validation
    try {
       const reqPre = new userModel({name, age, address});
       const user = await reqPre.save();
       console.log('user', user)
       res.send(user) 
    } catch (error) {
        console.log('Error', error);
    }

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
    mongoose.connect('mongodb+srv://shubhaml:chetu123@cluster0.nb04r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(data =>{
        console.log('We are connected to the Database.')
    }).catch(error=>{
        console.log('Error',error);
    })
})

