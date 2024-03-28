import React from 'react';
import Select from 'react-select';
import './ReactSelect.css';

function ReactSelect ({ options, label, uniqueId }) {
    const defaultValue = options.find(option => option.isDefault);
    const handleChange = (selectedOption) => {
        // Faire action avec la valeur sélectionée //
    };
    
    return (
        <div className="dropdown">
            <label className="label-dropdown" htmlFor={uniqueId}>{label}</label>
            <Select
                classNamePrefix="react-select"
                aria-label="Default select example" 
                defaultValue={defaultValue}
                options={options}
                onChange={handleChange}
                inputId={uniqueId} 
                name="show"
            />
        </div>
    );
}

export default ReactSelect;
