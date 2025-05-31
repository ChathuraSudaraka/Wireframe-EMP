import React from 'react';

const SubmitExpenseClaim = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Submit Expense Claim</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Expense Category:</label>
            <div className="wireframe-select">
              <span>Select Category ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Date:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Amount:</label>
            <div className="wireframe-input"></div>
          </div>
          <div className="wireframe-form-group">
            <label>Currency:</label>
            <div className="wireframe-select">
              <span>USD ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Description:</label>
            <div className="wireframe-textarea"></div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Receipt/Invoice:</label>
            <div className="wireframe-file-upload">
              <span>Choose File</span>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Expense Summary</h4>
          <div className="wireframe-expense-summary">
            <div className="wireframe-expense-row">
              <span>Subtotal:</span>
              <span>████████</span>
            </div>
            <div className="wireframe-expense-row">
              <span>Tax (if applicable):</span>
              <span>████████</span>
            </div>
            <div className="wireframe-expense-row wireframe-total">
              <span>Total Claim:</span>
              <span>████████</span>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button">Submit Claim</button>
          <button className="wireframe-button-secondary">Save Draft</button>
          <button className="wireframe-button-secondary">Add Another</button>
        </div>
      </div>
    </div>
  );
};

export default SubmitExpenseClaim;
