const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
       type: Number,
       min: 18,
       max: 70,
       required: true
    },
    address:{
        type: String,
        required:false
    }
});

module.exports = mongoose.model('user',schema);