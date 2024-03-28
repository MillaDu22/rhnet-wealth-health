import React, {useState} from 'react';
import { states } from "../../Datas/DataStates.js";
import { departments } from "../../Datas/DataDepartment.js";
import Modal from "../../Components/Modal/index.jsx";
import ReactSelect from "../../Components/ReactSelect/index.jsx";
import ReactCalendar from "../../Components/ReactCalendar/index.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { isFormValid, addNewEmployee, isModalOpen} from '../../Redux/Actions';
import "./FormNewPage.css";

function FormNewPage () {
    const formErrors = useSelector((state) => state.employees.setFormErrors);
    //const isModalOpen =useSelector ((state) => state.employees.isModalOpen);
    const dispatch = useDispatch();

        const initialFormState = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: ''
        };
        const [formData, setFormData] = useState(initialFormState);

    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(isFormValid(true));
        dispatch(isModalOpen(true));
        dispatch(addNewEmployee(formData))
        setFormData({ 
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: ''
        });
    };
    return(
        <div className="page-create">
            <h2 className="title-page">RHNet - Create new employees</h2>
            <form name="create" noValidate onSubmit={submitForm}>
                <div className="aside-left">
                    <div className="formData">
                        <label className="label-create" htmlFor="first">Prénom</label>
                        <input className="text-control"
                        tabIndex="0" 
                        type="text" 
                        id="first" 
                        name="firstName" 
                        minLength="2" 
                        required  
                        value={formData.firstName} 
                        onChange={handleChange}/>
                        {formErrors && formData.firstName === '' && (
                        <span className="error-message">{formErrors.firstName}</span>)}
                    </div>

                    <div className="formData">
                        <label className="label-create" htmlFor="last">Nom</label>
                        <input className="text-control" 
                        type="text" 
                        id="last" 
                        name="lastName" 
                        minLength="2" 
                        required 
                        value={formData.lastName}
                        onChange={handleChange}/>
                        {formErrors && formData.lastName === '' && (
                        <span className="error-message">{formErrors.lastName}</span>)}
                    </div>

                    <ReactCalendar uniqueId="dateOfBirth" 
                    label="Date of Birth" 
                    value={formData.dateOfBirth}
                    onChange={(date) => setFormData(prevState => ({ ...prevState, dateOfBirth: date }))} />
                    {formErrors && formData.dateOfBirth === '' && (
                    <span className="error-message">{formErrors.dateOfBirth}</span>)}

                    <ReactCalendar uniqueId="startDate" 
                    label="Start Date" 
                    value={formData.startDate}
                    onChange={(date) => setFormData(prevState => ({ ...prevState, startDate: date }))} />
                    {formErrors && formData.startDate === '' && (
                    <span className="error-message">{formErrors.startDate}</span>)}
                </div>

                <div className="aside-right">
                    <h3 className="title-adress">Adress</h3>
                    <div className="formData">
                        <label className="label-create focus" htmlFor="street">Street</label>
                        <input className="text-control" 
                        type="text" 
                        id="street" 
                        name="street" 
                        minLength="2" 
                        required
                        value={formData.street}
                        onChange={handleChange}/>
                        {formErrors && formData.street === '' && (
                        <span className="error-message">{formErrors.street}</span>)}
                    </div>

                    <div className="formData">
                        <label className="label-create" htmlFor="city">City</label>
                        <input className="text-control" 
                        type="text" 
                        id="city" 
                        name="city" 
                        minLength="2" 
                        required 
                        value={formData.city}
                        onChange={handleChange}/>
                        {formErrors && formData.city === '' && (
                        <span className="error-message">{formErrors.city}</span>)}
                    </div>

                    <ReactSelect uniqueId="show-states" 
                    options={states.map((state, index) => ({ label: state.name, value: index, isDefault: state.name === 'Alabama' }))} 
                    label="State" 
                    value={formData.state}
                    onChange={(selectedOption) => setFormData(prevState => ({ ...prevState, state: selectedOption }))} />
                    {formErrors && formData.state === '' && (
                    <span className="error-message">{formErrors.state}</span>)}

                    <div className="formData">
                        <label className="label-create" htmlFor="zip">Zip Code</label>
                        <input className="text-control" 
                        type="number" 
                        id="zip" 
                        name="zipCode" 
                        min="1" 
                        max="100OOO" 
                        required 
                        value={formData.zipCode}
                        onChange={handleChange}/>
                        {formErrors && formData.zipCode === '' && (
                        <span className="error-message">{formErrors.zipCode}</span>)}
                    </div>

                    <ReactSelect uniqueId="show-departments" 
                    options={departments.map((department, index) => ({ label: department.name, value: index, isDefault: department.name === 'Sales'  }))} 
                    label="Department" 
                    value={formData.department}
                    onChange={(selectedOption) => setFormData(prevState => ({ ...prevState, department: selectedOption }))} />
                    {formErrors && formData.department === '' && (
                    <span className="error-message">{formErrors.department}</span>)}

                    <button type="submit" className="btn btn-primary btn-submit" data-bs-toggle="modal" data-bs-target="#Modal">Save</button>
                </div>
            </form>
            <Modal/>
        </div>
    )
}
export default FormNewPage;

