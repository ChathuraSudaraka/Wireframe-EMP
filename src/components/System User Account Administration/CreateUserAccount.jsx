import React from 'react';

const CreateUserAccount = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Create User Account</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Username *</label>
            <div className="wireframe-input">[Username]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Email Address *</label>
            <div className="wireframe-input">[Email Address]</div>
          </div>
          <div className="wireframe-form-group">
            <label>First Name *</label>
            <div className="wireframe-input">[First Name]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Last Name *</label>
            <div className="wireframe-input">[Last Name]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Department</label>
            <div className="wireframe-select">
              <span>[Select Department]</span>
              <span>▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Job Title</label>
            <div className="wireframe-input">[Job Title]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Phone Number</label>
            <div className="wireframe-input">[Phone Number]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Manager</label>
            <div className="wireframe-select">
              <span>[Select Manager]</span>
              <span>▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Initial Password *</label>
            <div className="wireframe-input">[Password]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Confirm Password *</label>
            <div className="wireframe-input">[Confirm Password]</div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Account Status</label>
            <div className="wireframe-select">
              <span>[Active]</span>
              <span>▼</span>
            </div>
          </div>
        </div>
        <div className="wireframe-button-group">
          <button className="wireframe-button">Create Account</button>
          <button className="wireframe-button-secondary">Cancel</button>
          <button className="wireframe-button-secondary">Reset Form</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccount;
