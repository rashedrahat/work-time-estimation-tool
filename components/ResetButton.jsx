import React from 'react';

const ResetButton = ({ onClick }) => {
    return (
        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded" onClick={onClick}>
            Reset
        </button>
    );
};

export default ResetButton;
