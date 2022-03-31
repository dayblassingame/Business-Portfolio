import React from 'react';
import('./App.scss');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export function Footer(){
    return(
        <div className='bp-C-Footer_container bp-U-flexbox_container'>
            <a href='#' className = 'bp-U-flexbox_one-forth'>
                <FontAwesomeIcon icon={solid('arrow-up')} className='dp-C-Footer_icon'/>
            Return to Top</a>
            <a href='http://www.github.com/dayblassingame' className = 'bp-U-flexbox_one-forth'>
                <FontAwesomeIcon icon={brands('github')} className='dp-C-Footer_icon' />
            Github</a>
            <a href='https://www.linkedin.com/in/day-blassingame/' className = 'bp-U-flexbox_one-forth'> 
                <FontAwesomeIcon icon={brands('linkedIn')} className='dp-C-Footer_icon' />
            LinkedIn</a>
            <a href='https://www.linkedin.com/in/day-blassingame/' className = 'bp-U-flexbox_one-forth'> 
                <FontAwesomeIcon icon={solid('envelope')} className='dp-C-Footer_icon' />
            Contact Me</a>
        </div>
    );

    //icons by icon8 https://icons8.com/license
} 