import React from 'react';

function DateSelector ({uniqueId, label}) {
    return (
        <div className="formData">
            <label className="label-create" htmlFor={uniqueId}>{label}</label>
            <input className="text-control" type="date" id={uniqueId} name="birth-date"/>
            <div id={`error-${uniqueId}`}></div>
        </div>
    )
}
export default DateSelector;