import React from 'react'
import user from '../../assets/svg/user.svg'
import bars from '../../assets/svg/bars.svg'
import logo from '../../assets/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {


  
  
  return (
    <>
    <div className="navbar">
        <div className="svg-sidebar">
        <img src={bars} alt="" id="bar" className="image-svg user"/>
   
            <div className="logo"><img className="logo" src={logo} alt=""/></div>

      
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newarrivals">Find Product</Link></li>
        </ul>

       <div className="visible">
            {!localStorage.getItem('token')? <Link to='/login'><img className="image-svg user" src={user} alt=""/>Login</Link>:<Link to='/user'><img className="image-svg user" src={user} alt=""/>User</Link>}
          
            
        </div>

        <div className="media-query" id="dropdown">
            <div className="navbar-container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Find Products</Link></li>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar