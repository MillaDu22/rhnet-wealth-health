import { IS_MODAL_OPEN, ADD_NEW_EMPLOYEE, SET_FORM_ERRORS, IS_FORM_VALID, SET_FILTER} from './ActionTypes';

export const isModalOpen = (isOpen) => ({
    type: IS_MODAL_OPEN,
    payload: isOpen,
});

export const addNewEmployee = (employee) => {
    // Récupére la date de début au format JJ/MM/AAAA //
    const formattedStartDate = employee.startDate.toLocaleDateString('fr-FR');

    // Crée une copie de l'employé avec les dates de début et de naissance formatées //
    const serializedEmployee = {
        ...employee,
        startDate: formattedStartDate,
        dateOfBirth: formattedStartDate,
    };

    return {
        type: ADD_NEW_EMPLOYEE,
        payload: serializedEmployee,
    };
};

export const setFormErrors = (errors) => ({
    type: SET_FORM_ERRORS,
    payload: errors,
});

export const isFormValid = (isValid) => ({
    type: IS_FORM_VALID,
    payload: isValid,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});
