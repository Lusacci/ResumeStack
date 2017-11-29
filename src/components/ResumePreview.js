import React from 'react';

const ResumePreview = (JTProfile) => (
    <div className="ResumePreview">
        <div>
            {JTProfile.categoryName}
        </div>
        <div>
            {JTProfile.categoryDescription}
        </div>
    </div>
);

export default ResumePreview;