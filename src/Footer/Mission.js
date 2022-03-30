import React from "react"
import Navbar from "../Navbar/FuldemyNavbar"

export default function Mission(){
  
    return (
      
        <div>
            <Navbar/>
            <div style={{marginTop:"5%",marginLeft:"20%"}}>
                <h1> Our Mission </h1>
                <ul>
                    <li>Build the coolest web application</li>
                    <li>Have fun in the process of building it</li>
                    <li>Impress potential employers with this cool project</li>
                </ul>
            </div>
        </div>
    )
}
