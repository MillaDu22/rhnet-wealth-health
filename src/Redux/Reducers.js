import { combineReducers } from 'redux';
import { ADD_EMPLOYEE, SEARCH_EMPLOYEE, SET_PAGE_SIZE, SORT_EMPLOYEES } from './ActionTypes';

const initialEmployeesState = {
    list: [], // Liste des employés //
    searchKeyword: '', // Mot-clé de recherche //
    pageSize: 10, // Nombre d'employés par page //
};

const employeesReducer = (state = initialEmployeesState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
        return {
            ...state,
            list: [...state.list, action.payload],
        };
        case SEARCH_EMPLOYEE:
        return {
            ...state,
            searchKeyword: action.payload,
        };
        case SET_PAGE_SIZE:
        return {
            ...state,
            pageSize: action.payload,
        };
        case SORT_EMPLOYEES:
        // Logique de tri des employés en fonction du nom de la colonne et de la direction //
        return state; // Placeholder //
        default:
        return state;
    }
};

export default combineReducers({
    employees: employeesReducer,
    // Autres reducers //
});
