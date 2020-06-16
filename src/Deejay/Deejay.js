import React from 'react';
import './Deejay.css'

const deejay = ( props ) => {
    return (
        <div className="Deejay">
           <p onClick={props.click}>I'm a {props.name} and I have {props.exp} years of experience..! </p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
        </div>
          
    )
};

export default deejay;