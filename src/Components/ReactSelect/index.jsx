import React from 'react';
import Select from 'react-select';
import "./Select.css";

function CustomSelect ({ options, label, uniqueId }) {
    return (
        <div className="formData-list">
            <label className="label-select-list" htmlFor={uniqueId}>{label}</label>
            <Select 
                className="form-select show-list" 
                aria-label="Default select example" 
                id={uniqueId} 
                name="show"
                options={options}
            />
        </div>
    )
}

export default CustomSelect;
