import React from 'react';
import "./Filterinput.css";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'; 

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

