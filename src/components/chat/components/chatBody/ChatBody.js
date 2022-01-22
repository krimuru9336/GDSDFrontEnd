import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Navbar from "../../../../Navbar/FuldemyNavbar";

export default class ChatBody extends Component {
  render() {
    return (
      <>
       <Navbar />
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
      </>
    );
  }
}
