import { combineReducers } from 'redux';
import { ADD_NEW_EMPLOYEE, IS_MODAL_OPEN, SET_FORM_ERRORS, IS_FORM_VALID, SET_FILTER, SET_PAGE_SIZE} from './ActionTypes';


const initialEmployeesState = {
    isFormValid:false,
    isModalOpen: false, 
    errors: {},
    employee: [],
    filter:'',
    pageSize: 10,
    employees: [
        {
            "id": 1,
            "firstName": "Benito",
            "lastName": "Casan",
            "startDate": "01/08/1842",
            "department": "Marketing" ,
            "dateOfBirth": "03/05/1828",
            "street": "14 rue Victor Hugo",
            "city": "Sète",
            "state": "Virginia",
            "zipCode": "001",
        },
        {
            "id": 2,
            "firstName": "Rosa",
            "lastName": "Salvado",
            "startDate": "07/11/1953",
            "department": "Sales" ,
            "dateOfBirth": "08/01/1924",
            "street": "2 rue Gambetta",
            "city": "Pezenas",
            "state": "South Carolina",
            "zipCode": "002",
        },
        {
            "id": 3,
            "firstName": "Adan",
            "lastName": "Cerda",
            "startDate": "09/12/1920",
            "department": "Human Ressources" ,
            "dateOfBirth": "01/08/1900",
            "street": "Le travers",
            "city": "Saint-Malo",
            "state": "South Dakota",
            "zipCode": "003",
        },
        {
            "id": 4,
            "firstName": "Anton",
            "lastName": "Robershow",
            "startDate": "20/01/1953",
            "department": "Legal" ,
            "dateOfBirth": "12/06/1924",
            "street": "16 bd Las Vegas",
            "city": "USA",
            "state": "California",
            "zipCode": "004",
        },
        {
            "id": 5,
            "firstName": "Fabiano",
            "lastName": "Reno",
            "startDate": "04/09/1884",
            "department": "Engineering" ,
            "dateOfBirth": "21/02/1860",
            "street": "21 dock of marina",
            "city": "Arkansas",
            "state": "Tennessee",
            "zipCode": "005",
        },
        {
            "id": 6,
            "firstName": "Bob",
            "lastName": "Kennedy",
            "startDate": "24/07/1946",
            "department": "Sales" ,
            "dateOfBirth": "22/05/1923",
            "street": "678 North Playa",
            "city": "Manathan",
            "state": "Florida",
            "zipCode": "006",
        },
        {
            "id": 7,
            "firstName": "Harry",
            "lastName": "Potter",
            "startDate": "31/10/1986",
            "department": "Engineering" ,
            "dateOfBirth": "03/03/1960",
            "street": "Palais de Windsor",
            "city": "Windsor",
            "state": "Alabama",
            "zipCode": "007",
        },
        {
            "id": 8,
            "firstName": "Gulum",
            "lastName": "Monster",
            "startDate": "04/08/1977",
            "department": "Sales" ,
            "dateOfBirth": "29/01/1952",
            "street": "valls de Andorra",
            "city": "Puicerda",
            "state": "Mississippi",
            "zipCode": "008",
        },
        {
            "id": 9,
            "firstName": "Pedro",
            "lastName": "Antonio",
            "startDate": "01/08/1998",
            "department": "Legal" ,
            "dateOfBirth": "16/09/1978",
            "street": "10 de la Vega",
            "city": "Las Vegas",
            "state": "Virginia",
            "zipCode": "009",
        },
        {
            "id": 10,
            "firstName": "Juan",
            "lastName": "Salvado",
            "startDate": "01/12/2014",
            "department": "Human Ressources" ,
            "dateOfBirth": "28/02/1994",
            "street": "118 Time Square",
            "city": "Liverpool",
            "state": "New Jersey",
            "zipCode": "010",
        },
        {
            "id": 11,
            "firstName": "Tonio",
            "lastName": "Ferreira",
            "startDate": "31/01/2022",
            "department": "Marheting" ,
            "dateOfBirth": "12/08/2002",
            "street": "2 av de la playa",
            "city": "Lille",
            "state": "south Carolina",
            "zipCode": "011",
        },
        {
            "id": 12,
            "firstName": "Maria",
            "lastName": "Miguel",
            "startDate": "18/12/2023",
            "department": "Engineering" ,
            "dateOfBirth": "25/09/2001",
            "street": "Ile de Saint Denis",
            "city": "Saint-Denis",
            "state": "florida",
            "zipCode": "012",
        },
    ]
};

const employeesReducer = (state = initialEmployeesState, action) => {
    switch (action.type) {
        case ADD_NEW_EMPLOYEE:
            console.log("ADD_NEW_EMPLOYEE action dispatched with payload:", action.payload);
        return {
            ...state,
            employees: [...state.employees, action.payload],
        };
        
        case IS_MODAL_OPEN:
            console.log("IS_MODAL_OPEN action dispatched");
            return {
                ...state, 
                isModalOpen: action.payload,
            }

        case SET_FORM_ERRORS:
            console.log("SET_FORM_ERRORS action dispatched with payload:", action.payload);
            return {
                ...state,
                setFormErrors: action.payload,
            };

        case IS_FORM_VALID:
            console.log("IS_FORM_VALID action dispatched with payload:", action.payload);
            return {
                ...state,
                isFormValid: action.payload,
            }

        case SET_FILTER:
            console.log("SET_FILTER action dispatched with payload:", action.payload);
            return {
                ...state,
                filter: action.payload,
            };

        case SET_PAGE_SIZE:
            console.log("SET_PAGE_SIZE action dispatched with payload:", action.payload);
            return {
                ...state,
                pageSize: action.payload,
            };

        default:
            return state;
    }
};

export default combineReducers({ employees: employeesReducer});
