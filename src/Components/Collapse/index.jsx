import React from 'react';
import "./Collapse.css";

/**
 * Composant React représentant un élément collapsible (réductible).
 * @param {object[]} options - Les options à afficher dans le menu déroulant.
 * @param {string} options[].label - Le libellé de l'option.
 * @param {string|number} options[].value - La valeur de l'option.
 * @param {string} label - Le libellé du menu déroulant.
 * @param {function} collapseOnChange - La fonction de rappel à appeler lorsque la sélection change.
 * @param {string|number} selectedValue - La valeur sélectionnée actuellement dans le menu déroulant.
 * @returns {JSX.Element} Le composant Collapse.
 */
function Collapse ({ options, label, collapseOnChange, selectedValue }) {
    const handleCollapseChange = (event) => {
        const selectedPageSize = event.target.value;
        collapseOnChange(selectedPageSize); 
    };
    return (
        <div className="formData-home">
            <label className="label-select-show" htmlFor="show">{label}</label>
            <select 
                className="form-select show form" 
                aria-label="Default select example" 
                id="show" 
                name="show"
                value={selectedValue} 
                onChange={handleCollapseChange} 
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Collapse;



