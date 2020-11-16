import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class CourseAdd extends Component{
    constructor(props){
        super(props)


        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDept = this.onChangeDept.bind(this)
        this.onChangeIntake = this.onChangeIntake.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {
            name:"",
            department:"",
            intake:"",
            error:{}
        }
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeDept(e){
        this.setState({
            department:e.target.value
        })
    }

    onChangeIntake(e){
        this.setState({
            intake:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault()


        const {name, department, intake} = this.state


        if(name === ""){
            this.setState({
                errors:{
                    name:"Course Name is required"
                }
            })
            return
        }

        if(department === ""){
            this.setState({
                errors:{
                    department:"Department Name is Required"
                }
            })
            return
        }

        if(intake === ""){
            this.setState({
                errors:{
                    intake:"Intake is required"
                }
            })
            return
        }


        console.log(`Form submitted successfully`)
        console.log(`Course Name: ${this.state.name}`)
        console.log(`Dept: ${this.state.department}`)
        console.log(`Intake : ${this.state.intake}`)


        const newCourse = {
            name: this.state.name,
            department:this.state.department,
            intake:this.state.intake
        }

        axios
           .post("http://localhost:5000/api/courses/add",newCourse)
           .then(res => console.log(res.data))


        this.props.history.push("/courses")

        this.setState({
            name:"",
            department:"",
            intake:""
        })
    }


    render(){
        //const {errors} = this.state

        return(
            <>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Add New Course</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Name</label>
                                <div className="col-12 col-sm-8 col-lg-6">
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} placeholder="Course Name" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Department</label>
                                <div className="col-12 col-sm-8 col-lg-6">
                                    <input type="text" className="form-control" name="department" value={this.state.department} onChange={this.onChangeDept} placeholder="Course Dept" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12 col-sm-3 col-form-label text-sm-right">Intake</label>
                                <div className="col-12 col-sm-8 col-lg-6">
                                    <input type="number" className="form-control" name="intake" value={this.state.intake} onChange={this.onChangeIntake} placeholder="Course Intake" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col col-sm-10 col-lg-9 offset-sm-1 offset-lg-0">
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-space btn-primary">Add Course</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default CourseAdd;