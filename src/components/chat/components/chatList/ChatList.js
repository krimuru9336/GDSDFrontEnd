import React, { Component, useState, useEffect } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import defaultImage from "../../../../assets/images/default.png"
import { useNavigate, useLocation, Link  } from 'react-router-dom';
import Avatar from "./Avatar";

export default function ChatList({users, onSearchInputChange, onSelectUser, messages}){
  const [filterChatUserList,setFilterChatUserList] = useState([])
  const location = useLocation()
    

    useEffect(()=>{
  
      getUser()
    },[])

    useEffect(()=>{
     
      getUser()
    },[users, messages])

const getUser = () => {
  const tutorDetail = location.state ? location.state.tutorDetail : null
  const filteredUserByMessages = users.filter((user)=> {
    return messages.some((message)=>{
return user.email === message.recipient || user.email === message.user
    })
  })
 
  const userList = filteredUserByMessages.map((user)=> {
    return  {
      image: user.profile_pic ?  
      user.profile_pic.includes("/api") ? user.profile_pic : 
      user.profile_pic.replace("/media", "/api/media") : defaultImage,
      id: user.id,
      name: user.first_name+ " "+user.last_name,
      active: false,
      isOnline: true,
      animationDelay: 0-8
    }
  }
  )

  if(tutorDetail) {
    const user = {
      image: tutorDetail.profile_pic ?  
      tutorDetail.profile_pic.includes("/api") ? tutorDetail.profile_pic : 
      tutorDetail.profile_pic.replace("/media", "/api/media") : defaultImage,
      id: tutorDetail.id,
      name: tutorDetail.first_name+ " "+tutorDetail.last_name,
      email: tutorDetail.email,
      active: false,
      isOnline: true,
      animationDelay: 0.8
    }
    // if this user is not in list, the only push
  const isUserThere = userList.filter((u)=>u.id === user.id)
  if(isUserThere.length === 0) {
    userList.push(user)
  }
  onSelectUser(user)
  }
  setFilterChatUserList(userList)
}

    const onSelectuserClick = user=> {
     /*  const selectedUserDetail = users?.find((user)=>user.id === id ) */
      onSelectUser(user)
    }

   console.log("here",users)
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
          {filterChatUserList.map((item, index) => {
           
            return (
              <React.Fragment key={`chat-${item.email}-${index}`}>
                 <div
        style={{ animationDelay: `0.${item.animationDelay}s` }}
        onClick={()=>onSelectuserClick(item)}
        className={`chatlist__item ${
          item.active ? item.active : ""
        } `}
      >
        <Avatar
          image={
            item.image ? item.image : defaultImage
          }
          isOnline={item.isOnline}
        />

        <div className="userMeta">
          <p>{item.name}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
              {/* <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                onSelectuserClick = {()=>onSelectuserClick(item.id)}
              /> */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  
}
