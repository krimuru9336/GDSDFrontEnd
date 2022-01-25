import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import defaultImage from "../../../../assets/images/default.png"

export default function ChatList({users, onSearchInputChange, onSelectUser}){
  
    const userList = users?.map((user)=> {
      return  {
        image: user.profile_pic ?  
        user.profile_pic.includes("/api") ? user.profile_pic : 
        user.profile_pic.replace("/media", "/api/media") : defaultImage,
        id: user.id,
        name: user.first_name+ " "+user.last_name,
        active: false,
        isOnline: true,
      }
     
    }
    
    )

    const onSelectuserClick = (id)=> {
      const selectedUserDetail = users?.find((user)=>user.id === id )
      onSelectUser(selectedUserDetail)
    }

    return (
      <div className="main__chatlist">
        {/* <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button> */}
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here"
            onChange={(e)=>onSearchInputChange(e.target.value)}
            required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {userList.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
          onSelectuserClick = {()=>onSelectuserClick(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  
}
