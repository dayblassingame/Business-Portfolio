import React from 'react';
import './App.scss';
import profile from './images/profile2.jpg';
import Button from './Button';

export function Landing() {
    return(
            <div className='bp-C-Landing_container '>
                <div className='bp-C-Landing_imgContainer'>
                    <img src={profile} className="bp-C-Landing_img"/>
                </div>
                <div className='bp-C-Landing_description'>
                    <h3>Day Blassingame</h3>
                    <h1>Software Engineer</h1>
                    <Button id = 'Contact Me' type='default'/>
                </div>
            </div>
    );
}

