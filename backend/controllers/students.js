const express = require('express')
const router = express.Router()
const Student = require('./../models/student')

/**
 * get all students
 */

router.get('/all',(req,res)=>{
    Student.find((err, student)=>{
        if(err){
            console.log(err)
        } else{
            res.json(student)
        }
    })
})


/**
 * Add New student
 */

router.post("/add",(req,res)=>{
    let newStud = new Student(req.body)

    newStud.save()
    .then(student => {
        res.status(200).json({student:"Student Added Successfully"})
        console.log("Stud added");
    })
    .catch(err => {
        res.status(400).send("Adding New Student Failed")
        console.log("Failed");
    })
})


/**
 * Update Student details
 */

router.post("/edit/:id",(req,res)=>{
    Student.findById(req.params.id, (err,student)=>{
        if(!student){
            res.status(404).send("Data not found")
        } else{
            student.name = req.body.name;
            student.gender = req.body.gender;
            student.religion = req.body.religion;
            student.dob = req.body.dob;
            student.phoneno = req.body.phoneno;
            student.address = req.body.address;
            student.email = req.body.email;
            student.guardianname = req.body.guardianname;
            student.dateofadmission = req.body.dateofadmission;
            student.course = req.body.course;

            student.save()
            .then(student => {
                res.json("Student Details Updated Successfully")
            })
            .catch(err =>{
                res.status(400).send("Student Details Updating Failed")
            })
        }
    })
})


/**
 * Delete student details
 */

router.delete("/delete/:id",(req,res)=>{
    Student.findOneAndDelete(
        {_id: req.params.id},
        (err, student)=>{
            if(err){
                res.json(err)
            } else{
                res.json("Student Details Deleted Successfully")
            }
        }
    )
})


module.exports = router;


/*
const create = async(req,res)=>{
    let {body} = req
    
    let student = new Student(body)

    try {
        let result = await student.save()
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}


const list = async(req,res)=>{
    try {
        let students = await Student.find()
        res.json(students)
    } catch (err) {
        console.log(err)
    }
}


const studentByID = async(req,res,next,id)=>{
    try {
        let student = await Student.findById(id)

        if(!student){
            return res.status(400).json({
                error:"Student not found"
            })

            req.student = student
            next()
        }
    } catch (err) {
        return res.status('400').json({
            error:"Could not retrieve the student"
        })
    }
}


const update = async(req,res)=>{
    let student = req.student
    let {body} = req

    student = extend(student,body)

    try {
        let result = await student.save()
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}


const remove = async(req,res)=>{
    try {
        let student = req.student
        let deleteStudent = await student.remove()
        res.json(deleteStudent)
    } catch (err) {
        console.log(err)
    }
}




module.exports = {
    create,
    list,
    update,
    remove,
    studentByID
}
*/