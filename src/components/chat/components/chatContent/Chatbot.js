import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import defaultImage from "../../../../assets/images/default.png"
import axios from "axios";

export default function ChatBot({loggedInUserDetail}) {

  const [allMessages, setAllMessages] = useState([])
  const [messageTyped, setMessageTyped] = useState("")
  const [selectedUserDetail, setSelectedUserDetail] = useState(null)
 

  useEffect(()=>{
//formatMessages()
  },[])

 

 


const loggedInUserProfilePic = loggedInUserDetail?.profile_pic ? 
process.env.REACT_APP_API_END_POINT+loggedInUserDetail?.profile_pic : 
defaultImage
const selectedUserProfilePic = selectedUserDetail?.profile_pic ? selectedUserDetail?.profile_pic : defaultImage

  /* const formatMessages = () => {
    const filterdMsgForSelectedUser = messages.filter((m)=>{
      return selectedUser?.email === m.recipient || selectedUser?.email === m.user
    })
    
    const newMsgList = filterdMsgForSelectedUser.map((m)=>{
      
      return {
        key: m.id,
      image:m.user === loggedInUserDetail?.email ?
      loggedInUserProfilePic :  selectedUserProfilePic,
      type:m.user === loggedInUserDetail?.email ? "": "other",
      msg: m.body,
      time: m.timestamp,
      email: m.email
      }
    }).sort((a,b)=>a.key-b.key)
    setAllMessages(newMsgList)
  } */

  const  onSubmitChat = () => {
   // onMessageSubmit(messageTyped, selectedUser)
   const BASE_URL = process.env.REACT_APP_CHATBOT_API
 
   const apiEndPoint = BASE_URL+"/webhooks/rest/webhook"
 
   const reqBody = {
       sender: loggedInUserDetail ? loggedInUserDetail.first_name : "",
       message: messageTyped
   }

axios.post(apiEndPoint,
 
   reqBody,
 {
 headers: {
 /*   Authorization: "Bearer "+ token */
/*  "Accept-encoding": "application/json",
 "Accept-charset": "utf-8" */
 }
})
 .then(res => {

 
    if(res.data) {

        const formattedMsgList = res.data.map((m)=>{
            return {
            key: m.recipient_id,
            image:defaultImage,
            type:"other",
            msg: m.text,
            time: new Date(),
            email: m.recipient_id,
            }
          })
         
            const currentUserMsg = {
              msg: messageTyped,
              key: messageTyped,
              image: loggedInUserProfilePic,
              time: new Date(),
              type:"",
            }
            const newMessages = [
              ...allMessages,
            currentUserMsg,
              ...formattedMsgList
            ]
         
            setAllMessages(newMessages)
          setMessageTyped("")
         
          
         
    }
 })
 .catch((err)=>{
  // this.setState({loggedInUserDetail: []})
 
 })

    
  }

  //render() {
    return (
  
     
      <div className="main__chatcontent">
  
      <>
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image={selectedUserProfilePic}
              />
              <p>Chatbot</p>
            </div>
          </div>

       
        </div>
        <div className="content__body">
          <div className="chat__items">
            {allMessages?.map((itm, index) => {
              return (
                <React.Fragment key={`chatItem-${index}`}>
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                /*   image={itm.image} */
                image={itm.type ?  selectedUserProfilePic : itm.image}
                  time={itm.time}
                />
                </React.Fragment>
              );
            })}
          {/*   <div ref={this.messagesEndRef} /> */}
          </div>
        </div>
        <div className="content__footer">
          <form onSubmit={(e)=>{
            e.preventDefault()
            onSubmitChat()
           
          }}>
          <div className="sendNewMessage">
           {/*  <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button> */}
            <input
              type="text"
              placeholder="Type a message here"
              onChange={(e)=>setMessageTyped(e.target.value)}
            /*   onChange={this.onStateChange}
              value={this.state.msg} */
              value={messageTyped}
            />
            <button className="btnSendMsg"
            type="submit"
          /*   onClick={()=>this.props.onSubmit(this.state.msg)} */
            id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
          </form>
        </div>
        </>
      
    
    
      </div>
     
    );
  }

