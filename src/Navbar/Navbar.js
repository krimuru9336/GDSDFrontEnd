import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Fuldemy</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <form class="form-inline">

  <div class="form-group mx-sm-3 mb-2">
   
    <input type="text" class="form-control" 
    id="inputPassword2" placeholder="Search" />
  </div>
  
</form>


  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/add-tutor">Add Tutor</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/delete">Delete</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/get-by-id">Get By Id</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/update">Update</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/get-all">Get All</Link>
      </li>
    </ul>
  </div>

</nav>
    )
}
