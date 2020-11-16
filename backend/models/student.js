const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    guardianname:{
        type:String,
        required:true,
    },
    dateofadmission:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true
    }
})



const Student = mongoose.model('Student',studentSchema)

module.exports = Student