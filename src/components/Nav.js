import React from 'react';
import './Nav.css'


function Nav() {
    return (
        <nav className="nav navbar-light bg-light text-center ">
      <div className="container-fluid mynav">
        <span className="navbar-brand mb-0 h1" className="title">Employee Directory</span>
        <p className="navContent">click on carrots to filter by heading or use the search box to narrow your results</p>
      </div>
    </nav>
      );;
  }
  
  export default Nav;