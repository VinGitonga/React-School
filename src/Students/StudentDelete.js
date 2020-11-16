import React, {Component} from 'react'
import axios from 'axios'

class StudentDelete extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios
          .delete("http://localhost:5000/api/students/"+this.props.match.params.id)
          .then(response => {})
          .catch(function(error){
              console.log(error)
          })
    }

    onSubmit(e){
        e.preventDefault()
        axios.delete(
            "http://localhost:5000/api/students/delete/"+this.props.match.params.id
        );

        this.props.history.push("/students")
    }

    render(){
        return(
            <div>
                <h1>Student Data Deleted Successfully</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Back to Students" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}


export default StudentDelete