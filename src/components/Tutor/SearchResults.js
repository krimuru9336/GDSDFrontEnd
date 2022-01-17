import React from "react"

import TutorCard from "./TutorCard"

export default function SearchResults({ searchResults}) {
    const data = [
        {
            id: 1,
            tutor_first_name: "Ramesh",
            tutor_last_name: "Suresh"
        },
        
    ]

    const sortOptions = [
        {
            label: "Sort by Rating Ascending",
            value: "ra"
        },  
        {
            label: "Sort by Rating Descending",
            value: "rd"
        },  
        {
            label: "Sort by Fee Ascending",
            value: "fa"
        },  
        {
            label: "Sort by Fee Descending",
            value: "fd"
        },  

    ]
    return (
        <>
        <div className="mt-4">
        <h5 className="justify-left text-primary mb-2">Search Results</h5>
        <div className="d-flex flex-row-reverse">
        <div className="form-group col-md-3 col-sm-12">
 <select name="category" className="form-control">
<option value="">Sort</option>
{sortOptions.map((i,index)=>{
  return <option key={index+"-cat"} value={i.value}>{i.label}</option>
})}
   </select>

</div>
</div>
        <div className="row">
    {searchResults.length > 0 ?
    searchResults.map((item, index)=>{
        return (
            <div
            key={item.id}
            className="col-md-3 mb-2 col-sm-12"
            >
                <TutorCard
                tutorDetail={item}
                />
            </div>
        )
    })
 : "No Result"} 
 </div>
 </div>
        </>
    )
}