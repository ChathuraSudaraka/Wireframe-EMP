import React from 'react';

const ViewPayslip = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>View Payslip</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-group">
          <label>Month/Year:</label>
          <div className="wireframe-input"></div>
        </div>
        <div className="wireframe-table">
          <div className="wireframe-table-header">
            <span>Description</span>
            <span>Amount</span>
          </div>
          <div className="wireframe-table-row">
            <span>Basic Salary</span>
            <span>████████</span>
          </div>
          <div className="wireframe-table-row">
            <span>Allowances</span>
            <span>████████</span>
          </div>
          <div className="wireframe-table-row">
            <span>Deductions</span>
            <span>████████</span>
          </div>
          <div className="wireframe-table-row wireframe-total">
            <span>Net Pay</span>
            <span>████████</span>
          </div>
        </div>
        <div className="wireframe-button-group">
          <button className="wireframe-button">Download PDF</button>
          <button className="wireframe-button-secondary">Print</button>
        </div>
      </div>
    </div>
  );
};

export default ViewPayslip;
