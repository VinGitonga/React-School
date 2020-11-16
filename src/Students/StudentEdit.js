import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


class StudentEdit extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeReligion = this.onChangeReligion.bind(this)
        this.onChangeDoB = this.onChangeDoB.bind(this)
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeGuardian = this.onChangeGuardian.bind(this)
        this.onChangeAdmission = this.onChangeAdmission.bind(this)
        this.onChangeCourse = this.onChangeCourse.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name:"",
            gender: "",
            religion:"",
            dob:"",
            phoneno:"",
            address:"",
            email:"",
            guardianname:"",
            dateofadmission:"",
            course:[],
            courseList:[]
        }
    }

    componentDidMount(){
        axios
          .get("http://localhost:5000/api/courses/all")
          .then(response=>{
              this.setState({
                  courseList:response.data
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

    onChangeGender(e){
        this.setState({
            gender:e.target.value
        })
    }

    onChangeReligion(e){
        this.setState({
            religion:e.target.value
        })
    }

    onChangeDoB(e){
        this.setState({
            dob:e.target.value
        })
    }

    onChangePhoneNo(e){
        this.setState({
            phoneno:e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onChangeGuardian(e){
        this.setState({
            guardianname:e.target.value
        })
    }

    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }

    onChangeAdmission(e){
        this.setState({
            dateofadmission:e.target.value
        })
    }

    onChangeCourse(e){
        this.setState({
            course:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const updateStud = {
            name:this.state.name,
            gender:this.state.gender,
            religion:this.state.religion,
            dob:this.state.dob,
            phoneno:this.state.phoneno,
            address:this.state.address,
            email:this.state.email,
            guardianname:this.state.guardianname,
            dateofadmission:this.state.dateofadmission,
            course:this.state.course
        }

        axios
          .post("http://localhost:5000/api/students/edit/"+this.props.match.params.id,updateStud)
          .then(res => console.log(res.data))

        this.props.history.push("/students")
    }

    render(){
        return (
            <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Add New Student</h4>
                    <form className="form-sample" onSubmit={this.onSubmit}>
                        <p className="card-description">Personal Info</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} placeholder='Student Name' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Gender</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.onChangeGender}>
                                            <option>Choose ...</option>
                                            <option value={this.state.gender}>Male</option>
                                            <option value={this.state.gender}>Female</option>
                                            <option value={this.state.gender}>Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Religion</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.onChangeReligion}>
                                            <option>Choose ...</option>
                                            <option value={this.state.religion}>Christian</option>
                                            <option value={this.state.religion}>Hindu</option>
                                            <option value={this.state.religion}>Muslim</option>
                                            <option value={this.state.religion}>Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-9">
                                        <input type="date" className="form-control" placeholder="01-01-1999" name="dob" value={this.state.dob} onChange={this.onChangeDoB} required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-description">Contact Details</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Phone No</label>
                                    <div className="col-sm-9">
                                        <input type="tel" className="form-control" placeholder="+254722222222" name="phoneno" value={this.state.phoneno} onChange={this.onChangePhoneNo} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" placeholder="john.doe@outlook.com" name="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Guardian Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Guardian's Name" name="guardianname" value={this.state.guardianname} onChange={this.onChangeGuardian} required/>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Date Of Admission</label>
                                    <div className="col-sm-9">
                                        <input type="date" className="form-control" placeholder="06-11-2020" name="dateofadmission" value={this.state.dateofadmission} onChange={this.onChangeAdmission} required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Course</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" onChange={this.onChangeCourse}>
                                            <option>Choose ...</option>
                                            {this.state.courseList.map(course =>{
                                                return(
                                                    <option value={course.name} key={course._id}>
                                                        {course.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-control row">
                                    <label className="col-sm-3 col-form-label">Address</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name="address" onChange={this.onChangeAddress} value={this.state.address} placeholder="Pipeline, Nakuru" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <button className="btn btn-default btn-block btn-lg">Save Details &nbsp;
                               <i className="fa fa-paper-plane fa-lg"></i>
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default StudentEdit;