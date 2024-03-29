import React from 'react';
import Select from 'react-select';
import './ReactSelect.css';

function ReactSelect ({ options, label, uniqueId, value, onChange }) {
    const defaultValue = options.find(option => option.isDefault) || options[0]; 
    // Utilise la première option si aucune option par défaut n'est trouvée //

    return (
        <div className="dropdown">
            <label className="label-dropdown" htmlFor={uniqueId}>{label}</label>
            <Select
                classNamePrefix="react-select"
                aria-label="Default select example" 
                defaultValue={defaultValue}
                options={options}
                onChange={(selectedOption) => onChange(selectedOption.value)}
                inputId={uniqueId} 
                name="show"
            />
        </div>
    );
}

export default ReactSelect;
