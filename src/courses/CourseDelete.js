import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class CourseDelete extends Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios
          .delete("http://localhost:5000/api/courses/"+this.props.match.params.id)
          .then(res => {})
          .catch(function(error){
              console.log(error)
          })
    }

    onSubmit(e){
        e.preventDefault()


        axios.delete(
            "http://localhost:5000/api/courses/delete/"+this.props.match.params.id
        )
        .catch(function(error){
            console.log(error)
        })

        this.props.history.push("/courses")
    }

    render(){
        return(
            <div>
                <h3>Course Deleted Successfully</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="button" className="btn btn-primary" value="Back to Courses"/>
                </form>
            </div>
        )
    }
}

export default CourseDelete;