import React from 'react';

const SliderInput = ({ label, value, onChange }) => {
    return (
        <div>
            <label className="block text-sm text-white">{label} : {value}</label>
            <input
                type="range"
                min="1"
                max="5"
                step="1"
                className="w-full py-2 px-3 rounded bg-gray-800 text-white"
                value={value}
                onChange={onChange}
            />
            <div className="flex justify-between">
                <span>1</span>
                <span>5</span>
            </div>
        </div>
    );
};

export default SliderInput;
