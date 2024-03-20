import React from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import employees from '../../Datas/DataMockEmployees.js';
import FilterInput from '../FilterInput/index.jsx';
import './ReactTable.css';

function ReactTable() {
    const data = React.useMemo(() => employees, []);
    
    const columns = React.useMemo(
        () => [
            {
                Header: <FilterInput label="First Name" id="tri-firstname" />,
                accessor: 'First Name',
            },
            {
                Header: <FilterInput label="Last Name" id="tri-lastname" />,
                accessor: 'Last Name',
            },
            {
                Header: <FilterInput label="Start Date" id="tri-startdate" />,
                accessor: 'Start Date',
            },
            {
                Header: <FilterInput label="Department" id="tri-department" />,
                accessor: 'Department',
            },
            {
                Header: <FilterInput label="Date of Birth" id="tri-dob" />,
                accessor: 'Date of Birth',
            },
            {
                Header: <FilterInput label="Street" id="tri-street" />,
                accessor: 'Street',
            },
            {
                Header: <FilterInput label="City" id="tri-city" />,
                accessor: 'City',
            },
            {
                Header: <FilterInput label="State" id="tri-state" />,
                accessor: 'State',
            },
            {
                Header: <FilterInput label="Zip Code" id="tri-zipcode" />,
                accessor: 'Zip Code',
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
                </tbody>
            </table>
        </div>
    );
}

export default ReactTable;







