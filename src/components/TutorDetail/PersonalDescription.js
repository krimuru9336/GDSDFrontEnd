import React from "react"

export default function PersonalDescription(){
    return (
        <div className="card">
            <div className="card-header">
                Personal Description
            </div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
    <li className="list-group-item">First Name: Ramesh</li>
    <li className="list-group-item">Last Name: Shah</li>
    <li className="list-group-item">Email: ramesh.shah@informatik.hs-fulda.de</li>
    <li className="list-group-item">Address: Leipziger str 130, 36037 Fulda</li>
  </ul>
            </div>
        </div>
    )
}