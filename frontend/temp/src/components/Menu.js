import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container">
                <div id="navcol-2" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto" style={{ listStyleType: 'none', color: 'white' }}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/map" className="nav-link">Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/account" className="nav-link">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/settings" className="nav-link">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/results" className="nav-link">Results</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
