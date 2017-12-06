import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
//Isolated the responsibilities
//Gonna make this a state. 

const Header = ({ message }) => {
    return(
        <h2 className= "Header text-center">
            {message}
        </h2>
        
    );
};

//Header.PropTypes = {message: React.PropTypes.String.Header}; 

export default Header;