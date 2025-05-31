import React from 'react';

const ApplyForLeave = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Apply for Leave</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Leave Type:</label>
            <div className="wireframe-select">
              <span>Select Leave Type ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Start Date:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>End Date:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Total Days:</label>
            <div className="wireframe-input-readonly">██</div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Reason:</label>
            <div className="wireframe-textarea"></div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Attachment:</label>
            <div className="wireframe-file-upload">
              <span>Choose File</span>
            </div>
          </div>
        </div>
        <div className="wireframe-button-group">
          <button className="wireframe-button">Submit Application</button>
          <button className="wireframe-button-secondary">Save Draft</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyForLeave;
