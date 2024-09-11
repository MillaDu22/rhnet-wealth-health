import React, { useState} from 'react';
import { departments } from "../../Datas/DataDepartment.js";
import { states } from "../../Datas/DataStates.js";
import { Modale } from  "react-modale-by-ldla"; // Mon package npm //
import ReactSelect from "../../Components/ReactSelect/index.jsx";
import ReactCalendar from "../../Components/ReactCalendar/index.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { isFormValid, addNewEmployee, setFormErrors } from '../../Redux/Actions';
import "./FormNewPage.css";

/**
 * Composant React représentant la page de création d'un nouveau personnel.
 * @returns {JSX.Element} Le composant FormNewPage.
 */
function FormNewPage() {
    const [isOpen, setIsOpen] = useState(false); // State modale par défaut //
    const formErrors = useSelector((state) => state.employees.errors); // errors action store //
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        startDate: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    });
    // selection date //
    const handleDateOfBirthChange = (newDate) => {
        setFormData(prevState => ({
            ...prevState,
            dateOfBirth: newDate,
        }));
    };
    // selection date //
    const handleStartDateChange = (newDate) => {
        setFormData(prevState => ({
            ...prevState,
            startDate: newDate,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // selection pays //
    const handleStateChange = (selectedState) => {
        setFormData(prevState => ({ ...prevState, state: selectedState }));
    };
    // selection departement //
    const handleDepartmentChange = (selectedDepartment) => {
        setFormData(prevState => ({ ...prevState, department: selectedDepartment }));
    };
    // Les erreurs formulaire //
    const submitForm = (e) => {
        e.preventDefault();

        let errors = {}; // Initialise un objet pour stocker les erreurs //
        // Vérifie chaque champ et ajoute les erreurs au besoin //
        if (formData.firstName.trim() === '') {
            errors.firstName = "Le prénom est requis.";
        }
        if (formData.lastName.trim() === '') {
            errors.lastName = "Le nom est requis.";
        }
        if (formData.street.trim() === '') {
            errors.street = "La rue est requise.";
        }
        if (formData.state.trim() === '') {
            errors.state = "La selection d'un pays est requise.";
        }
        if (formData.department.trim() === '') {
            errors.department = "La selection d'un service est requise.";
        }
        if (formData.city.trim() === '') {
            errors.city = "La ville est requise.";
        }
        if (formData.zipCode.trim() === '') {
            errors.zipCode = "Le code postal est requis.";
        } 
        if (Object.keys(errors).length > 0) {
            dispatch(setFormErrors(errors));
            return;
        } 

        // Si des erreurs sont présentes, dispatch l'action setFormErrors //
        if (Object.keys(errors).length > 0) {
            dispatch(setFormErrors(errors));
            setIsOpen(false);
            return; // Arrête le traitement de la soumission du formulaire //
        }
        // Sinon formulaire valide dispatch actions formvalid, modaleopen, addEmployee, vide champs form //
        dispatch(isFormValid(true));
        setIsOpen(true);
        dispatch(addNewEmployee(formData));
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

    return (
        <div className="page-create">
            <h2 className="title-page">RHnet - Adding Wealth-Health staff </h2>
            <form name="create" noValidate onSubmit={submitForm}>
                <div className="aside-left">
                    <div className="formData">
                        <label className="label-create" htmlFor="first">FirstName</label>
                        <input
                            className="text-control"
                            tabIndex="0"
                            type="text"
                            id="first"
                            name="firstName"
                            minLength="2"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {formErrors && formData.firstName === '' && (
                            <span className="error-message">{formErrors.firstName}</span>
                        )}
                    </div>

                    <div className="formData">
                        <label className="label-create" htmlFor="last">LastName</label>
                        <input
                            className="text-control"
                            type="text"
                            id="last"
                            name="lastName"
                            minLength="2"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {formErrors && formData.lastName === '' && (
                            <span className="error-message">{formErrors.lastName}</span>
                        )}
                    </div>

                    <ReactCalendar
                        uniqueId="dateOfBirth"
                        label="Date of Birth"
                        onChange={handleDateOfBirthChange}
                    />
                    {formErrors && formData.dateOfBirth === '' && (
                        <span className="error-message">{formErrors.dateOfBirth}</span>
                    )}

                    <ReactCalendar
                        uniqueId="startDate"
                        label="Start Date"
                        onChange={handleStartDateChange}
                    />
                    {formErrors && formData.startDate === '' && (
                        <span className="error-message">{formErrors.startDate}</span>
                    )}
                </div>

                <div className="aside-right">
                    <h3 className="title-adress">Adress</h3>
                    <div className="formData">
                        <label className="label-create focus" htmlFor="street">Street</label>
                        <input
                            className="text-control"
                            type="text"
                            id="street"
                            name="street"
                            minLength="2"
                            required
                            value={formData.street}
                            onChange={handleChange}
                        />
                        {formErrors && formData.street === '' && (
                            <span className="error-message">{formErrors.street}</span>
                        )}
                    </div>

                    <div className="formData">
                        <label className="label-create" htmlFor="city">City</label>
                        <input
                            className="text-control"
                            type="text"
                            id="city"
                            name="city"
                            minLength="2"
                            required
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {formErrors && formData.city === '' && (
                            <span className="error-message">{formErrors.city}</span>
                        )}
                    </div>

                    <ReactSelect
                        uniqueId="show-states"
                        options={states.map((state) => ({ label: state.name, value: state.name, isDefault: state.name === 'Alabama' }))}
                        label="State"
                        value={formData.state}
                        onChange={handleStateChange}
                    />
                    {formErrors && formData.state === '' && (
                        <span className="error-message">{formErrors.state}</span>
                    )}

                    <div className="formData">
                        <label className="label-create" htmlFor="zip">Zip Code</label>
                        <input
                            className="text-control"
                            type="number"
                            id="zip"
                            name="zipCode"
                            min="1"
                            max="100OOO"
                            required
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                        {formErrors && formData.zipCode === '' && (
                            <span className="error-message">{formErrors.zipCode}</span>
                        )}
                    </div>

                    <ReactSelect
                        uniqueId="show-departments"
                        options={departments.map((department) => ({ label: department.name, value: department.name, isDefault: department.name === 'Sales' }))}
                        label="Department"
                        value={formData.department}
                        onChange={handleDepartmentChange}
                    />
                    {formErrors && formData.department === '' && (
                        <span className="error-message">{formErrors.department}</span>
                    )}

                    <button type="submit" className="btn btn-primary btn-submit" data-bs-toggle="modal" data-bs-target="#Modal">Save</button>
                </div>
            </form>
            <Modale
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                title="Confirmation &#10004;"
                content={<p>Employee created.</p>}
            />
        </div>
    );
}

export default FormNewPage;