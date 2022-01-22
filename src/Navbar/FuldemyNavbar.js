import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

export default function Navbar(){
   

    const isUserLoggedId  = () => {
        const accessToken = localStorage.getItem("token")
        if(accessToken) {
            return true
    
        } else {
          return false
        }
    }
    
    

    const onLogout = () => {
        localStorage.removeItem("token")
        
    }
    const isLoggedIn = isUserLoggedId()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav mr-auto">
          <Link className="navbar-brand" style={{marginLeft: "20px"}} to="/">Fuldemy</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

            </ul>
            </div>
 
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Right</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div> */}


  
    <div class="container-fluid">
        <Link className="navbar-brand" style={{marginLeft: "20px"}} to="/">Fuldemy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
            </ul>
            <ul className="navbar-nav">
            
                {!isLoggedIn ? 
            <>
          {/*   <li className="nav-item">
        <Link className="nav-link" to="/add-tutor">Add Tutor</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/delete">Delete</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/get-by-id">Get By Id</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/update">Update</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/get-all">Get All</Link>
      </li> */}
 <li className="nav-item">
                    <Link class="nav-link" to="/login">
                      Login
                      </Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link" to="/register">
                      Sign Up
                      </Link>
                </li>
            </> : 
            
            <>
<li className="nav-item">
                    <Link class="nav-link" to="/messages">
                      My Messages
                      </Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/my-profile">
                      My Profile
                      </Link>
                </li>
                <li
                onClick={()=>onLogout()}
                className="nav-item">
                    <Link
                    onClick={()=>onLogout()}
                    class="nav-link" to="/login">
                      Logout
                      </Link>
                </li>
            </>
            }
           
            </ul>
        </div>
    </div>

</nav>
    )
}
