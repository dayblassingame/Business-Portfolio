import React from 'react';
import('./App.scss');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react";
import logo from './images/logo.png';
//navigation bar for different pages of site

export function Navbar(){
const [isActive, setActive] = useState("false");

const hamburgerMenu = () => {
    setActive(!isActive);
};
    
    return (
        <div className='bp-C-Navbar_container bp-U-align-content-center'>
            {/* hamburger menu for navigation on smaller devices */}
            <button id='hamburgerMenu' className='btn bp-C-Hamburger_icon' onClick={hamburgerMenu}><FontAwesomeIcon icon={isActive ? solid('bars') : solid('xmark')} /></button>
            <img className='bp-logo' src={logo}/>
            <ul id='sideNavbar' className={isActive ? "bp-C-SideNavbar_list bp-U-display-none": "bp-C-SideNavbar_list"}>
                <li className='bp-C-SideNavbar_list_items bp-U-display-block'> <a href=''>Home </a></li>
                <li className='bp-C-SideNavbar_list_items bp-U-display-block'> <a href=''>About</a></li>
                <li className='bp-C-SideNavbar_list_items bp-U-display-block'> <a href=''>Resume</a></li>
                <li className='bp-C-SideNavbar_list_items bp-U-display-block'> <a href=''>Portfolio</a></li>
                <li className='bp-C-SideNavbar_list_items bp-U-display-block'> <a href=''>Contact Us</a></li>
            </ul>

            {/* hamburger menu for navigation on wider devices */}
            <ul id='topNavbar'className='bp-C-TopNavbar_list bp-U-text-align-center'>
                <li className='bp-C-TopNavbar_list_items bp-U-display-inline-block'> <a href=''>Home </a></li>
                <li className='bp-C-TopNavbar_list_items bp-U-display-inline-block'> <a href=''>About</a></li>
                <li className='bp-C-TopNavbar_list_items bp-U-display-inline-block'> <a href=''>Resume</a></li>
                <li className='bp-C-TopNavbar_list_items bp-U-display-inline-block'> <a href=''>Portfolio</a></li>
                <li className='bp-C-TopNavbar_list_items bp-U-display-inline-block'> <a href=''>Contact Us</a></li>
            </ul>
        </div>
    );

}
