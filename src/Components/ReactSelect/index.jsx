import React from 'react';
import Select from 'react-select';
import './ReactSelect.css';

/**
 * Composant React représentant un sélecteur personnalisé.
 * @param {object} props - Les propriétés du composant.
 * @param {object[]} props.options - Les options à afficher dans le sélecteur.
 * @param {string} props.label - Le libellé du sélecteur.
 * @param {string} props.uniqueId - L'identifiant unique du sélecteur.
 * @param {string} props.value - La valeur sélectionnée actuellement dans le sélecteur.
 * @param {function} props.onChange - La fonction de rappel à appeler lorsqu'une nouvelle option est sélectionnée.
 * @returns {JSX.Element} Le composant ReactSelect.
 */
function ReactSelect ({ options, label, uniqueId, value, onChange }) {
    const defaultValue = options.find(option => option.isDefault) || options[0]; 

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
