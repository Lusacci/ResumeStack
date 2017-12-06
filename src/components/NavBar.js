import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';

const NavBar = ({}) => {
    return(
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-expand-lg fixed-top" id="jtBar">
                <div className="container" id="elements">
                    <div className="navbar-header navbar-left">
                        <a className="navbar-brand" href="#Bio">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="James Tam"/>
                        </a>
                    </div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#Bio">Bio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#Education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#Awards">Awards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        
    );
};

//Header.PropTypes = {message: React.PropTypes.String.Header}; 

export default NavBar;