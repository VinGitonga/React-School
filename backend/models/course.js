const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    department:{
        type:String,
        trim:true,
        required:true
    },
    intake:{
        type:Number,
        trim:true,
        required:true
    }
})


const Course = mongoose.model('Course',courseSchema)
module.exports = Course