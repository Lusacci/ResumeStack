import React from 'react';

//Sticking to first level first. 
const Projects = (JTProfile) => (
    <div className="ResumePreview" id="Projects">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
    </div>
);

export default Projects;