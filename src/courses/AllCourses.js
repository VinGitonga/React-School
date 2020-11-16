import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class AllCourses extends Component{
    constructor(props){
        super(props)
        this.state = {
            courses:[]
        }
    }

    componentDidMount(){
        axios
           .get("http://localhost:5000/api/courses/all")
           .then(response =>{
               this.setState({
                   courses: response.data
               })
           })
           .catch(function(error){
               console.log(error)
           })
    }

    componentDidUpdate(){
        axios
           .get("http://localhost:5000/api/courses/all")
           .then(response =>{
               this.setState({
                   courses:response.data
               })
           })
           .catch(function(err){
               console.log(err)
           })
    }

    courseList(){
        return this.state.courses.map(function(course){
            return(
                <div className="card">
                    <h5 className="card-header">All Courses</h5>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Intake</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{course.name}</td>
                                        <td>{course.department}</td>
                                        <td>{course.intake}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-default" data-toggle="dropdown">
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <Link className="dropdown-item" to={`/courses/edit/`+course._id} >Edit</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={"/courses/delete/"+course._id}>
                                                            Delete
                                                        </Link>
                                                    </li>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="row">
                {this.courseList()}
            </div>
        )
    }
}


export default AllCourses;