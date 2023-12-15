import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container-fluid custom-spaceTop">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span style={{ fontWeight: "bold", color: "#ffffff" }}>The Coldest Market</span>
                </Link>
                <div className="card-header bz-nav">
                    <ul className="nav nav-tabs card-header-tabs" style={{ listStyleType: 'none', color: 'white', padding: 25, margin: 10, display: 'flex', justifyContent: 'space-between', background: '#23218a' }}>
                        <li className="nav-item" style={{ padding: '10px 10px', borderRadius: '5px' }}>
                            <Link to="/" className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#Home" aria-selected="false" aria-controls="Home" role="tab" style={{ backgroundColor: 'rgba(50,146,201,0.93)', padding: '15px', borderRadius: '5px' }}>Home</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '10px 10px', borderRadius: '5px' }}>
                            <Link to="/user/signup" className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#SignUp" aria-selected="false" aria-controls="SignUp" role="tab" style={{ backgroundColor: 'rgba(50,146,201,0.93)', padding: '15px', borderRadius: '5px' }}>Sign Up</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '10px 10px', borderRadius: '5px' }}>
                            <Link to="/user/map" className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#Map" aria-selected="false" aria-controls="Map" role="tab" style={{ backgroundColor: 'rgba(50,146,201,0.93)', padding: '15px', borderRadius: '5px' }}>Map</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '10px 10px', borderRadius: '5px' }}>
                            <Link to="/user/account" className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#Account" aria-selected="false" aria-controls="Account" role="tab" style={{ backgroundColor: 'rgba(50,146,201,0.93)', padding: '15px', borderRadius: '5px' }}>Account</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '10px 10px', borderRadius: '5px' }}>
                            <Link to="/user/settings" className="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#Settings" aria-selected="false" aria-controls="Settings" role="tab" style={{ backgroundColor: 'rgba(50,146,201,0.93)', padding: '15px', borderRadius: '5px' }}>Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
