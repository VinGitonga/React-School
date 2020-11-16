const Course = require('../models/course')
const express = require('express')
const router = express.Router()


/**
 * create new course
 */

router.get('/all',(req,res)=>{
    Course.find((err, course)=>{
        if(err){
            console.log(err)
        } else{
            res.json(course)
        }
    })
})

router.post('/add',(req,res)=>{
    let newCourse = new Course(req.body)

    newCourse.save()
    .then(course =>{
        res.status(200).json({course: "Course Added Successfully"})
    })
    .catch(err =>{
        res.status(400).send("Adding New Course Failed")
    })
})


router.post("/edit/:id",(req,res)=>{
    Course.findById(req.params.id, (err, course)=>{
        if(!course){
            res.status(404).send("Data not found")
        } else{
            course.name = req.body.name;
            course.department = req.body.department;
            course.intake = req.body.intake;

            course.save()
            .then(course =>{
                res.json("Course Updated Successfully")
            })
            .catch(err =>{
                res.status(400).send("Course Updating Failed")
            })
        }
    })
})


router.delete("/delete/:id",(req,res)=>{
    Course.findOneAndDelete(
        {_id:req.params.id},
        (err, course)=>{
            if(err){
                res.json(err)
            } else{
                res.json("Course Deleted Successfully")
            }
        }
    )
})

module.exports = router;


/*

const create = async(req,res)=>{
    //let {body} = req

    let course = new Course(req.body)

    try {
        let result = await course.save()
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}

const list = async(req,res)=>{
    try {
        let courses = await Course.find()
        res.json(courses)
    } catch (err) {
        console.log(err)
    }
}

const courseByID = async(req,res,next,id)=>{
    try {
        let course = await Course.findById(id)

        if(!course){
            return res.status(400).json({
                error:"Course not found"
            })
            req.course = course
            next()
        }
    } catch (err) {
        return res.status('400').json({
            error:"Could not retrieve the course"
        })
    }
}


const update = async(req,res)=>{
    let course = req.course
    let {body} = req

    course = extend(course, body)

    try{
        let result = await course.save()
        res.json(result)
    } catch(err){
        console.log(err)
    }
}



const remove = async(req,res)=>{
    try{
        let course = req.course
        let deleteCourse = await course.remove()
        res.json(deleteCourse)
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    create,
    list,
    courseByID,
    update,
    remove
}

*/