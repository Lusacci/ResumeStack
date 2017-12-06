import React from 'react';

const Bio = (JTProfile) => (
    <div className="ResumePreview" id="Bio">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
        <div className="category-description">
            {JTProfile.ideology}
        </div>
        <div className="category-description">
            {JTProfile.experience}
        </div>
        
    </div>
);

export default Bio;