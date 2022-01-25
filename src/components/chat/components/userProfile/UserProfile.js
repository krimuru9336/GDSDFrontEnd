import React, { Component } from "react";
import { getFileFormatted } from "../../../../utils/utilityFunctions";
import "./userProfile.css";

export default class UserProfile extends Component {
 
  render() {
    const {currendLoggedInUser} = this.props
 const profilePic = getFileFormatted(currendLoggedInUser?.profile_pic)
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={profilePic} maxheigh={200}  maxwidth={300}/>
          </div>
          <h4>{currendLoggedInUser?.first_name+ " "+ currendLoggedInUser?.last_name}</h4>
          {/* <p>CEO & Founder at Highly Inc</p> */}
        </div>
       {/*  <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div> */}
      </div>
    );
  }
}
