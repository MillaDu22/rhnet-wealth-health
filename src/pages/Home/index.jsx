import React from 'react';
import "./Home.css";
import ReactTable from "../../Components/ReactTable/index.jsx";
import Collapse from '../../Components/Collapse/index.jsx';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/Actions.js';

function Home() {
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        dispatch(setFilter(event.target.value)); // Met à jour le filtre dans le store //
    };
    
    const options = [
        { label: '10', value: '10' },
        { label: '25', value: '25' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
    ];

    return (
        <main className="main-employees-list">
            <h2 className="title-main-page">Liste du personnel Wealth-health</h2>
            <div className="row-entries">
                <Collapse options={options} label="Show entries" />
                <div className="formData-home">
                    <label htmlFor="search-bar" id="label-search-bar">Search:</label>
                    <input type="text" className="form-control-search" id="search-bar" onChange={handleSearchChange} />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div id="react-table">
            <ReactTable /> 
            </div>
            <div className="row-bottom">
                <span className="account-employees">Showing
                    <p className="show-number">10</p>to
                    <p className="show-number-to">10</p>of 
                    <p className="show-number-of">12</p>entries
                </span>
                <div className = "container-button">
                    <button className="prev" type="button" name="prev">Prev</button>
                    <button className="next" type="button" name="prev">Next</button>
                </div>
            </div>
        </main>
    );
}

export default Home;



