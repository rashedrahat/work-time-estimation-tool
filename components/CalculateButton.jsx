import React from 'react';

const CalculateButton = ({ onClick }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onClick}>
            Calculate
        </button>
    );
};

export default CalculateButton;
