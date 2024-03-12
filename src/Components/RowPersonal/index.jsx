import React from 'react';
import "./RowPersonal.css"

const RowPersonal = ({ person }) => {
    return (
        <div className ="row-dash">
            <div className = "cell-row">{person['First Name']}</div>
            <div className = "cell-row">{person['Last Name']}</div>
            <div className = "cell-row">{person['Start Date']}</div>
            <div className = "cell-row">{person['Department']}</div>
            <div className = "cell-row">{person['Date of Birth']}</div>
            <div className = "cell-row">{person['Street']}</div>
            <div className = "cell-row">{person['City']}</div>
            <div className = "cell-row">{person['State']}</div>
            <div className = "cell-row">{person['Zip Code']}</div>
        </div>
    );
};

export default RowPersonal;
