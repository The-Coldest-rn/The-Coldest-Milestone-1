import React from 'react';
import logo from '../The_coldest_market.png';

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><img src={logo} width="47" height="51" /><span style={{fontWeight: "bold",color: "#08338c"}}>Belizean Breeze Airlines</span></a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div id="navcol-2" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"></li>
                        <li className="nav-item"><a className="nav-link" href="#">Sign Up</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;