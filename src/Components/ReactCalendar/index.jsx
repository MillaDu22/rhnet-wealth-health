import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoCalendarOutline } from 'react-icons/io5';
import './ReactCalendar.css';
import TimePicker from '../TimePicker/index.jsx';

function ReactCalendar({ uniqueId, label }) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('12:00');
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef();

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleChangeDate = (newDate) => {
        setDate(newDate);
        setIsOpen(false);
    };

    const handleChangeTime = (newTime) => {
        setTime(newTime);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="formData calendar-formData" ref={calendarRef}>
            <label className="label-create calendar-label-create" htmlFor={uniqueId}>{label}</label>
            <div className="calendar-input-container">
                <input
                    type="text"
                    value={date.toISOString().split('T')[0]}
                    readOnly
                    className="calendar-date-input"
                    onClick={toggleCalendar}
                    id={uniqueId}
                />
                <IoCalendarOutline className="calendar-icon" onClick={toggleCalendar} aria-label="Ouvrir le calendrier" />
            </div>
            {isOpen && (
                <div className="calendar-container">
                    <Calendar
                        onChange={handleChangeDate}
                        value={date}
                        className="calendar-control"
                    />
                    <TimePicker
                        onChange={handleChangeTime}
                        value={time}
                    />
                </div>
            )}
            <div id={`error-${uniqueId}`} className="calendar-error"></div>
        </div>
    );
}

export default ReactCalendar;


