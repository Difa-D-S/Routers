import React from "react";
import Logo from '../assests/girl4.jpg'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header style={{display:"flex", alignItems:"center", backgroundColor:"black", color:"white"}}>
      <Link to="/" className="link nav-link">
      <img src={Logo} alt="RouteMate" style={{borderRadius:"50px", width:'70px', margin:'0px'}}/>
      <span className="header" style={{margin:'0px'}}>Routemate</span>
      </Link>
      <nav className="navigation" style={{display:"flex", alignItems:"center", marginLeft:'auto'}}>
        <span><NavLink to="/" className="link nav-link">Home</NavLink></span>
        <span><NavLink to="/product" className="link nav-link">Product</NavLink></span>
        <span><NavLink to="/contact" className="link nav-link">Contact</NavLink></span>
      </nav>
      </header>
    </>
  );
};

export default Header;
