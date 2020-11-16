const express = require('express')
const studentCtrl = require('../controllers/students')

const router = express.Router()

router.route('/api/students/')
   .get(studentCtrl.list)

router.route('/api/students/add')
   .post(studentCtrl.create)

router.route('/api/students/edit/:studentId')
   .put(studentCtrl.update)

router.route('/api/students/:studentId')
   .delete(studentCtrl.remove)



router.param('studentId',studentCtrl.studentByID)

module.exports = router;
   