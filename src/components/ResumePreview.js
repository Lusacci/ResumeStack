import React from 'react';

const ResumePreview = (JTProfile) => (
    <div className="ResumePreview">
        <div className="category-name">
            {JTProfile.categoryName}
        </div>
        <div className="category-description">
            {JTProfile.categoryDescription}
        </div>
    </div>
);

export default ResumePreview;