import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoCalendarOutline } from 'react-icons/io5';
import './ReactCalendar.css';
/*import TimePicker from '../TimePicker/index.jsx';*/

/**
 * Composant React représentant un sélecteur de date avec un calendrier.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.uniqueId - L'identifiant unique du sélecteur de date.
 * @param {string} props.label - Le libellé du sélecteur de date.
 * @param {function} props.onChange - La fonction de rappel à appeler lorsqu'une nouvelle date est sélectionnée.
 * @returns {JSX.Element} Le composant ReactCalendar.
 */
function ReactCalendar({ uniqueId, label, onChange }) {
    const [date, setDate] = useState(new Date());
    //const [time, setTime] = useState('12:00');
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef();

    /**
     * Formate la date dans le format 'jj/mm/aaaa'.
     * @param {Date} date - La date à formater.
     * @returns {string} La date formatée.
     */
    const formatDate = (date) => {
        const year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return `${day}/${month}/${year}`;
    };
    
    /**
     * Gère les clics en dehors du calendrier pour fermer celui-ci.
     * @param {MouseEvent} event - L'événement de clic.
     */
    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    /**
     * Bascule l'état d'ouverture du calendrier.
     */
    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    /**
     * Met à jour la date sélectionnée et appelle la fonction de rappel onChange.
     * @param {Date} newDate - La nouvelle date sélectionnée.
     */
    const handleChangeDate = (newDate) => {
        setDate(newDate);
        onChange(newDate); 
        setIsOpen(false);
    };

    /**
     * Met à jour l'heure sélectionnée.
     * @param {string} newTime - La nouvelle heure sélectionnée.
     */
    /*const handleChangeTime = (newTime) => {
        setTime(newTime);
    };*/

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
                    value={formatDate(date)}
                    readOnly
                    className="calendar-date-input"
                    onClick={toggleCalendar}
                    id={uniqueId}
                />
                <IoCalendarOutline className="calendar-icon" onClick={toggleCalendar} aria-label="Ouvrir le calendrier" />
            </div>
            {isOpen && (
                <div className="calendar-container">
                    <i className="fa-solid fa-house"></i>
                    <Calendar
                        onChange={handleChangeDate}
                        value={date}
                        className="calendar-control"
                    />
                    {/*<TimePicker
                        onChange={handleChangeTime}
                        value={time}
                    />*/}
                </div>
            )}
            <div id={`error-${uniqueId}`} className="calendar-error"></div>
        </div>
    );
}

export default ReactCalendar;
