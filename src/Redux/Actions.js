import { ADD_EMPLOYEE, SEARCH_EMPLOYEE, SET_PAGE_SIZE, SORT_EMPLOYEES } from './ActionTypes';

export const addEmployee = (employee) => ({
    type: ADD_EMPLOYEE,
    payload: employee,
});

export const searchEmployee = (keyword) => ({
    type: SEARCH_EMPLOYEE,
    payload: keyword,
});

export const setPageSize = (size) => ({
    type: SET_PAGE_SIZE,
    payload: size,
});

export const sortEmployees = (columnName, direction) => ({
    type: SORT_EMPLOYEES,
    payload: { columnName, direction },
});
