/* global gapi */
import React, { Component } from "react";
import "./App.scss";
import Home from "./components/home/home";

class App extends Component {
  componentDidMount() {
    gapi.signin2.render("g-signin2", {
      scope: "profile email",
      width: 200,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: this.onSignIn
    });
  }

  onSignIn = googleUser => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
  };

  render() {
    return (
      <div className="row m-0">
        <div className="col-12">
          <div className="g-signin2" data-onsuccess="onSignIn" />
          <Home />
          <a href="#" onClick={this.signOut}>
            Sign out
          </a>
        </div>
      </div>
    );
  }
}

export default App;
