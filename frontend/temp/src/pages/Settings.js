import React from 'react';
import '../App.css';
import setting from '../setting.png';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const navigate = useNavigate();

    const handleBackToAccount = () => {
        navigate('/user/account');
    };
    return (
        <div className="container mt-5">
            <h1>Settings</h1>
            <a className="navbar-brand d-flex align-items-center justify-content-center" href="#">
                <img src={setting} width="200" height="200" alt="Setting Logo" />
            </a>
            <div className="mb-3 custom-space">
                <label htmlFor="language" className="form-label">Language</label>
                {/* Dropdown for language selection */}
                <select className="form-select" id="language">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
            <div className="mb-3 custom-space">
                <label htmlFor="timezone" className="form-label">Time Zone</label>
                {/* Dropdown for language selection */}
                <select className="form-select" id="timezone">
                    <option value="EST">Eastern (UTC-05:00)</option>
                    <option value="CST">Central (UTC-06:00)</option>
                    <option value="PT">Pacific (UTC-08:00)</option>
                    <option value="MT">Mountain (UTC-07:00)</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
            <div className="mb-3 form-check custom-space">
                <input type="checkbox" className="form-check-input" id="notifications" />
                <label className="form-check-label" htmlFor="notifications">Receive notifications</label>
            </div>
            <div className="mb-3 form-check custom-space">
                <input type="checkbox" className="form-check-input" id="notifications" />
                <label className="form-check-label" htmlFor="notifications">Hide my information</label>
            </div>
            <div className="mb-3 custom-space">
                <button className="btn btn-secondary tab-button" onClick={handleBackToAccount}>
                    Back to My Account >
                </button>
            </div>
            <div className="mb-3 custom-space">
                <label htmlFor="accounts" className="form-label">Switch Accounts</label>
                <select className="form-select" id="accounts">
                    <option value="John Doe">John Doe</option>
                </select>
            </div>
            <button type="button" className="btn btn-primary">Save Changes</button>
        </div>
    );
}

export default Settings;
