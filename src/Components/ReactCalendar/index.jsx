import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DateSelector.css';

function DateSelector ({ uniqueId, label }) {
    const [date, setDate] = useState(new Date());

    const handleChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="formData">
            <label className="label-create" htmlFor={uniqueId}>{label}</label>
            <Calendar
                onChange={handleChange}
                value={date}
                className="calendar-control"
                calendarType="ISO 8601"
            />
            <div id={`error-${uniqueId}`}></div>
        </div>
    );
}

export default DateSelector;
