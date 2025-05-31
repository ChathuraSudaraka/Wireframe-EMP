import React from 'react';

const AssignUserRoles = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Assign User Roles</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-search-section">
          <div className="wireframe-search-box">
            <input type="text" placeholder="Search user by name, email, or ID..." />
            <button className="wireframe-button">Search</button>
          </div>
        </div>
        
        <div className="wireframe-two-column">
          <div className="wireframe-column">
            <h4>User Information</h4>
            <div className="wireframe-table">
              <div className="wireframe-table-row">
                <span>Name:</span>
                <span>[John Doe]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Email:</span>
                <span>[john.doe@company.com]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Department:</span>
                <span>[IT Department]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Current Status:</span>
                <span>[Active]</span>
              </div>
            </div>
            
            <h4>Current Roles</h4>
            <div className="wireframe-list">
              <div className="wireframe-list-item">
                <span>Employee</span>
                <button className="wireframe-button-small">Remove</button>
              </div>
              <div className="wireframe-list-item">
                <span>IT Support</span>
                <button className="wireframe-button-small">Remove</button>
              </div>
              <div className="wireframe-list-item">
                <span>System User</span>
                <button className="wireframe-button-small">Remove</button>
              </div>
            </div>
          </div>
          
          <div className="wireframe-column">
            <h4>Available Roles</h4>
            <div className="wireframe-list">
              <div className="wireframe-list-item">
                <span>Administrator</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
              <div className="wireframe-list-item">
                <span>Manager</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
              <div className="wireframe-list-item">
                <span>HR Manager</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
              <div className="wireframe-list-item">
                <span>Finance User</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
              <div className="wireframe-list-item">
                <span>Read Only</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
              <div className="wireframe-list-item">
                <span>Project Manager</span>
                <button className="wireframe-button-small">Assign</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wireframe-button-group">
          <button className="wireframe-button">Save Changes</button>
          <button className="wireframe-button-secondary">Cancel</button>
          <button className="wireframe-button-secondary">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AssignUserRoles;
