import React from 'react';
import FilterInput from '../FilterInput/index.jsx';
import RowPersonal from '../RowPersonal/index.jsx';
import employees from '../../Datas/DataEmployees.js'; 
import "./DashHome.css";

function DashHome() {
    return (
        <div className ="container-dash">
            <div className ="row-input-tri">
                {/* Inputs de filtre */}
                <FilterInput label="First Name" id="tri-firstname" />
                <FilterInput label="Last Name" id="tri-lastname" />
                <FilterInput label="Start Date" id="tri-startdate" />
                <FilterInput label="Department" id="tri-department" />
                <FilterInput label="Date of Birth" id="tri-dob" />
                <FilterInput label="Street" id="tri-street" />
                <FilterInput label="City" id="tri-city" />
                <FilterInput label="State" id="tri-state" />
                <FilterInput label="Zip Code" id="tri-zipcode" />
            </div>
            {/* Tableau d'affichage personnel */}
            <div className ="table">
                <div className="tbody">
                    {/* Affichage des lignes de personnel */}
                    {employees.map((person) => (
                        <RowPersonal key={person.id} person={person} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashHome;
