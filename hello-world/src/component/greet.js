import React from 'react';

function Greet(props) {
    // console.log(props);
    return <h1>Hello {props.name} bye {props.lastname}</h1>;
    
}

export default Greet;