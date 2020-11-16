const express = require('express')
const courseCtrl = require('../controllers/courses')


const router = express.Router()

router.route('/api/courses/')
   .get(courseCtrl.list)

router.route('/api/courses/add')
   .post(courseCtrl.create)

router.route('/api/courses/edit/:courseId')
   .put(courseCtrl.update)

router.route('/api/courses/:courseId')
   .delete(courseCtrl.remove)

router.param('courseId',courseCtrl.courseByID)


module.exports = router;