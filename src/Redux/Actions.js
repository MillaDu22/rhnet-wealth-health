import { ADD_NEW_EMPLOYEE, SET_FORM_ERRORS, IS_FORM_VALID, SET_FILTER, SET_PAGE_SIZE} from './ActionTypes';

export const addNewEmployee = (employee) => {
    // Récupére la date de début au format JJ/MM/AAAA //
    const formattedStartDate = employee.startDate.toLocaleDateString('fr-FR');
    const formattedDateOfBirth = employee.dateOfBirth.toLocaleDateString('fr-FR');

    // Crée une copie de l'employé avec les dates de début et de naissance formatées //
    const serializedEmployee = {
        ...employee,
        startDate: formattedStartDate,
        dateOfBirth: formattedDateOfBirth,
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

export const setPageSize = (pageSize) => ({
        type: SET_PAGE_SIZE,
        payload: pageSize,
});



