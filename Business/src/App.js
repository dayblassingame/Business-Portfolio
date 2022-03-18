import React from 'react';
import('./App.scss');
import {Navbar} from './Navbar';
import {Landing} from './Landing';

export function App(){
    return (
        <div>
            <Navbar/>
            <Landing imgSrc ='./images/profile.jpg' />
        </div>
    );
}