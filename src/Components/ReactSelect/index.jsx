import React from 'react';
import Select from 'react-select';
import "./ReactSelect.css";

function CustomSelect ({ options, label, inputId }) {
    const defaultValue = options.find(option => option.isDefault);
    return (
        <div className="react-select-container"> 
            <label className="react-select__label-select-list" htmlFor={inputId}>{label}</label>
            <Select 
                classNamePrefix="react-select" 
                className="react-select__value-container" 
                aria-label="Default select example" 
                inputId={inputId} 
                name="show"
                options={options}
                defaultValue={defaultValue} // Définit l'option par défaut //
            />
        </div>
    )
}

export default CustomSelect;
