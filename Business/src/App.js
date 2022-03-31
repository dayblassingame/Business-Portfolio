import React from 'react';
import('./App.scss');
import {Navbar} from './Navbar';
import {Landing} from './Landing';
import {Footer} from './Footer';

export function App(){
    return (
        <div>
            <Navbar/>
            <Landing imgSrc ='./images/profile.jpg' />
            <Footer></Footer>
        </div>
    );
}