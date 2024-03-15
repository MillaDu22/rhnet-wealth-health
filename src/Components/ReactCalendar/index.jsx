import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoCalendarOutline } from 'react-icons/io5';

function ReactCalendar ({ uniqueId, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const calendarRef = useRef();

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (newDate) => {
        setDate(newDate);
        setIsOpen(false); // Ferme le calendrier lorsque la date est sélectionnée //
    };

    // Ajoute un écouteur d'événements pour détecter les clics en dehors du calendrier //
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
                    onClick={toggleCalendar} // Ouvre le calendrier lorsqu'on clique sur le champ //
                    id = {uniqueId}
                />
                <IoCalendarOutline className="calendar-icon" onClick={toggleCalendar} aria-label="Ouvrir le calendrier" />
            </div>
            {isOpen && (
                <div className="calendar-container">
                    <Calendar
                        onChange={handleChange}
                        value={date}
                        className="calendar-control"
                    />
                </div>
            )}
            <div id={`error-${uniqueId}`} className="calendar-error"></div>
        </div>
    );
}

export default ReactCalendar;
