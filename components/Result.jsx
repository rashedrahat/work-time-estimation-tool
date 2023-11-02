import React from 'react';

const Result = ({ result }) => {
    return (
        <div className="mt-4">
            <p className="text-2xl text-white">Estimated Time: {result} minutes</p>
        </div>
    );
};

export default Result;
