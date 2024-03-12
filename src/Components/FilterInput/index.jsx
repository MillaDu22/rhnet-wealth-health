import React from 'react';
import "./Filterinput.css";

const FilterInput = ({ label, id }) => {
    return (
        <div className="filter-input">
            <label htmlFor={id} className="label-filter-input">{label}</label>
            <input className="tri-dash" type="number" id={id} min="1" max="100" />
        </div>
    );
};

export default FilterInput;
