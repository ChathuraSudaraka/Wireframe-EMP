import React, { useState } from 'react';

function ProcessSalaryDeductions() {
  const [selectedEmployee, setSelectedEmployee] = useState('all');
  const [deductionPeriod, setDeductionPeriod] = useState('may-2025');

  const deductionData = [
    {
      id: 'EMP001',
      name: 'John Smith',
      grossSalary: 6600,
      tax: 990,
      socialSecurity: 330,
      insurance: 150,
      pension: 660,
      loan: 200,
      totalDeductions: 2330,
      netSalary: 4270
    },
    {
      id: 'EMP002',
      name: 'Sarah Johnson',
      grossSalary: 5500,
      tax: 825,
      socialSecurity: 275,
      insurance: 150,
      pension: 550,
      loan: 0,
      totalDeductions: 1800,
      netSalary: 3700
    },
    {
      id: 'EMP003',
      name: 'Mike Davis',
      grossSalary: 6000,
      tax: 900,
      socialSecurity: 300,
      insurance: 150,
      pension: 600,
      loan: 100,
      totalDeductions: 2050,
      netSalary: 3950
    },
    {
      id: 'EMP004',
      name: 'Lisa Wilson',
      grossSalary: 7000,
      tax: 1050,
      socialSecurity: 350,
      insurance: 200,
      pension: 700,
      loan: 300,
      totalDeductions: 2600,
      netSalary: 4400
    }
  ];

  const deductionTypes = [
    { name: 'Income Tax', rate: '15%', mandatory: true, description: 'Federal income tax' },
    { name: 'Social Security', rate: '5%', mandatory: true, description: 'Social security contribution' },
    { name: 'Health Insurance', rate: 'Fixed', mandatory: false, description: 'Monthly health coverage' },
    { name: 'Pension Fund', rate: '10%', mandatory: false, description: 'Retirement savings' },
    { name: 'Personal Loans', rate: 'Variable', mandatory: false, description: 'Employee loan repayments' }
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Process Salary Deductions</h3>
      </div>
      <div className="wireframe-content">
        {/* Deduction Configuration */}
        <div className="deduction-config">
          <h4>Deduction Configuration</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Pay Period</label>
              <div className="wireframe-select">
                <span>May 2025</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Employee Filter</label>
              <div className="wireframe-select">
                <span>All Employees</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Deduction Batch</label>
              <div className="wireframe-select">
                <span>Standard Deductions</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deduction Types */}
        <div className="deduction-types">
          <h4>Deduction Types & Rates</h4>
          <div className="deduction-types-grid">
            {deductionTypes.map((type, index) => (
              <div key={index} className="deduction-type-card">
                <div className="deduction-type-header">
                  <span className="deduction-name">{type.name}</span>
                  <span className={`deduction-badge ${type.mandatory ? 'mandatory' : 'optional'}`}>
                    {type.mandatory ? 'Mandatory' : 'Optional'}
                  </span>
                </div>
                <div className="deduction-rate">Rate: {type.rate}</div>
                <div className="deduction-description">{type.description}</div>
                <button className="wireframe-button-small">Configure</button>
              </div>
            ))}
          </div>
        </div>

        {/* Deduction Summary */}
        <div className="deduction-summary">
          <h4>Deduction Summary</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$916,800</div>
              <div className="wireframe-stat-label">Total Gross Salary</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$183,360</div>
              <div className="wireframe-stat-label">Total Deductions</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$733,440</div>
              <div className="wireframe-stat-label">Total Net Salary</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">20%</div>
              <div className="wireframe-stat-label">Average Deduction Rate</div>
            </div>
          </div>
        </div>

        {/* Employee Deduction Details */}
        <div className="deduction-details">
          <h4>Employee Deduction Breakdown</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Employee</span>
              <span>Gross Salary</span>
              <span>Tax</span>
              <span>Social Security</span>
              <span>Insurance</span>
              <span>Pension</span>
              <span>Loans</span>
              <span>Total Deductions</span>
              <span>Net Salary</span>
            </div>
            {deductionData.map((employee) => (
              <div key={employee.id} className="wireframe-table-row">
                <span>
                  <div>{employee.name}</div>
                  <div style={{fontSize: '0.8rem', color: '#666'}}>{employee.id}</div>
                </span>
                <span>${employee.grossSalary.toLocaleString()}</span>
                <span>${employee.tax}</span>
                <span>${employee.socialSecurity}</span>
                <span>${employee.insurance}</span>
                <span>${employee.pension}</span>
                <span>${employee.loan}</span>
                <span className="total-deductions">${employee.totalDeductions.toLocaleString()}</span>
                <span className="net-salary">${employee.netSalary.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Recalculate Deductions</button>
          <button className="wireframe-button-secondary">Export Report</button>
          <button className="wireframe-button">Apply Deductions</button>
        </div>
      </div>
    </div>
  );
}

export default ProcessSalaryDeductions;
