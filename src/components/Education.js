import React from 'react';

//Sticking to first level first. 
const Education = (JTProfile) => (
    <div className="ResumePreview" id="Education">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
        <div className="category-description">
            {JTProfile.unofficialTranscripts}
        </div>
        <div className="category-description">
            {JTProfile.degree}
        </div>
        <div className="category-description">
            {JTProfile.classCurriculum}
        </div>
    </div>
);

export default Education;