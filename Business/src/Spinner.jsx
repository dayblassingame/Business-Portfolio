import React from 'react';
import reactDom from 'react-dom';
import('./App.scss');

export function Spinner(){
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
           document.getElementById('bpAppBody').classList.add('bp-U-display-none');
           document.getElementById('loading').classList.remove('bp-U-display-none');
        } else {
            document.getElementById('loading').classList.add('bp-U-display-none');
            document.getElementById('bpAppBody').classList.remove('bp-U-display-none');
        }
    };

    return (
        <div className='loading'>
            <div className='dp-C-Spinner'></div>
            <div className='dp-C-Spinner_text'>
                <span>Getting </span> 
                <span>things </span>
                <span>ready </span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    );
}