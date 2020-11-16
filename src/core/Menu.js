import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


export default  class Menu extends Component{
    render(){
        return (
            <div>
                <nav className="navbar p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                        <Link to={"/"} >
                            Home
                        </Link>
                    </div>
                    <div className="navbar-menu-wrapper flex-glow d-flex align-items-stretch">
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown d-none d-lg-block">
                                <Link to={"/courses"}>
                                    Courses
                                </Link>
                            </li>
                            <li className="nav-item dropdown d-none d-lg-block">
                                <Link  to={"/students"}>
                                    Students
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}


