import { IS_MODAL_OPEN, ADD_NEW_EMPLOYEE, SET_FORM_ERRORS, IS_FORM_VALID} from './ActionTypes';

export const isModalOpen = (isOpen) => ({
    type: IS_MODAL_OPEN,
    payload: isOpen,
});

export const addNewEmployee = (employee) => ({
    type: ADD_NEW_EMPLOYEE,
    payload: employee,
});

export const setFormErrors = (errors) => ({
    type: SET_FORM_ERRORS,
    payload: errors,
});

export const isFormValid = (isValid) => ({
    type: IS_FORM_VALID,
    payload: isValid,
});

export function addEmployee () {
    return (dispatch) => {
        const firstNameInput = document.getElementById('first');
        const lastNameInput = document.getElementById('last');
        const dateOfBirthInput = document.getElementById('dateOfBirth');
        const startDateInput = document.getElementById('startDate');
        const streetInput = document.getElementById('street');
        const cityInput = document.getElementById('city');
        const stateInput = document.getElementById('react-select-3-input');
        const zipCodeInput = document.getElementById('zip');
        const departmentInput = document.getElementById('react-select-5-input');
        const inputs = [firstNameInput, lastNameInput, dateOfBirthInput, startDateInput,
        streetInput, cityInput, stateInput, zipCodeInput, departmentInput];
        
        // Validation des champs //
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const dateOfBirth = dateOfBirthInput.value.trim();
        const startDate = startDateInput.value.trim();
        const street = streetInput.value.trim();
        const city = cityInput.value.trim();
        const state = stateInput ? stateInput.getAttribute('value').trim() : '';
        const zipCode = zipCodeInput.value.trim();
        const department = departmentInput ? departmentInput.getAttribute('value').trim() : '';
        const values = [firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department];

        const employee = {
            'firstName': firstName,
            'lastName': lastName,
            'dateOfBirth': dateOfBirth,
            'startDate': startDate,
            'street': street,
            'city': city,
            'state': state,
            'zipCode': zipCode,
            'department': department
        };

        // Gestion des messages erreurs //
        let errors = {};
        if (firstName === '') {
            errors.FirstName = "Le prénom est requis.";
        }
        if (lastName === '') {
            errors.LastName = "Le nom est requis.";
        }
        if (street === '') {
            errors.Street = "La rue est requise.";
        }
        if (city === '') {
            errors.City = "La ville est requise.";
        }
        if (zipCode === '') {
            errors.ZipCode = "Le code postal est requis.";
        } 
        if (Object.keys(errors).length > 0) {
            dispatch(setFormErrors(errors));
            return;
        } 

        let isFormValid = true;
        for (let value of values) {
            if (value === '') {
                isFormValid = false;
            }
        }
        // Modale si champs input rempli //
        if (isFormValid) {
            dispatch(isModalOpen(true));
            dispatch(addNewEmployee(employee));
            // Clean champs inputs apres soumission du formulaire //
            for (let input of inputs) {
                input.value = '';
            }
        }
    } 
}  
