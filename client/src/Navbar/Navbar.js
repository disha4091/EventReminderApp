import React from "react" ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  
} from "react-router-dom";
import Form from "../Form/Form"  ;
import Lists from "../Lists/Lists" ;
import Reminder from "../Reminder/Reminder" ;
import HomePage from "../HomePage/HomePage" ;
import "./Navbar.css" ;
const Navbar = () => {
  
    return (
        
        <div className="Navbar">
        <Router> 

          <div className="leftside">

            <div className="links">
            <a href="/">Home</a>
            <a href="/Birthdays">Birthdays</a>
            <a href="/Reminders">Reminders</a>
            <a href="/Add">Add</a>
            <p> </p>
            </div>
           
          <div>
            <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="/Birthdays" component={Lists} />
            
          <Route path="/Reminders" component={Reminder}/>
            
          <Route path="/Add" component={Form} />
          
        
          <Route path='*'>
          <HomePage/>
          </Route>
        
        </Switch>
      </div> 
      
        
        </div>
        
       
      </Router>
          
        </div>
    )
}

export default Navbar