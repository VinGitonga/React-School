import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class AllStudents extends Component{
    constructor(props){
        super(props);
        this.state = {
            students :[]
        }
    }

    componentDidMount(){
        axios
           .get("http://localhost:5000/api/students/all")
           .then(response =>{
               this.setState({
                   students:response.data
               })
           })
           .catch(function(error){
               console.log(error)
           })
    }

    componentDidUpdate(){
        axios
           .get("http://localhost:5000/api/students/all")
           .then(response =>{
               this.setState({
                   students:response.data
               })
           })
           .catch(function(error){
               console.log(error)
           })
    }


    studentList(){
        return this.state.students.map(function(student){
            return (
                <div className="card">
                    <h5 className="card-header">All Students</h5>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Phono No</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{student.name}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.phoneno}</td>
                                        <td>{student.course}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-default" data-toggle="dropdown">
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <Link className="dropdown-item" to={`/students/edit/`+student._id}>
                                                            Edit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`/students/delete/`+student._id}>
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
        return (
            <div className="row">
                {this.studentList()}
            </div>
        )
    }
}



export default AllStudents;