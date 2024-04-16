import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setPageSize} from '../../Redux/Actions.js';
import React, { useEffect, useState, useCallback } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import FilterInput from '../FilterInput/index.jsx';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'; 
import './ReactTable.css';


function ReactTable() {
    const dispatch = useDispatch(); 
    const employees = useSelector((state) => state.employees.employees);
    const newEmployee = useSelector((state) => state.employees.addNewEmployee);
    const filter = useSelector((state) => state.employees.filter); // Lis le filtre du store //
    const pageSize = useSelector((state) => state.employees.pageSize);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [sortBy, setSortBy] = useState([]);

    useEffect(() => {
        // Déclenche l'action setFilter avec la nouvelle valeur du filtre //
        dispatch(setFilter(filter));
        // Filtre les employés en fonction du filtre //
        let filteredData = employees.filter((employee) => {
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
            } 
            return false;
        });
        // Tri directionnel colonnes //
        if (sortBy.length > 0) {
            const [columnId, direction] = sortBy;
            filteredData.sort((a, b) => {
                const columnA = (a[columnId] || '').toString().toLowerCase();
                const columnB = (b[columnId] || '').toString().toLowerCase();
    
                if (direction === 'desc') {
                    return columnB.localeCompare(columnA);
                } else {
                    return columnA.localeCompare(columnB);
                }
            });
        }

        setFilteredEmployees(filteredData);
    }, [dispatch, employees, filter, sortBy, pageSize]);

    const handleSortChange = useCallback((columnId, direction) => {
        setSortBy([columnId, direction]);
    }, []);

    const columns = React.useMemo(() => [
        {
            Header: <FilterInput label="FirstName" id="tri-firstname" onChange={handleSortChange} />,
            accessor: 'firstName',
            canSort: true,
        },
        {
            Header: <FilterInput label="LastName" id="tri-lastname" onChange={handleSortChange}/>,
            accessor: 'lastName',
            canSort: true,
        },
        {
            Header: <FilterInput label="Start Date" id="tri-startdate" onChange={handleSortChange}/>,
            accessor: 'startDate',
            canSort: true,
        },
        {
            Header: <FilterInput label="Department" id="tri-department" onChange={handleSortChange}/>,
            accessor: 'department',
            canSort: true,
        },
        {
            Header: <FilterInput label="Date of Birth" id="tri-dob" onChange={handleSortChange}/>,
            accessor: 'dateOfBirth',
            canSort: true,
        },
        {
            Header: <FilterInput label="Street" id="tri-street" onChange={handleSortChange}/>,
            accessor: 'street',
            canSort: true,
        },
        {
            Header: <FilterInput label="City" id="tri-city" onChange={handleSortChange}/>,
            accessor: 'city',
            canSort: true,
        },
        {
            Header: <FilterInput label="State" id="tri-state" onChange={handleSortChange}/>,
            accessor: 'state',
            canSort: true,
        },
        {
            Header: <FilterInput label="Zip Code" id="tri-zipcode" onChange={handleSortChange}/>,
            accessor: 'zipCode',
            canSort: true,
        },
    ], [handleSortChange]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
    } = useTable (
        { columns, 
            initialState: { pageIndex, pageSize },
            data: filteredEmployees, 
            updateMyData: ({ pageIndex }) => {
                setPageIndex(pageIndex);
                setPageSize(pageSize);
            }
        },
        useFilters,
        useSortBy, 
        usePagination
    );

    const handlePrevPage = () => {
        previousPage();
        setPageIndex(pageIndex - 1); // Met à jour la page actuelle au counter après avoir cliqué sur Prev //
    };

    const handleNextPage = () => {
        nextPage();
        setPageIndex(pageIndex + 1); // Met à jour la page actuelle au counter après avoir cliqué sur Next //
    };

    return (
        <div className="container-table">
            <table className="table table-hover" {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            <div className="column-header">
                                <span>{column.render('Header')}</span>
                                {column.canSort && (
                                    <div className="sort-icons">
                                    <BsArrowUp className={`arrow-icon ${column.isSorted && !column.isSortedDesc ? 'visible' : ''}`} />
                                    <BsArrowDown className={`arrow-icon ${column.isSorted && column.isSortedDesc ? 'visible' : ''}`} />
                                </div>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
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
            <div className="row-bottom">
                <span className="account-employees">Showing
                    <p className="show-number">{(pageIndex + 1 ) }</p>to
                    <p className="show-number-to">{Math.ceil(filteredEmployees.length / pageSize)}</p>of 
                    <p className="show-number-of">{ filteredEmployees.length }</p>entries
                </span>
                <div className="container-button">
                    <button className="prev" 
                        type="button"
                        name="name"
                        onClick={handlePrevPage} 
                        disabled={!canPreviousPage}>Prev
                    </button>

                    <button className="next"
                        type="button"
                        name="next"
                        onClick={handleNextPage} 
                        disabled={!canNextPage}>Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ReactTable;

