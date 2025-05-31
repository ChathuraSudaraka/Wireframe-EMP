import React from 'react';

const ResetUserPassword = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Reset User Password</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-search-section">
          <div className="wireframe-search-box">
            <input type="text" placeholder="Search user by name, email, or username..." />
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
                <span>Last Login:</span>
                <span>[2024-01-15 09:30 AM]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Account Status:</span>
                <span>[Active]</span>
              </div>
            </div>
            
            <h4>Password History</h4>
            <div className="wireframe-list">
              <div className="wireframe-list-item">
                <span>Last Reset: 2023-12-01</span>
              </div>
              <div className="wireframe-list-item">
                <span>Previous Reset: 2023-06-15</span>
              </div>
              <div className="wireframe-list-item">
                <span>Account Created: 2023-01-10</span>
              </div>
            </div>
          </div>
          
          <div className="wireframe-column">
            <h4>Password Reset Options</h4>
            <div className="wireframe-form">
              <div className="wireframe-form-group">
                <label>
                  <input type="radio" name="resetType" defaultChecked />
                  Generate Temporary Password
                </label>
                <small>System will generate a secure temporary password</small>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="radio" name="resetType" />
                  Send Reset Link via Email
                </label>
                <small>User will receive a password reset link</small>
              </div>
              
              <div className="wireframe-form-group">
                <label>
                  <input type="radio" name="resetType" />
                  Set Custom Password
                </label>
                <small>Manually set a new password for the user</small>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>
                <input type="checkbox" />
                Force password change on next login
              </label>
            </div>
            
            <div className="wireframe-form-group">
              <label>
                <input type="checkbox" />
                Send notification email to user
              </label>
            </div>
            
            <div className="wireframe-form-group">
              <label>Reset Reason</label>
              <div className="wireframe-select">
                <span>[User Request]</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Additional Notes</label>
              <div className="wireframe-textarea">[Optional notes about the password reset...]</div>
            </div>
          </div>
        </div>
        
        <div className="wireframe-button-group">
          <button className="wireframe-button">Reset Password</button>
          <button className="wireframe-button-secondary">Cancel</button>
          <button className="wireframe-button-secondary">Clear Form</button>
        </div>
      </div>
    </div>
  );
};

export default ResetUserPassword;
