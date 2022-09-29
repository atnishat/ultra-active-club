import React from 'react';
import logo from '../../Images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            
            <img src={logo} alt="" />
            
           <div className='header-text'>
           <h2>Fitness Club</h2>
           <h3>Select Today's Exercise</h3>
           </div>
          
        </nav>
    );
};

export default Header;