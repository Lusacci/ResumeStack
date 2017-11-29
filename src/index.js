//This is where I start working with React.
import React from 'react';
import ReactDOM from'react-dom';

//Render something 
ReactDOM.render(
    React.createElement('h2', null, 'James Tam is a Noob of React'), //the middle is an attribute.
    document.getElementById('jt-root') //render the react element in the document. 
);