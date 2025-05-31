import React, { useState } from 'react';

function CalculateEmployeeSalaries() {
  const [calculationPeriod, setCalculationPeriod] = useState('may-2025');
  const [calculationStatus, setCalculationStatus] = useState('pending');

  const salaryCalculations = [
    { 
      id: 'EMP001', 
      name: 'John Smith', 
      basicSalary: 5000, 
      overtime: 400, 
      allowances: 1200, 
      grossSalary: 6600,
      status: 'calculated'
    },
    { 
      id: 'EMP002', 
      name: 'Sarah Johnson', 
      basicSalary: 4500, 
      overtime: 200, 
      allowances: 800, 
      grossSalary: 5500,
      status: 'pending'
    },
    { 
      id: 'EMP003', 
      name: 'Mike Davis', 
      basicSalary: 4800, 
      overtime: 300, 
      allowances: 900, 
      grossSalary: 6000,
      status: 'calculated'
    },
    { 
      id: 'EMP004', 
      name: 'Lisa Wilson', 
      basicSalary: 5500, 
      overtime: 500, 
      allowances: 1000, 
      grossSalary: 7000,
      status: 'pending'
    },
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Calculate Employee Salaries</h3>
      </div>
      <div className="wireframe-content">
        {/* Calculation Settings */}
        <div className="salary-calculation-settings">
          <h4>Calculation Parameters</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Pay Period</label>
              <div className="wireframe-select">
                <span>May 2025</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Overtime Rate</label>
              <div className="wireframe-input">1.5x Base Rate</div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Holiday Rate</label>
              <div className="wireframe-input">2.0x Base Rate</div>
            </div>

            <div className="wireframe-form-group">
              <label>Tax Year</label>
              <div className="wireframe-select">
                <span>2025</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Progress */}
        <div className="calculation-progress">
          <h4>Calculation Progress</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '65%'}}></div>
          </div>
          <p>Processing 104 of 156 employees (65% complete)</p>
        </div>

        {/* Salary Breakdown */}
        <div className="salary-breakdown">
          <h4>Salary Components</h4>
          <div className="salary-components-grid">
            <div className="component-card">
              <div className="component-title">Basic Salary</div>
              <div className="component-amount">$742,800</div>
              <div className="component-description">Base monthly salaries</div>
            </div>
            <div className="component-card">
              <div className="component-title">Overtime Pay</div>
              <div className="component-amount">$45,600</div>
              <div className="component-description">Extra hours compensation</div>
            </div>
            <div className="component-card">
              <div className="component-title">Allowances</div>
              <div className="component-amount">$128,400</div>
              <div className="component-description">Transport, meal, housing</div>
            </div>
            <div className="component-card">
              <div className="component-title">Total Gross</div>
              <div className="component-amount">$916,800</div>
              <div className="component-description">Before deductions</div>
            </div>
          </div>
        </div>

        {/* Employee Salary Details */}
        <div className="salary-details">
          <h4>Employee Salary Calculations</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Employee ID</span>
              <span>Name</span>
              <span>Basic Salary</span>
              <span>Overtime</span>
              <span>Allowances</span>
              <span>Gross Salary</span>
              <span>Status</span>
              <span>Actions</span>
            </div>
            {salaryCalculations.map((employee) => (
              <div key={employee.id} className="wireframe-table-row">
                <span>{employee.id}</span>
                <span>{employee.name}</span>
                <span>${employee.basicSalary.toLocaleString()}</span>
                <span>${employee.overtime}</span>
                <span>${employee.allowances}</span>
                <span>${employee.grossSalary.toLocaleString()}</span>
                <span>
                  <div className={`calculation-status ${employee.status}`}>
                    {employee.status === 'calculated' ? '✓ Calculated' : '⏳ Pending'}
                  </div>
                </span>
                <span>
                  <button className="wireframe-button-small">Recalculate</button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Calculate All</button>
          <button className="wireframe-button-secondary">Export Report</button>
          <button className="wireframe-button">Approve Calculations</button>
        </div>
      </div>
    </div>
  );
}

export default CalculateEmployeeSalaries;
