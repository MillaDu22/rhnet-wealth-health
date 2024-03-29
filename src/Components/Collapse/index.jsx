/*import React from 'react';
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

export default Collapse;*/

import React from 'react';
import "./Collapse.css";

function Collapse ({ options, label, collapseOnChange }) {
    const handleCollapseChange = (event) => {
        collapseOnChange(event.target.value); // Appel la fonction de rappel collapseOnChange avec la nouvelle valeur sélectionnée //
    };

    return (
        <div className="formData-home">
            <label className="label-select-show" htmlFor="show">{label}</label>
            <select 
                className="form-select show form" 
                aria-label="Default select example" 
                id="show" 
                name="show"
                onChange={handleCollapseChange} // Ajoute un gestionnaire d'événements onChange pour détecter les changements de sélection //
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Collapse;







