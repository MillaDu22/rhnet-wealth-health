import React from 'react';
import "./Collapse.css";

function Collapse ({ options, label }) {
    return (
        <div className="formData-home">
            <label className="label-select-show" htmlFor="show">{label}</label>
            <select className="form-select show form" aria-label="Default select example" id="show" name="show">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Collapse;




