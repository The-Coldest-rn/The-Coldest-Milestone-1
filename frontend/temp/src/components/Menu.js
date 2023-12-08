import React from 'react';
<<<<<<< Updated upstream
import logo from '../TCM1.png';

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container"><a className="navbar-brand d-flex align-items-center justify-content-center" href="#"><img src={logo} width="450" height="350" /></a>
                <div id="navcol-2" className="collapse navbar-collapse"></div>
=======
import { Link } from 'react-router-dom';
import logo from '../The_coldest_market.png';

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container-fluid">
                <Link to="" className="navbar-brand d-flex align-items-center">
                    <img src={logo} width="47" height="51" alt="Logo" />
                    <span style={{ fontWeight: 'bold', color: '#08338c' }}>Belizean Breeze Airlines</span>

                        <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" className="nav-link">Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/account" className="nav-link">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/results" className="nav-link">Results</Link>
                        </li>
                      </ul>
                  </div>
                </Link>
>>>>>>> Stashed changes
            </div>
        </nav>
    );
}

export default Menu;