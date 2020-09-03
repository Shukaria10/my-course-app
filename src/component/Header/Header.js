import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="header" >
            <img src={logo} alt=""/>
           <nav>
               <a href="/about">About</a>
               <a href="/review">Order Review</a>
               <a href="/courses">Courses</a>
           </nav> 
        </div>
    );
};

export default Header;