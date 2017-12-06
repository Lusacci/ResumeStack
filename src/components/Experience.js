import React from 'react';

//Sticking to first level first. 
const Experience = (JTProfile) => (
    <div className="ResumePreview" id="Experience">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
    </div>
);

export default Experience;