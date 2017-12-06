import React from 'react';

//Sticking to first level first. 
const Contact = (JTProfile) => (
    <div className="ResumePreview" id="Contact">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
        <div className="category-description">
            {JTProfile.github}
        </div>
        <div className="category-description">
            {JTProfile.linkedIn}
        </div>
        <div className="category-description">
            {JTProfile.discord}
        </div>
        <div className="category-description">
            {JTProfile.phone}
        </div>
        <div className="category-description">
            {JTProfile.email}
        </div>
        <div className="category-description">
            {JTProfile.location}
        </div>
    </div>
);

export default Contact;