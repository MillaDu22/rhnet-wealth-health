import React from 'react';
import "./Home.css";
import ReactTable from "../../Components/ReactTable/index.jsx";
import Collapse from '../../Components/Collapse/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setPageSize } from '../../Redux/Actions.js';

/**
 * Composant React représentant la page d'accueil de la liste du personnel Wealth-health.
 * @returns {JSX.Element} Le composant Home.
 */
function Home() {
    const pageSize = useSelector((state) => state.employees.pageSize); // action pagSize store, selected value collapse //

    const dispatch = useDispatch();
    // SearchBar action setFilter //
    const handleSearchChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    // Collapse entries //
    const options = [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
        { label: '100', value: 100 },
    ];

    // Dispatche l'action pour mettre à jour la taille de la page dans le store Redux //
    const handlePageSizeChange = (value, event) => {
        if (event) {
            event.preventDefault();
        }
        dispatch(setPageSize(Number(value)));
        // Met à jour l'état du nombre d'entrées sélectionnées //
        window.location.reload(false);
    };

    return (
        <main className="main-employees-list">
            <h2 className="title-main-page">RHnet - Wealth-Health staff list</h2>
            <div className="row-entries">
                <Collapse options={options} 
                    label="Show entries"
                    selectedValue={pageSize} 
                    collapseOnChange={(value, event) => handlePageSizeChange(value, event)}
                />
                <div className="formData-home">
                    <label htmlFor="search-bar" id="label-search-bar">Search:</label>
                    <input type="text" className="form-control-search" id="search-bar" onChange={handleSearchChange} />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div id="react-table">
                <ReactTable /> 
            </div>
        </main>
    );
}
export default Home;