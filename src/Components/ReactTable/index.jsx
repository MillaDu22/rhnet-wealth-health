import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useFilters, useSortBy } from 'react-table';
import FilterInput from '../FilterInput/index.jsx';
import './ReactTable.css';

function ReactTable() {
    const employees = useSelector((state) => state.employees.employees);
    const newEmployee = useSelector((state) => state.employees.addNewEmployee);
    const [data, setData] = useState(employees);
    console.log(employees)
    
    useEffect(() => {
        if (newEmployee) {
            setData(prevData => [...prevData, newEmployee.payload.employee]);
            console.log(newEmployee)
        }
    }, [newEmployee]);

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
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useFilters, useSortBy);

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
                    {/* Nouvelle ligne pour l'employé ajouté */}
                    {newEmployee && (
                        <tr className="employee-row">
                            <td className = "new">{newEmployee?.employee?.FirstName}</td>
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

