import React from "react"
import SearchCard from "./SearchCard"

export default function Search({ searchResults}) {
    return (
        <>
        <div className="row">
    {searchResults.length > 0 ?
    searchResults.map((item, index)=>{
        return (
            <div
            key={item.id}
            className="col-md-3 mb-2 col-sm-12"
            >
                <SearchCard 
                tutor_first_name={item.tutor_first_name}
                tutor_last_name={item.tutor_last_name}
                />
            </div>
        )
    })
 : "No Result"} 
 </div>
        </>
    )
}