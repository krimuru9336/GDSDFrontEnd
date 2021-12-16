import React from "react"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Fuldemy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <form class="form-inline">

  <div class="form-group mx-sm-3 mb-2">
   
    <input type="text" class="form-control" 
    id="inputPassword2" placeholder="Search" />
  </div>
  
</form>
</nav>
    )
}
