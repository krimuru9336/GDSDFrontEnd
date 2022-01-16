import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(){
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" style={{marginLeft: "20px"}} to="/">Fuldemy</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
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
      </li>
    </ul>
  </div>
 

</nav>
    )
}
