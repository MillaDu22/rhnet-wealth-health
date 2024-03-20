import React, { useState } from 'react';
import "./FormNewPage.css";
import { states } from "../../Datas/DataStates.js";
import { departments } from "../../Datas/DataDepartment.js";
import Modal from "../../Components/Modal/index.jsx";
import ReactSelect from "../../Components/ReactSelect/index.jsx";
import ReactCalendar from "../../Components/ReactCalendar/index.jsx";

function FormNewPage () {
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        department: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Soumettre le formulaire ici //
        console.log(formData);
    };

    return(
        <div className="page-create">
            <h2 className="title-page">RHNet - Create new employees</h2>
            <form name="create" noValidate onSubmit={handleSubmit}>
                <div className="aside-left">
                    <div className="formData">
                        <label className="label-create" htmlFor="first">Prénom</label>
                        <input className="text-control" tabIndex="0" type="text" id="first" name="first" minLength="2" required value={formData.first} onChange={handleChange} />
                    </div>
                    <div className="formData">
                        <label className="label-create" htmlFor="last">Nom</label>
                        <input className="text-control" type="text" id="last" name="last" minLength="2" required value={formData.last} onChange={handleChange} />
                    </div>
                    <ReactCalendar uniqueId="dateOfBirth" label="Date of Birth" />
                    <ReactCalendar uniqueId="startData" label="Start Date" />
                </div>
                <div className="aside-right">
                    <h3 className="title-adress">Adress</h3>
                    <div className="formData">
                        <label className="label-create focus" htmlFor="street">Street</label>
                        <input className="text-control" type="text" id="street" name="street" value={formData.street} onChange={handleChange} />
                    </div>
                    <div className="formData">
                        <label className="label-create" htmlFor="city">City</label>
                        <input className="text-control" type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <ReactSelect uniqueId="show-states" options={states.map((state, index) => ({ label: state.name, value: index, isDefault: state.name === 'Alabama' }))} label="State"/>
                    <div className="formData">
                        <label className="label-create" htmlFor="zip">Zip Code</label>
                        <input className="text-control" type="number" id="zip" name="zip" min="1" max="100" value={formData.zip} onChange={handleChange} />
                    </div>
                    <ReactSelect uniqueId="show-departments" options={departments.map((department, index) => ({ label: department.name, value: index, isDefault: department.name === 'Sales'  }))} label="Department" />
                    <button type="submit" className="btn btn-primary btn-submit" data-bs-toggle="modal" data-bs-target="#Modal">Save</button>
                </div>
            </form>
            <Modal />
        </div>
    )
}

export default FormNewPage;
