import React, { Component } from 'react'
import "./static/Nav.css";
import image from './static/image.png'
class Navbar extends Component
{
    render()
    {
        return(
                <div className="menubar">
                    <nav className="navbar bg-dark justify-content-between">
                    <div>
                        <Link to='/dashboard2' className="navbar-brand"><img src={image} className="pl-3" alt="newimage" style={{width:"200px",height:"60px"}}/></Link>
                    </div>
                    <div className="nav-item dropdown mt-2 ml-3">
                    <button className="btn btn-danger nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">aman</button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Home</a>
                    <a className="dropdown-item" href="#">Signout</a>
                    </div>
                    </div>
                </nav>
                </div>
        )
    }
}
export default Navbar