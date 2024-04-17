import React, {useRef} from 'react';
import './TimePicker.css';

/**
 * Composant React représentant un sélecteur d'heure.
 * @param {object} props - Les propriétés du composant.
 * @param {function} props.onChange - La fonction de rappel à appeler lorsqu'une nouvelle heure est sélectionnée.
 * @param {string} props.value - L'heure actuellement sélectionnée.
 * @returns {JSX.Element} Le composant TimePicker.
 */
function TimePicker({ onChange, value }) {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 4 }, (_, i) => i * 15);
    const hourColumnRef = useRef(null);

    /**
     * Gère le défilement vers le haut ou le bas dans la colonne des heures.
     * @param {string} direction - La direction du défilement ('up' pour vers le haut, 'down' pour vers le bas).
     */
    const handleScroll = (direction) => {
        const scrollAmount = 100;
        if (hourColumnRef.current) {
            if (direction === 'up') {
                hourColumnRef.current.scrollTop -= scrollAmount;
            } else if (direction === 'down') {
                hourColumnRef.current.scrollTop += scrollAmount;
            }
        }
    };

    /**
     * Gère le changement de l'heure sélectionnée.
     * @param {number} hour - L'heure sélectionnée.
     * @param {number} minute - La minute sélectionnée.
     */
    const handleTimeChange = (hour, minute) => {
        onChange(`${hour}:${minute < 10 ? `0${minute}` : minute}`);
    };

    return (
        <div className="time-picker">
            <button type="button" name="up" className="scroll-button" onClick={() => handleScroll('up')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path d="M8.646 4.354a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 5.707 4.354 9.354a.5.5 0 1 1-.708-.708l4-4z"/>
                </svg>
            </button>
            <div className ="container-buttons">
                {hours.map((hour) => (
                    <div key={hour} className="hour-column">
                        {minutes.map((minute) => (
                            <button
                            key={minute}
                            className={`time-button ${value === `${hour}:${minute < 10 ? `0${minute}` : minute}` ? 'selected' : ''}`}
                            onClick={() => handleTimeChange(hour, minute)}>
                                {`${hour}:${minute < 10 ? `0${minute}` : minute}`}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <button type="button" name="down" className="scroll-button" onClick={() => handleScroll('down')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path d="M4.646 6.646a.5.5 0 0 1 .708 0L8 9.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
    );
}

export default TimePicker;

