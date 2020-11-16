import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class CourseEdit extends Component{
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

    componentDidMount(){
        axios
           .get("http://localhost:5000/api/courses/edit/"+this.props.match.params.id)
           .then(response =>{
               this.setState({
                   name:response.data.name,
                   department:response.data.department,
                   intake:response.data.intake
               })
           })
           .catch(function(error){
               console.log(error)
           })
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
        const updateCourse = {
            name:this.state.name,
            department:this.state.department,
            intake:this.state.intake
        }


        axios
          .post("http://localhost:5000/api/courses/edit/"+this.props.match.params.id,updateCourse)
          .then(res => console.log(res.data))

        this.props.history.push("/courses")
    }
    render(){
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Update Course</h5>
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
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-space btn-primary">Update Course</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default CourseEdit;