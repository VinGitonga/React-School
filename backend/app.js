const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')
const methodOverride = require('method-override')


const cors = require('cors')

/**
 * Import the Routes for courses and students
 */


const studentRoutes = require('./controllers/students')

const courseRoutes = require('./controllers/courses')
//set the listening port
const PORTNUM = 5000;


/**
 * connect to mongodb
 */

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/studmern',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).catch((err) => {
    console.log(err)
})

const db = mongoose.connection;
db.on('error',console.log.bind('connection error'))
db.once('open', function(callback){
    console.log('Connection Successful')
})


/**
 * Invoke the express app api
 */

const app = express()


app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())
app.use(bodyParser.json())

app.use(methodOverride('_method'))

app.set('trust proxy',1)


/**
 * Mount the routes
 */
app.use("/api/courses",courseRoutes)
app.use("/api/students",studentRoutes)


/**
 * Catch any authorized errors
 */

app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({
            "error":err.name + ": " + err.message
        })
    } else if(err){
        res.status(400).json({
            "error":err.name + ": " + err.message
        })
        console.log(err)
    }
})

app.listen(PORTNUM, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server started on Port ${PORTNUM}`)
})