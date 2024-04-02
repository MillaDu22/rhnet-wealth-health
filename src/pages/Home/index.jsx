import React, { useState } from 'react';
import "./Home.css";
import ReactTable from "../../Components/ReactTable/index.jsx";
import Collapse from '../../Components/Collapse/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/Actions.js';

function Home() {
    const dispatch = useDispatch();
    const filteredEmployees = useSelector((state) => state.employees.employees);
    ////const [filteredEmployees, setFilteredEmployees] = useState([]); ///

    // SearchBar action setFilter //
    const handleSearchChange = (event) => {
        dispatch(setFilter(event.target.value));
         // Met à jour le filtre dans le store //
    };

    // state compteur pagination //
    const [pageSize, setPageSize] = useState(1); // Nombre  page //
    const [pageIndex, setPageIndex] = useState(0); // Index de la page actuelle //
    const [totalEntries, setTotalEntries] = useState(); // state pour le nombre entries total de page //
    const totalEmployees = filteredEmployees ? filteredEmployees.length : 0; // Nombre total d'employés après le filtrage //
    const startEmployeeIndex = pageIndex +1; // Index de départ de la pagination //
    const endEmployeeIndex = Math.min(startEmployeeIndex + pageSize, filteredEmployees.length); // Index de fin de la pagination //

    // Collapse entries //
    const options = [
        { label: '10', value: '10' },
        { label: '25', value: '25' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
    ];

    const handlePageSizeChange = (value) => {
        console.log("Nombre d'employés par page sélectionné :", value);
        setPageSize(Number(value)); // Met à jour le nombre d'éléments par page avec la nouvelle valeur sélectionnée //
    };

    // Gestion prev & next page //
    const handleNextPage = () => {
        setPageIndex(pageIndex + 1); // index de la page actuelle a +1 //
    };
    
    const handlePrevPage = () => {
        setPageIndex(pageIndex - 1); // index de la page actuelle a -1 //
    };

    return (
        <main className="main-employees-list">
            <h2 className="title-main-page">Liste du personnel Wealth-health</h2>
            <div className="row-entries">
                <Collapse options={options} 
                    label="Show entries"
                    collapseOnChange={handlePageSizeChange}
                />
                <div className="formData-home">
                    <label htmlFor="search-bar" id="label-search-bar">Search:</label>
                    <input type="text" className="form-control-search" id="search-bar" onChange={handleSearchChange} />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div id="react-table">
            <ReactTable 
                pageSize={pageSize} 
                pageIndex={pageIndex} 
                setPageSize={setPageSize} 
                setPageIndex={setPageIndex} 
                setTotalEntries={setTotalEntries} 
                filteredEmployees={filteredEmployees}
            /> 
            </div>
            <div className="row-bottom">
                <span className="account-employees">Showing
                    <p className="show-number">{startEmployeeIndex}</p>to
                    <p className="show-number-to">{endEmployeeIndex}</p>of 
                    <p className="show-number-of">{totalEmployees}</p>entries
                </span>
                <div className="container-button">
                    <button className="prev" 
                        type="button" name="prev" 
                        onClick={handlePrevPage} 
                        disabled={pageIndex === 0}>Prev
                    </button>
                    <button className="next" 
                        type="button" 
                        name="next" 
                        onClick={handleNextPage} 
                        disabled={totalEntries <= (pageIndex + 1) * pageSize}>Next
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Home;



