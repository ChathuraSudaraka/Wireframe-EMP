import React from 'react';

const DeactivateUserAccount = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Deactivate User Account</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-search-section">
          <div className="wireframe-search-box">
            <input type="text" placeholder="Search user by name, email, or department..." />
            <button className="wireframe-button">Search</button>
          </div>
        </div>
        
        <div className="wireframe-two-column">
          <div className="wireframe-column">
            <h4>User Information</h4>
            <div className="wireframe-table">
              <div className="wireframe-table-row">
                <span>Username:</span>
                <span>[johndoe]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Full Name:</span>
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
                <span>Job Title:</span>
                <span>[Software Developer]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Hire Date:</span>
                <span>[2023-01-10]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Current Status:</span>
                <span>[Active]</span>
              </div>
            </div>
            
            <h4>Account Activity</h4>
            <div className="wireframe-list">
              <div className="wireframe-list-item">
                <span>Last Login: 2024-01-15 09:30 AM</span>
              </div>
              <div className="wireframe-list-item">
                <span>Active Sessions: 2</span>
              </div>
              <div className="wireframe-list-item">
                <span>Failed Login Attempts: 0</span>
              </div>
              <div className="wireframe-list-item">
                <span>Account Warnings: 0</span>
              </div>
            </div>
          </div>
          
          <div className="wireframe-column">
            <h4>Deactivation Details</h4>
            <div className="wireframe-form">
              <div className="wireframe-form-group">
                <label>Deactivation Type *</label>
                <div className="wireframe-select">
                  <span>[Temporary Suspension]</span>
                  <span>▼</span>
                </div>
              </div>
              
              <div className="wireframe-form-group">
                <label>Reason for Deactivation *</label>
                <div className="wireframe-select">
                  <span>[Employee Termination]</span>
                  <span>▼</span>
                </div>
              </div>
              
              <div className="wireframe-form-group">
                <label>Effective Date *</label>
                <div className="wireframe-input">[2024-01-20]</div>
              </div>
              
              <div className="wireframe-form-group">
                <label>Reactivation Date (if temporary)</label>
                <div className="wireframe-input">[Optional - for temporary suspensions]</div>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Terminate all active sessions
                </label>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="checkbox" />
                  Archive user data
                </label>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="checkbox" />
                  Remove from all groups and roles
                </label>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="checkbox" />
                  Send notification to user
                </label>
              </div>
              
              <div className="wireframe-form-group">
                <label>Additional Notes</label>
                <div className="wireframe-textarea">[Detailed reason for deactivation and any special instructions...]</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wireframe-button-group">
          <button className="wireframe-button wireframe-danger">Deactivate Account</button>
          <button className="wireframe-button-secondary">Cancel</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
        </div>
      </div>
    </div>
  );
};

export default DeactivateUserAccount;
