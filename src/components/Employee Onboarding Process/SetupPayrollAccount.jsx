import React from 'react';

const SetupPayrollAccount = () => {
  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h2>SETUP PAYROLL ACCOUNT</h2>
        <div className="wireframe-breadcrumb">
          Employee Onboarding &gt; Payroll Setup
        </div>
      </div>

      <div className="wireframe-grid">
        {/* Employee Information */}
        <div className="wireframe-section">
          <h3>EMPLOYEE INFORMATION</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Employee ID:</label>
              <div className="wireframe-input">[EMP001]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Full Name:</label>
              <div className="wireframe-input">[John Smith]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Department:</label>
              <div className="wireframe-input">[Engineering]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Position:</label>
              <div className="wireframe-input">[Software Developer]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Start Date:</label>
              <div className="wireframe-input">[2024-01-15]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Employee Type:</label>
              <div className="wireframe-input">[Full-time]</div>
            </div>
          </div>
        </div>

        {/* Payroll Details */}
        <div className="wireframe-section">
          <h3>PAYROLL DETAILS</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Employee Number:</label>
              <input type="text" className="wireframe-input" placeholder="[Auto-generated: 2024001]" />
            </div>
            <div className="wireframe-form-group">
              <label>Payroll Group:</label>
              <select className="wireframe-select">
                <option>[Monthly Salary]</option>
                <option>[Bi-weekly Salary]</option>
                <option>[Hourly Wage]</option>
                <option>[Contract]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Pay Frequency:</label>
              <select className="wireframe-select">
                <option>[Monthly]</option>
                <option>[Bi-weekly]</option>
                <option>[Weekly]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Currency:</label>
              <select className="wireframe-select">
                <option>[USD]</option>
                <option>[EUR]</option>
                <option>[GBP]</option>
                <option>[CAD]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>First Pay Date:</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>Cost Center:</label>
              <input type="text" className="wireframe-input" placeholder="[CC-ENG-001]" />
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="wireframe-section">
          <h3>SALARY INFORMATION</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Base Salary:</label>
              <input type="number" className="wireframe-input" placeholder="[75000.00]" />
            </div>
            <div className="wireframe-form-group">
              <label>Hourly Rate:</label>
              <input type="number" className="wireframe-input" placeholder="[36.06]" />
            </div>
            <div className="wireframe-form-group">
              <label>Annual Salary:</label>
              <input type="number" className="wireframe-input" placeholder="[75000.00]" />
            </div>
            <div className="wireframe-form-group">
              <label>Pay Grade:</label>
              <select className="wireframe-select">
                <option>[Grade 5]</option>
                <option>[Grade 4]</option>
                <option>[Grade 6]</option>
                <option>[Grade 7]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Overtime Eligible:</label>
              <div className="wireframe-radio-group">
                <label><input type="radio" name="overtime" /> Yes</label>
                <label><input type="radio" name="overtime" checked /> No</label>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Overtime Rate:</label>
              <select className="wireframe-select">
                <option>[1.5x Regular Rate]</option>
                <option>[2.0x Regular Rate]</option>
                <option>[Fixed Rate]</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bank Account Information */}
        <div className="wireframe-section">
          <h3>BANK ACCOUNT INFORMATION</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Bank Name:</label>
              <input type="text" className="wireframe-input" placeholder="[Chase Bank]" />
            </div>
            <div className="wireframe-form-group">
              <label>Account Type:</label>
              <select className="wireframe-select">
                <option>[Checking]</option>
                <option>[Savings]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Routing Number:</label>
              <input type="text" className="wireframe-input" placeholder="[021000021]" />
            </div>
            <div className="wireframe-form-group">
              <label>Account Number:</label>
              <input type="text" className="wireframe-input" placeholder="[****1234]" />
            </div>
            <div className="wireframe-form-group">
              <label>Account Holder Name:</label>
              <input type="text" className="wireframe-input" placeholder="[John Smith]" />
            </div>
            <div className="wireframe-form-group">
              <label>Deposit Percentage:</label>
              <input type="number" className="wireframe-input" placeholder="[100]" />
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="wireframe-section">
          <h3>TAX INFORMATION</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Tax ID/SSN:</label>
              <input type="text" className="wireframe-input" placeholder="[***-**-1234]" />
            </div>
            <div className="wireframe-form-group">
              <label>Filing Status:</label>
              <select className="wireframe-select">
                <option>[Single]</option>
                <option>[Married Filing Jointly]</option>
                <option>[Married Filing Separately]</option>
                <option>[Head of Household]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Allowances/Exemptions:</label>
              <input type="number" className="wireframe-input" placeholder="[2]" />
            </div>
            <div className="wireframe-form-group">
              <label>Additional Withholding:</label>
              <input type="number" className="wireframe-input" placeholder="[0.00]" />
            </div>
            <div className="wireframe-form-group">
              <label>State Tax:</label>
              <select className="wireframe-select">
                <option>[California]</option>
                <option>[New York]</option>
                <option>[Texas]</option>
                <option>[No State Tax]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>W-4 Form Status:</label>
              <select className="wireframe-select">
                <option>[Completed]</option>
                <option>[Pending]</option>
                <option>[Not Submitted]</option>
              </select>
            </div>
          </div>
        </div>

        {/* Benefits Enrollment */}
        <div className="wireframe-section span-2">
          <h3>BENEFITS ENROLLMENT</h3>
          <div className="wireframe-table-container">
            <table className="wireframe-table">
              <thead>
                <tr>
                  <th>BENEFIT TYPE</th>
                  <th>PLAN</th>
                  <th>EMPLOYEE COST</th>
                  <th>EMPLOYER COST</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[Health Insurance]</td>
                  <td>[Premium Plan]</td>
                  <td>[$250/month]</td>
                  <td>[$500/month]</td>
                  <td>[Enrolled]</td>
                  <td><button className="wireframe-btn-sm">[Edit]</button></td>
                </tr>
                <tr>
                  <td>[Dental Insurance]</td>
                  <td>[Basic Plan]</td>
                  <td>[$25/month]</td>
                  <td>[$15/month]</td>
                  <td>[Enrolled]</td>
                  <td><button className="wireframe-btn-sm">[Edit]</button></td>
                </tr>
                <tr>
                  <td>[Vision Insurance]</td>
                  <td>[Standard Plan]</td>
                  <td>[$10/month]</td>
                  <td>[$5/month]</td>
                  <td>[Declined]</td>
                  <td><button className="wireframe-btn-sm">[Enroll]</button></td>
                </tr>
                <tr>
                  <td>[401(k) Plan]</td>
                  <td>[6% Employee / 3% Match]</td>
                  <td>[$450/month]</td>
                  <td>[$225/month]</td>
                  <td>[Enrolled]</td>
                  <td><button className="wireframe-btn-sm">[Edit]</button></td>
                </tr>
                <tr>
                  <td>[Life Insurance]</td>
                  <td>[2x Salary]</td>
                  <td>[$0/month]</td>
                  <td>[$50/month]</td>
                  <td>[Auto-Enrolled]</td>
                  <td><button className="wireframe-btn-sm">[View]</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payroll Deductions Summary */}
        <div className="wireframe-section">
          <h3>DEDUCTIONS SUMMARY</h3>
          <div className="wireframe-stats">
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[$6,250]</div>
              <div className="wireframe-stat-label">Gross Monthly</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[$1,875]</div>
              <div className="wireframe-stat-label">Tax Deductions</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[$735]</div>
              <div className="wireframe-stat-label">Benefit Deductions</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[$3,640]</div>
              <div className="wireframe-stat-label">Net Monthly</div>
            </div>
          </div>
        </div>

        {/* Setup Status */}
        <div className="wireframe-section">
          <h3>SETUP STATUS</h3>
          <div className="wireframe-progress-section">
            <div className="wireframe-progress-item">
              <span>Employee Information</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '100%'}}></div>
              </div>
              <span>Complete</span>
            </div>
            <div className="wireframe-progress-item">
              <span>Payroll Details</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '80%'}}></div>
              </div>
              <span>80%</span>
            </div>
            <div className="wireframe-progress-item">
              <span>Bank Account</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '60%'}}></div>
              </div>
              <span>60%</span>
            </div>
            <div className="wireframe-progress-item">
              <span>Tax Information</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '90%'}}></div>
              </div>
              <span>90%</span>
            </div>
            <div className="wireframe-progress-item">
              <span>Benefits Enrollment</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '100%'}}></div>
              </div>
              <span>Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wireframe-actions">
        <button className="wireframe-btn-secondary">[Cancel]</button>
        <button className="wireframe-btn-secondary">[Save as Draft]</button>
        <button className="wireframe-btn-secondary">[Preview Payslip]</button>
        <button className="wireframe-btn-primary">[Complete Setup]</button>
      </div>
    </div>
  );
};

export default SetupPayrollAccount;