import React from 'react';

const InputField = ({ label, value, onChange }) => {
    return (
        <div className="w-full md:w-1/3">
            <label className="block text-sm text-white mb-1">{label}</label>
            <input
                min={0}
                type="number"
                className="w-full py-2 px-3 rounded bg-gray-800 text-white"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
