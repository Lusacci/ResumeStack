import React from 'react';

//Sticking to first level first. 
const Awards = (JTProfile) => (
    <div className="ResumePreview" id="Awards">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
    </div>
);

export default Awards;