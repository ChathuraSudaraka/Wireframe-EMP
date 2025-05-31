import React, { useState } from 'react';

function GeneratePayslips() {
  const [payslipPeriod, setPayslipPeriod] = useState('may-2025');
  const [selectedTemplate, setSelectedTemplate] = useState('standard');
  const [generationStatus, setGenerationStatus] = useState('ready');

  const payslipData = [
    {
      id: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Developer',
      grossSalary: 6600,
      netSalary: 4270,
      status: 'generated',
      generatedDate: '2025-05-30'
    },
    {
      id: 'EMP002',
      name: 'Sarah Johnson',
      department: 'Marketing',
      position: 'Marketing Manager',
      grossSalary: 5500,
      netSalary: 3700,
      status: 'pending',
      generatedDate: null
    },
    {
      id: 'EMP003',
      name: 'Mike Davis',
      department: 'HR',
      position: 'HR Specialist',
      grossSalary: 6000,
      netSalary: 3950,
      status: 'generated',
      generatedDate: '2025-05-30'
    },
    {
      id: 'EMP004',
      name: 'Lisa Wilson',
      department: 'Finance',
      position: 'Financial Analyst',
      grossSalary: 7000,
      netSalary: 4400,
      status: 'pending',
      generatedDate: null
    }
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Generate Payslips</h3>
      </div>
      <div className="wireframe-content">
        {/* Payslip Generation Settings */}
        <div className="payslip-settings">
          <h4>Payslip Generation Settings</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Pay Period</label>
              <div className="wireframe-select">
                <span>May 2025</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Payslip Template</label>
              <div className="wireframe-select">
                <span>Standard Template</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Output Format</label>
              <div className="wireframe-select">
                <span>PDF Document</span>
                <span>▼</span>
              </div>
            </div>

            <div className="wireframe-form-group">
              <label>Delivery Method</label>
              <div className="wireframe-select">
                <span>Email + Portal</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payslip Template Preview */}
        <div className="payslip-preview">
          <h4>Payslip Template Preview</h4>
          <div className="payslip-template">
            <div className="payslip-header">
              <div className="company-info">
                <h5>COMPANY NAME</h5>
                <p>123 Business Street, City, State 12345</p>
              </div>
              <div className="payslip-title">
                <h5>PAYSLIP</h5>
                <p>Pay Period: May 2025</p>
              </div>
            </div>
            
            <div className="employee-info">
              <div className="employee-details">
                <p><strong>Employee:</strong> John Smith</p>
                <p><strong>ID:</strong> EMP001</p>
                <p><strong>Department:</strong> Engineering</p>
              </div>
              <div className="pay-details">
                <p><strong>Position:</strong> Senior Developer</p>
                <p><strong>Pay Date:</strong> May 31, 2025</p>
                <p><strong>Bank Account:</strong> ****1234</p>
              </div>
            </div>

            <div className="salary-breakdown">
              <div className="earnings-section">
                <h6>EARNINGS</h6>
                <div className="payslip-line">
                  <span>Basic Salary</span>
                  <span>$5,000.00</span>
                </div>
                <div className="payslip-line">
                  <span>Overtime</span>
                  <span>$400.00</span>
                </div>
                <div className="payslip-line">
                  <span>Allowances</span>
                  <span>$1,200.00</span>
                </div>
                <div className="payslip-line total">
                  <span><strong>Gross Salary</strong></span>
                  <span><strong>$6,600.00</strong></span>
                </div>
              </div>

              <div className="deductions-section">
                <h6>DEDUCTIONS</h6>
                <div className="payslip-line">
                  <span>Income Tax</span>
                  <span>$990.00</span>
                </div>
                <div className="payslip-line">
                  <span>Social Security</span>
                  <span>$330.00</span>
                </div>
                <div className="payslip-line">
                  <span>Health Insurance</span>
                  <span>$150.00</span>
                </div>
                <div className="payslip-line">
                  <span>Pension</span>
                  <span>$660.00</span>
                </div>
                <div className="payslip-line">
                  <span>Loan Repayment</span>
                  <span>$200.00</span>
                </div>
                <div className="payslip-line total">
                  <span><strong>Total Deductions</strong></span>
                  <span><strong>$2,330.00</strong></span>
                </div>
              </div>
            </div>

            <div className="net-pay">
              <div className="net-pay-amount">
                <span><strong>NET PAY</strong></span>
                <span><strong>$4,270.00</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Generation Progress */}
        <div className="generation-progress">
          <h4>Generation Progress</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '50%'}}></div>
          </div>
          <p>Generated 78 of 156 payslips (50% complete)</p>
        </div>

        {/* Payslip Status */}
        <div className="payslip-status">
          <h4>Payslip Generation Status</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Employee ID</span>
              <span>Name</span>
              <span>Department</span>
              <span>Gross Salary</span>
              <span>Net Salary</span>
              <span>Status</span>
              <span>Generated Date</span>
              <span>Actions</span>
            </div>
            {payslipData.map((employee) => (
              <div key={employee.id} className="wireframe-table-row">
                <span>{employee.id}</span>
                <span>{employee.name}</span>
                <span>{employee.department}</span>
                <span>${employee.grossSalary.toLocaleString()}</span>
                <span>${employee.netSalary.toLocaleString()}</span>
                <span>
                  <div className={`payslip-status-badge ${employee.status}`}>
                    {employee.status === 'generated' ? '✓ Generated' : '⏳ Pending'}
                  </div>
                </span>
                <span>{employee.generatedDate || '-'}</span>
                <span>
                  <button className="wireframe-button-small">
                    {employee.status === 'generated' ? 'View' : 'Generate'}
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Generate All</button>
          <button className="wireframe-button-secondary">Send Email</button>
          <button className="wireframe-button">Download Batch</button>
        </div>
      </div>
    </div>
  );
}

export default GeneratePayslips;
