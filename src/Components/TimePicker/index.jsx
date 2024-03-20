import React from 'react';
import './TimePicker.css';

function TimePicker({ onChange, value }) {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 4 }, (_, i) => i * 15);

    const handleTimeChange = (hour, minute) => {
        onChange(`${hour}:${minute < 10 ? `0${minute}` : minute}`);
    };

    return (
        <div className="time-picker">
            {hours.map((hour) => (
                <div key={hour} className="hour-column">
                    {minutes.map((minute) => (
                        <button
                        key={minute}
                        className={value === `${hour}:${minute < 10 ? `0${minute}` : minute}` ? 'selected' : ''}
                        onClick={() => handleTimeChange(hour, minute)}>
                            {`${hour}:${minute < 10 ? `0${minute}` : minute}`}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TimePicker;

