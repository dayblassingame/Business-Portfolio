import React from 'react';
import('./App.scss');
import {Navbar} from './Navbar';
import {Landing} from './Landing';
import {Footer} from './Footer';
import {Spinner} from './Spinner';

export function App(){
    return (
        <div>
            <div id='loading'>
                <Spinner className='bp-U-display-none'/>
            </div>
            <div id='bpAppBody'>
                <Navbar/>
                <Landing imgSrc ='./images/profile.jpg' />
                <Footer/>
            </div>
        </div>
    );
}