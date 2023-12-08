import React from 'react';

function Settings() {
    return (
        <div className="container mt-5">
            <h1>Settings</h1>
            <div className="mb-3">
                <label htmlFor="language" className="form-label">Language</label>
                {/* Dropdown for language selection */}
                <select className="form-select" id="language">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="notifications" />
                <label className="form-check-label" htmlFor="notifications">Receive notifications</label>
            </div>
            <button type="button" className="btn btn-primary">Save Changes</button>
        </div>
    );
}

export default Settings;
