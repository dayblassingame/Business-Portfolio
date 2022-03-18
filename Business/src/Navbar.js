import React from 'react';
import('./App.scss');

export function Navbar(){
    return (
        <div className='bp-C-Navbar_container bp-U-align-content-center'>
            <ul className='bp-C-Navbar_list bp-U-text-align-center'>
                <li className='bp-C-Navbar_list_items bp-U-display-inline-block'> <a href=''>Home </a></li>
                <li className='bp-C-Navbar_list_items bp-U-display-inline-block'> <a href=''>About</a></li>
                <li className='bp-C-Navbar_list_items bp-U-display-inline-block'> <a href=''>Resume</a></li>
                <li className='bp-C-Navbar_list_items bp-U-display-inline-block'> <a href=''>Portfolio</a></li>
                <li className='bp-C-Navbar_list_items bp-U-display-inline-block'> <a href=''>Contact Us</a></li>
            </ul>
        </div>
    );
}