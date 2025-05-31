import React from 'react';

const UpdatePersonalDetails = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Update Personal Details</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
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
            <label>Phone:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Address:</label>
            <div className="wireframe-textarea"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Emergency Contact:</label>
            <div className="wireframe-input"></div>
          </div>
        </div>
        <div className="wireframe-button-group">
          <button className="wireframe-button">Save Changes</button>
          <button className="wireframe-button-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePersonalDetails;
