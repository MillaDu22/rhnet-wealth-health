import React from 'react';
import { useTable } from 'react-table';
import employees from '../../Datas/DataEmployees.js';
import FilterInput from '../FilterInput/index.jsx';
import "./ReactTable.css";

function ReactTable() {
    const data = React.useMemo(() => employees, []);

    const columns = React.useMemo(
        () => [
            {
                Header: () => (
                    <FilterInput label="First Name" id="tri-firstname" />
                ),
                accessor: 'First Name',
            },
            {
                Header: () => (
                    <FilterInput label="Last Name" id="tri-lastname" />
                ),
                accessor: 'Last Name',
            },
            {
                Header: () => (
                    <FilterInput label="Start Date" id="tri-startdate" />
                ),
                accessor: 'Start Date',
            },
            {
                Header: () => (
                    <FilterInput label="Department" id="tri-department" />
                ),
                accessor: 'Department',
            },
            {
                Header: () => (
                    <FilterInput label="Date of Birth" id="tri-dob" />
                ),
                accessor: 'Date of Birth',
            },
            {
                Header: () => (
                    <FilterInput label="Street" id="tri-street" />
                ),
                accessor: 'Street',
            },
            {
                Header: () => (
                    <FilterInput label="City" id="tri-city" />
                ),
                accessor: 'City',
            },
            {
                Header: () => (
                    <FilterInput label="State" id="tri-state" />
                ),
                accessor: 'State',
            },
            {
                Header: () => (
                    <FilterInput label="Zip Code" id="tri-zipcode" />
                ),
                accessor: 'Zip Code',
            },
        ],
        []
    );

    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="container-table">
            <div className="row-input-tri">
            </div>
            {/* Tableau d'affichage personnel */}
            <div className="table">
                <div className="tbody" {...getTableProps()}>
                    {/* Affichage des lignes de personnel */}
                    {headerGroups.map(headerGroup => (
                        <div {...headerGroup.getHeaderGroupProps()} className="tr">
                            {headerGroup.headers.map(column => (
                                <div {...column.getHeaderProps()} className="th">
                                    {column.render('Header')}
                                </div>
                            ))}
                        </div>
                    ))}
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <div {...row.getRowProps()} className="tr">
                                {row.cells.map(cell => {
                                    return (
                                        <div {...cell.getCellProps()} className="td">
                                            {cell.render('Cell')}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ReactTable;
