import React from 'react';
import { useState } from "react";
import ('./App.scss');

function Button(props){
    var className = '';
    if(props.type == 'default'){
        className = 'bp-C-Button';
    }else if(props.type == radio){
        className = 'bp-C-Button';
    }

    return(
        <button id={props.id} className={className}>  {props.name}       
        </button>
    );
}
export default Button;
