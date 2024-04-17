import React from 'react';
import "./Filterinput.css";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'; 


/**
 * Composant React représentant un champ d'entrée filtrable.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.label - Le libellé du champ d'entrée.
 * @param {string} props.id - L'identifiant unique du champ d'entrée.
 * @param {function} props.onChange - La fonction de rappel à appeler lorsque la valeur du champ d'entrée change.
 * @param {boolean} props.isSorted - Indique si le champ d'entrée est trié.
 * @param {boolean} props.isSortedDesc - Indique si le champ d'entrée est trié par ordre décroissant.
 * @returns {JSX.Element} Le composant FilterInput.
 */
const FilterInput = ({ label, id, onChange, isSorted, isSortedDesc  }) => {
    return (
        <div className="filter-input">
            <span className="label-filter-input">{label}</span>
            {isSorted ? (
                <span>
                    {isSortedDesc ? <BsArrowUp className="arrow-icon" onClick={() => onChange(id, 'asc')} />
                    :<BsArrowDown className="arrow-icon" onClick={() => onChange(id, 'desc')} />}
                </span>
            ) : null}
        </div>
    );
};

export default FilterInput;

