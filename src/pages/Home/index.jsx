import React from 'react';
import "./Home.css";
import ReactTable from "../../Components/ReactTable/index.jsx";
import Collapse from '../../Components/Collapse/index.jsx';
import { useDispatch } from 'react-redux';
import { setFilter, setPageSize } from '../../Redux/Actions.js';

function Home() {
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

    const handlePageSizeChange = (value, event) => {
        // Dispatche l'action pour mettre à jour la taille de la page dans le store Redux //
        console.log(value);
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        dispatch(setPageSize(Number(value)));
        // Met à jour l'état du nombre d'entrées sélectionnées //
    };

    return (
        <main className="main-employees-list">
            <h2 className="title-main-page">Liste du personnel Wealth-health</h2>
            <div className="row-entries">
                <Collapse options={options} 
                    label="Show entries"
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