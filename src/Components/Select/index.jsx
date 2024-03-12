import React from 'react';
import "./Select.css";

function Select ({ options, label, uniqueId }) {
    return (
        <div className="formData-list">
            <label className="label-select-list" htmlFor={uniqueId}>{label}</label>
            <select className="form-select show-list" aria-label="Default select example" id={uniqueId} name="show">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
