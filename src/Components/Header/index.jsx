import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logoWH from "../../Assets/images/logo-wealth-health.png";

function Header () {
    return (
        <header className="header">
            <div className="box-logo-title">
            <Link className ="logo-link" to="/">
                <img src={logoWH} alt="logo hood" className= "logo" />
            </Link>
            <h1 className= "title-app">Wealth-Health</h1>
            </div>
            <nav className = "navbar-header">
                <Link className = "link-page" to="/">
                    <span className="lien-navbar-header">Employees list</span>
                </Link>
                <Link className = "link-page" to="/FormNewPage">
                    <span className="lien-navbar-header">New employees</span>
                </Link>
            </nav>
        </header>
    )
}
export default Header;