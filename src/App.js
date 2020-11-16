import React from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import CourseAdd from "./courses/CourseAdd";
import CourseDelete from './courses/CourseDelete'
import CourseEdit from './courses/CourseEdit'
import AllCourses from './courses/AllCourses'

import StudentAdd from './Students/StudentAdd'
import StudentDelete from './Students/StudentDelete'
import StudentEdit from './Students/StudentEdit'
import AllStudents from './Students/AllStudents'
import Menu from './core/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () =>(
    <BrowserRouter>
        <div>
            <Menu/>
            <Switch>
                <Route path="/" exact component={Menu}/>
                <Route path="/courses" exact component={AllCourses}/>
                <Route path="/courses/add" exact component={CourseAdd}/>
                <Route path="/courses/edit/:id" exact component={CourseEdit}/>
                <Route path="/course/delete/:id" exact component={CourseDelete}/>
                <Route path="/students" exact component={AllStudents}/>
                <Route path="/students/add" exact component={StudentAdd}/>
                <Route path="/students/edit/:id" exact component={StudentEdit}/>
                <Route path="/students/delete/:id" exact component={StudentDelete}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default App