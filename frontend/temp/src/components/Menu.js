import React from 'react';
import logo from '../TCM1.png';

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                    <img src={logo} width="450" height="350" alt="The Coldest Market Logo" />
                </a>
                <div id="navcol-2" className="collapse navbar-collapse"></div>
            </div>
        </nav>
    );
}

export default Menu;