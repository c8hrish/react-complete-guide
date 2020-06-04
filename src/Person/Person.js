import React from 'react';

const Person = ( props ) => {
    return (
        <div>
           <p>I'm a {props.name} and I have {props.exp} years of experience..! </p>
           <p>{props.children}</p>
        </div>
          
    )
};

export default Person;