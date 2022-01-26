import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Navbar from "../../../../Navbar/FuldemyNavbar";
import moment from "moment";
import { getToken } from "../../../../utils/utilityFunctions";
import axios from "axios"
//import {io} from "socket.io-client";
const WebSocketClient = require('websocket').client;
var W3CWebSocket = require('websocket').w3cwebsocket;

//import io from "socket.io-client";

//const socket = io.connect('localhost:4000');


export default class ChatBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages: [],
        users: [],
        filteredUsers: [],
        loggedInUserDetail: null,
        selectedUser: null,
        isFetching: false
    };
      }

      implt = () => {
      
      }

      configureSocket = () => {
   
      }
    
      handleSendMessage = (channel_id, text) => {
          //this.socket.emit('send-message', { channel_id, text, senderName: this.socket.id, id: Date.now() });
      }

     componentDidMount(){
       
        this.fetchUser()
        this.fetchMessagesForLoggedInUser()
        this.getLoggedInUserDetails()
        
        this.configureApiCall()
       // this.fetchMessages() 
          /* const roomName = location.pathname.substr(1); */
          const endPoint = process.env.REACT_APP_API_END_POINT ? process.env.REACT_APP_API_END_POINT.replace("http://","ws://") : ""
  
  const token = getToken()

          var socketPath = endPoint
              + '/ws?session_key='+token
          const chatSocket = new WebSocket(
        socketPath
          );
         
          chatSocket.onopen = () => {
            console.log('WebSocket open');
          };
          chatSocket.onmessage = (e) => {
              var data = JSON.parse(e.data);
              var message = {text: data.message, date: data.utc_time};
        message.date = moment(message.date).local().format('YYYY-MM-DD HH:mm:ss');
        
              let updated_messages = [...this.state.messages];
              updated_messages.push(message);
              this.setState({messages: updated_messages});
          };
  
    chatSocket.onclose = (e) => {
      console.log(e)
        console.error('Chat socket closed unexpectedly');
    };
  
    this.chatSocket = chatSocket;
      }

      onSubmit = (message) => {
       console.log(message)

this.chatSocket.send(JSON.stringify({
  'email': "",
  'receipient': "",
          'body': message
      }));
      
    }
 
    configureApiCall = () => {
      this.interval = setInterval(()=>{
this.fetchMessagesForLoggedInUser()
      }, 800)
    }
    

    componentWillUnmount() {
clearInterval(this.interval)
    }




    fetchUser = () => {
      const token = getToken()
      if(token) {
        this.setState({ isFetching: true })
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/api/messageurl/user"

    axios.get(apiEndPoint,{
      headers: {
        Authorization: "Bearer "+ token
      }
    })
      .then(res => {
      
        this.setState({users: res.data ? res.data : [],
          filteredUsers: res.data ? res.data : [],
        selectedUser: res.data[0] ? res.data[0] : null
        })
        
      })
      .catch((err)=>{
        this.setState({users: []})
      
      }).finally(()=>{
      this.setState({isFetching: false})
      })
      }
    }

    fetchMessagesForLoggedInUser = ()=> {
      const token = getToken()
      if(token) {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/api/messageurl/message"

    axios.get(apiEndPoint,{
      headers: {
        Authorization: "Bearer "+ token
      }
    })
      .then(res => {
      // update state only if the messages are different
      if(this.state.messages.length !== res.data?.results?.length) {
       
        this.setState({messages: res.data ? res.data.results : []})
      }
       
      })
      .catch((err)=>{
        this.setState({messages: []})
      
      })
      }
    }

    getLoggedInUserDetails = () => {
      const token = getToken()
      if(token) {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/api/user/detail"

    axios.get(apiEndPoint,{
      headers: {
        Authorization: "Bearer "+ token
      }
    })
      .then(res => {
   
        this.setState({ loggedInUserDetail : res.data ? res.data.data : null})
      })
      .catch((err)=>{
        this.setState({loggedInUserDetail: []})
      
      })
      }
    }

    onMessageSubmit = (message, selectedUser) => {
      const token = getToken()
      if(token) {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/api/messageurl/message/"

    axios.post(apiEndPoint,
      
        {
          recipient: selectedUser?.email ? selectedUser.email : "",
          body: message
        
      },
      {
      headers: {
        Authorization: "Bearer "+ token
      }
    })
      .then(res => {
   
        this.fetchMessagesForLoggedInUser()
      })
      .catch((err)=>{
        this.setState({loggedInUserDetail: []})
      
      })
      }
    }


    onSearchInputChange = (searchTerm) => {
      const currentUsersList = this.state.users
      const filteredUsers = currentUsersList.filter((user)=>{
        return user.first_name?.toLowerCase()?.includes(searchTerm) || user.last_name?.toLowerCase()?.includes(searchTerm)
      })
      this.setState({filteredUsers: filteredUsers})
    }


    onSelectUser = (user) => {
      this.setState({
        selectedUser: user
      })
    }


  render() {
 
   const {messages,loggedInUserDetail ,filteredUsers, selectedUser, isFetching} = this.state
  
   return (
      <>
       <Navbar />
     
      <div className="main__chatbody">
        <ChatList users={filteredUsers}
        onSearchInputChange={this.onSearchInputChange}
        onSelectUser={this.onSelectUser}
        messages={messages}
        />
        <ChatContent
        messages={messages}
        onSubmit={this.onSubmit}
        loggedInUserDetail={loggedInUserDetail}
        onMessageSubmit={this.onMessageSubmit}
        selectedUser={selectedUser}
        />
        <UserProfile currendLoggedInUser={loggedInUserDetail} />
      </div>
  
      </>
    );
  }
}
