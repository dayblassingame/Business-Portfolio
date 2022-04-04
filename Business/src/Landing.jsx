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
                <div className='bp-C-Landing_descriptionContainer'>
                    <div className='bp-C-Landing_description-text'>
                    <h3>Day Blassingame</h3>
                    <hr/>
                    <h1>Software Engineer</h1>
                    <Button name='Schedule a meeting' id = 'schedule' type='default'/>
                </div>
                </div>
            </div>
    );
}

