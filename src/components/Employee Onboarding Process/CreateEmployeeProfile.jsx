import React from 'react';

const CreateEmployeeProfile = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Create Employee Profile</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Employee ID:</label>
            <div className="wireframe-input-readonly">AUTO-GENERATED</div>
          </div>
          <div className="wireframe-form-group">
            <label>First Name:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Last Name:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Email:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Phone Number:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Department:</label>
            <div className="wireframe-select">
              <span>Select Department ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Position:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Start Date:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Manager:</label>
            <div className="wireframe-select">
              <span>Select Manager ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Employment Type:</label>
            <div className="wireframe-select">
              <span>Full-time ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Address:</label>
            <div className="wireframe-textarea"></div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Profile Photo:</label>
            <div className="wireframe-file-upload">
              <span>Choose Photo</span>
            </div>
          </div>
        </div>
        <div className="wireframe-button-group">
          <button className="wireframe-button">Create Profile</button>
          <button className="wireframe-button-secondary">Save Draft</button>
          <button className="wireframe-button-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeProfile;