import React from "react"

export default function PersonalDescription(){
    return (
        <div className="card">
            <div className="card-header">
                Personal Description
            </div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
    <li className="list-group-item">First Name</li>
    <li className="list-group-item">Last Name</li>
    <li className="list-group-item">Email</li>
    <li className="list-group-item">Address</li>
  </ul>
            </div>
        </div>
    )
}