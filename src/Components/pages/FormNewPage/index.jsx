import React from 'react';
import "./FormNewPage.css";
import { states } from "../../../Datas/DataStates.js";
import { departments } from "../../../Datas/DataDepartment.js";
import Modal from "../../Modal/index.jsx";
import ReactSelect from "../../ReactSelect/index.jsx";
import ReactCalendar from "../../ReactCalendar/index.jsx"

function FormNewPage () {
    return(
        <div className="page-create">
            <h2 className = "title-page">RHNet - Create new employees</h2>
            <form name= "create" noValidate>
                <div className="aside-left">
                    <div className="formData">
                        <label className="label-create" htmlFor ="first">Prénom</label>
                        <input className="text-control" tabIndex= "0" type="text" id="first" name="first" minLength="2" required />
                        <div id="error-first"></div>
                    </div>
                    <div className="formData">
                        <label className="label-create" htmlFor="last">Nom</label>
                        <input className="text-control" type="text" id="last" name="last" minLength="2" required/>
                        <div id="error-last"></div>
                    </div>
                    <ReactCalendar uniqueId="dateOfBirth" label="Date of Birth" />
                    <ReactCalendar uniqueId="startData" label="Start Date" />
                </div>
                <div className="aside-right">
                    <h3 className= "title-adress">Adress</h3>
                    <div className="formData">
                        <label className="label-create focus" htmlFor="street">Street</label>
                        <input className="text-control" type="text" id="street" name="street"/>
                        <div id="error-street"></div>
                    </div>
                    <div className="formData">
                        <label className="label-create" htmlFor="city">City</label>
                        <input className="text-control" type="text" id="city" name="city"/>
                        <div id="error-city"></div>
                    </div>
                    <ReactSelect inputId="show-states" options={states.map((state, index) => ({ label: state.name, value: index, isDefault: state.name === 'Alabama' }))} label="State"/>
                    <div className="formData">
                        <label className="label-create" htmlFor="zip">Zip Code</label>
                        <input className="text-control" type="number" id="zip" name="zip" min="1" max="100" />
                        <div id="error-zip"></div>
                    </div>
                    <ReactSelect inputId="show-departments" options={departments.map((department, index) => ({ label: department.name, value: index, isDefault: department.name === 'Sales'  }))} label="Department" />
                    <button type="submit" className="btn btn-primary btn-submit" data-bs-toggle="modal" data-bs-target="#Modal">Save</button>
                </div>
            </form>
            <Modal />
        </div>
    )
}
export default FormNewPage;