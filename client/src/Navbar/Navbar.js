import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useState, useEffect } from 'react';
import { AuthContext, AuthProvider } from "../auth";
import Axios from "axios";

import "./Navbar.css";
const Navbar = () => {

  const { user, logout } = useContext(AuthContext); 
  const [currUser, setCurrUser] = useState("");
  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth",{headers:{
        "x-access-token" : localStorage.getItem("token") 
    }}).then((response)=>{
        console.log(response);
    }) 
}

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        if(user){
          console.log(user);
          setCurrUser((user.Username));
        }
        
        //setCurrUser(response.data.user[0].Username);
      }

    })

  },[user]);

  const onLogout = () => {
    logout() ;
    
  }
  const menu = user ? (
    
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  <a href="/">Home</a>
  <a href="/lists">Birthdays</a>
  <a href="/reminder">Reminders</a>
  <a href="/form">Add</a>
  <a href="/" onClick={onLogout}>Logout</a>

  </div>
</div>
   
  ) : (
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      📆RemindMe
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  <a href="/login" >Login</a>
  <a href="/">Home</a>

  </div>
</div>
);
  const myFunction =()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    menu

  )
}

export default Navbar;
/*import React from 'react' ;
import {BrowserRouter as Router, Route} from 'react-router-dom' ;
import 'semantic-ui-css/semantic.min.css' ;
import Form from "../Form/Form"  ;
import Lists from "../Lists/Lists" ;
import Reminder from "../Reminder/Reminder" ;
import HomePage from "../HomePage/HomePage" ;
import LoginPage from "../LoginPage/LoginPage" ;
import "./Navbar.css" ;
import { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import {useState} from "react" ;

const Navbar = () => {
  const[activeItem,setActiveitem] = useState('') ;
  const handleItemClick = (e, {name}) => setActiveitem(name) ;
  return(
    <div>
    <Router>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/add' component={Form}/>
    </Router>
    <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='add'
            active={activeItem === 'add'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>


      </div>
      </div>
  ) ;
}

export default Navbar ;*/