import React from 'react';
import './App.scss';
import profile from './images/profile2.jpg';

export function Landing() {
    return(
            <div className='bp-C-Landing_container bp-U-flexbox_container'>
                <div className='bp-U-flexbox_one-third bp-C-Landing_imgContainer'>
                    <img src={profile} className="bp-C-Landing_img"/>
                </div>
                <div className='bp-U-flexbox_two-thirds bp-C-Landing_description'>
                    <h3>Day Blassingame</h3>
                    <h1>Front-End Software Engineer</h1>
                    <button> More About Me</button>
                </div>
            </div>
    );
}

