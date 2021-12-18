import React from "react"
import Table from "rc-table";
import {Link} from "react-router-dom"

export const TutorTable = ({data,onDeleteClick, onEditClick}) => {
    
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 100,
          },
      {
        title: "First Name",
        dataIndex: "tutor_first_name",
        key: "tutor_first_name",
        width: 100,
      },
      {
        title: "Last Name",
        dataIndex: "tutor_last_name",
        key: "tutor_last_name",
        width: 100,
      },
      {
        title: "Email",
        dataIndex: "tutor_email",
        key: "tutor_email",
        width: 200,
      },
      {
        title: 'Operations',
        dataIndex: '',
        key: 'operations',
        render: (value) => <button className="btn btn-danger btn-sm"
        onClick={()=>onDeleteClick(value.id)}
        >Delete</button>,
      },
      {
        title: 'Operations',
        dataIndex: '',
        key: 'operations',
        render: (value) => <Link
      

        to={"/update/"+value.id}
      
        
        className="btn btn-primary btn-sm">Edit</Link>,
      },
      
    ];

  

   

    return (
        <Table
        columns={columns}
        data={data}
        tableLayout="auto"
      />
    )
  };