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
      image: user.profile_pic ? user.profile_pic : defaultImage,
      id: user.id,
      name: user.first_name+ " "+user.last_name,
      active: false,
      isOnline: true,
      animationDelay: 0-8,
      email: user.email,
      profile_pic: user.profile_pic
    }
  }
  )

  if(tutorDetail) {
    const user = {
      image: tutorDetail.profile_pic ? tutorDetail.profile_pic :defaultImage,
      id: tutorDetail.id,
      name: tutorDetail.first_name+ " "+tutorDetail.last_name,
      email: tutorDetail.email,
      active: false,
      isOnline: true,
      animationDelay: 0.8,
      email: tutorDetail.email,
      profile_pic: tutorDetail.profile_pic
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

    return (
      <div className="main__chatlist">
     
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

        <div
        style={{ animationDelay: `0.2s` }}
        onClick={()=>onSelectuserClick("chatbot")}
        className={`chatlist__item `}
      >
        <Avatar
          image={
       defaultImage
          }
          isOnline={true}
        />

        <div className="userMeta">
          <p>ChatBot</p>
        {/*   <span className="activeTime">32 mins ago</span> */}
        </div>
      </div>

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
            
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  
}
