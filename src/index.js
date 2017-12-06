import React from 'react';
import ReactDOM from'react-dom';
import App from './components/App';


//Render something 
ReactDOM.render(
    <App />,
    document.getElementById('jt-root') //render the react element in the document. 
);

  
/*
// This sets a timer. (4 seconds)
setTimeout(() => {
    ReactDOM.render(
        <h2>....</h2>,
        document.getElementById('jt-root')
    );
}, 4000);
*/