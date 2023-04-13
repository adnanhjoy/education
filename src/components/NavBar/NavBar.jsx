import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.svg';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/courses'>Courses</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;