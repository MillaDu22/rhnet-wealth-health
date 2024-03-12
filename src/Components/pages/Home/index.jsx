import React from 'react';
import "./Home.css";
import DashHome from "../../DashHome/index.jsx";
import Collapse from '../../Collapse/index.jsx';
//import "../../Collapse/Collapse.css";


function Home() {
    const options = [
        { label: '10', value: '10' },
        { label: '25', value: '25' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
    ];
    return(
        <main className ="main-employees-list">
            <h2 className = "title-main-page">Liste du personnel Wealth-health</h2>
            <div className="row-entries">
                <Collapse options={options} label= "Show entries"/>
                <div className="formData-home">
                        <label htmlFor="search-bar" id="label-search-bar">Search:</label>
                        <input type="text" className="form-control-search" id="search-bar"/>
                        <i className="fas fa-search"></i>
                </div>
            </div>
            <DashHome />
        </main>
    )
}
export default Home;