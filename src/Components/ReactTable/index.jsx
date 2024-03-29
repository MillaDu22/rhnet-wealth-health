import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/Actions.js';
import React, { useEffect, useState } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import FilterInput from '../FilterInput/index.jsx';
import './ReactTable.css';

function ReactTable() {
    const dispatch = useDispatch(); 
    const employees = useSelector((state) => state.employees.employees);
    const newEmployee = useSelector((state) => state.employees.addNewEmployee);
    const filter = useSelector((state) => state.employees.filter); // Lis le filtre du store //
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
    // Déclenche l'action setFilter avec la nouvelle valeur du filtre //
        dispatch(setFilter(filter));

        // Filtre les employés en fonction du filtre //
        const filteredData = employees.filter((employee) => {
            // Vérifie d'abord si employee est défini pour éviter les erreurs de 'undefined' //
            if (employee) {
                // Convertit les valeurs en minuscules pour une correspondance insensible à la casse //
                const firstName = employee.firstName ? employee.firstName.toLowerCase() : '';
                const lastName = employee.lastName ? employee.lastName.toLowerCase() : '';
                const dateOfBirth = employee.dateOfBirth ? employee.dateOfBirth.toLowerCase() : '';
                const startDate = employee.startDate ? employee.startDate.toLowerCase() : '';
                const street = employee.street ? employee.street.toLowerCase() : '';
                const city = employee.city ? employee.city.toLowerCase() : '';
                const state = employee.state ? employee.state.toLowerCase() : '';
                const department = employee.department ? employee.department.toLowerCase() : '';
                const zipCode = employee.zipCode ? employee.zipCode.toLowerCase() : '';
                // Vérifie si une des propriétés contient la sous-chaîne du filtre //
                return (
                    firstName.includes(filter.toLowerCase()) ||
                    lastName.includes(filter.toLowerCase()) ||
                    dateOfBirth.includes(filter.toLowerCase()) ||
                    startDate.includes(filter.toLowerCase()) ||
                    state.includes(filter.toLowerCase()) ||
                    department.includes(filter.toLowerCase()) ||
                    street.includes(filter.toLowerCase()) ||
                    city.includes(filter.toLowerCase()) ||
                    zipCode.includes(filter.toLowerCase())
                );
            } else {
            return false; // Retourne false si employee est undefined pour éviter une erreur //
            }
        });
        // Met à jour l'état des employés filtrés //
        setFilteredEmployees(filteredData);
    }, [dispatch, employees, filter]); // Ajoute dispatch, employees et filter dans les dépendances de useEffect //

    const columns = React.useMemo(() => [
        {
            Header: <FilterInput label="FirstName" id="tri-firstname" />,
            accessor: 'firstName',
        },
        {
            Header: <FilterInput label="LastName" id="tri-lastname" />,
            accessor: 'lastName',
        },
        {
            Header: <FilterInput label="Start Date" id="tri-startdate" />,
            accessor: 'startDate',
        },
        {
            Header: <FilterInput label="Department" id="tri-department" />,
            accessor: 'department',
        },
        {
            Header: <FilterInput label="Date of Birth" id="tri-dob" />,
            accessor: 'dateOfBirth',
        },
        {
            Header: <FilterInput label="Street" id="tri-street" />,
            accessor: 'street',
        },
        {
            Header: <FilterInput label="City" id="tri-city" />,
            accessor: 'city',
        },
        {
            Header: <FilterInput label="State" id="tri-state" />,
            accessor: 'state',
        },
        {
            Header: <FilterInput label="Zip Code" id="tri-zipcode" />,
            accessor: 'zipCode',
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable (
        { columns, data: filteredEmployees },
        useFilters,
        useSortBy
    );

    return (
        <div className="container-table">
        <table className="table table-hover" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()} className="employee-row">
                    {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                        </td>
                    );
                    })}
                </tr>
                );
            })}
            {newEmployee && (
                <tr className="employee-row">
                <td className="new">{newEmployee?.employee?.FirstName}</td>
                <td>{newEmployee?.employee?.LastName}</td>
                <td>{newEmployee?.employee?.StartDate}</td>
                <td>{newEmployee?.employee?.Department}</td>
                <td>{newEmployee?.employee?.DateOfBirth}</td>
                <td>{newEmployee?.employee?.Street}</td>
                <td>{newEmployee?.employee?.City}</td>
                <td>{newEmployee?.employee?.State}</td>
                <td>{newEmployee?.employee?.ZipCode}</td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}
export default ReactTable;
