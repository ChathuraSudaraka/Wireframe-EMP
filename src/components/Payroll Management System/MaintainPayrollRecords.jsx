import React, { useState } from 'react';

function MaintainPayrollRecords() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('may');
  const [recordType, setRecordType] = useState('all');

  const payrollRecords = [
    {
      id: 'PAY-MAY-2025',
      period: 'May 2025',
      employees: 156,
      totalGross: 916800,
      totalNet: 733440,
      status: 'completed',
      processedDate: '2025-05-31',
      processedBy: 'Admin User'
    },
    {
      id: 'PAY-APR-2025',
      period: 'April 2025',
      employees: 154,
      totalGross: 901200,
      totalNet: 721000,
      status: 'completed',
      processedDate: '2025-04-30',
      processedBy: 'Admin User'
    },
    {
      id: 'PAY-MAR-2025',
      period: 'March 2025',
      employees: 152,
      totalGross: 888400,
      totalNet: 710720,
      status: 'completed',
      processedDate: '2025-03-31',
      processedBy: 'Admin User'
    },
    {
      id: 'PAY-FEB-2025',
      period: 'February 2025',
      employees: 150,
      totalGross: 875000,
      totalNet: 700000,
      status: 'archived',
      processedDate: '2025-02-28',
      processedBy: 'Admin User'
    }
  ];

  const complianceReports = [
    { name: 'Tax Summary Report', period: 'May 2025', status: 'generated', dueDate: '2025-06-15' },
    { name: 'Social Security Report', period: 'May 2025', status: 'pending', dueDate: '2025-06-10' },
    { name: 'Pension Fund Report', period: 'May 2025', status: 'generated', dueDate: '2025-06-20' },
    { name: 'Annual Tax Summary', period: '2024', status: 'submitted', dueDate: '2025-01-31' }
  ];

  const auditTrail = [
    { date: '2025-05-31 14:30', user: 'Admin User', action: 'Payroll Processed', details: 'May 2025 payroll completed' },
    { date: '2025-05-31 10:15', user: 'HR Manager', action: 'Salary Adjusted', details: 'Employee EMP001 salary updated' },
    { date: '2025-05-30 16:45', user: 'Admin User', action: 'Deductions Applied', details: 'May 2025 deductions processed' },
    { date: '2025-05-30 09:20', user: 'Admin User', action: 'Attendance Imported', details: 'May 2025 attendance data imported' }
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Maintain Payroll Records</h3>
      </div>
      <div className="wireframe-content">
        {/* Record Filters */}
        <div className="record-filters">
          <h4>Record Filters</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Year</label>
              <div className="wireframe-select">
                <span>2025</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Month</label>
              <div className="wireframe-select">
                <span>May</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Record Type</label>
              <div className="wireframe-select">
                <span>All Records</span>
                <span>▼</span>
              </div>
            </div>

            <div className="wireframe-form-group">
              <label>Status</label>
              <div className="wireframe-select">
                <span>All Status</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Record Statistics */}
        <div className="record-statistics">
          <h4>Record Statistics</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">612</div>
              <div className="wireframe-stat-label">Total Records</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$10.9M</div>
              <div className="wireframe-stat-label">YTD Gross Pay</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$8.7M</div>
              <div className="wireframe-stat-label">YTD Net Pay</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">98.5%</div>
              <div className="wireframe-stat-label">Processing Accuracy</div>
            </div>
          </div>
        </div>

        {/* Payroll Records Table */}
        <div className="payroll-records">
          <h4>Payroll Processing Records</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Record ID</span>
              <span>Pay Period</span>
              <span>Employees</span>
              <span>Total Gross</span>
              <span>Total Net</span>
              <span>Status</span>
              <span>Processed Date</span>
              <span>Actions</span>
            </div>
            {payrollRecords.map((record) => (
              <div key={record.id} className="wireframe-table-row">
                <span>{record.id}</span>
                <span>{record.period}</span>
                <span>{record.employees}</span>
                <span>${record.totalGross.toLocaleString()}</span>
                <span>${record.totalNet.toLocaleString()}</span>
                <span>
                  <div className={`record-status ${record.status}`}>
                    {record.status === 'completed' && '✓ Completed'}
                    {record.status === 'archived' && '📁 Archived'}
                  </div>
                </span>
                <span>{record.processedDate}</span>
                <span>
                  <button className="wireframe-button-small">View Details</button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Reports */}
        <div className="compliance-reports">
          <h4>Compliance Reports</h4>
          <div className="compliance-grid">
            {complianceReports.map((report, index) => (
              <div key={index} className="compliance-card">
                <div className="compliance-header">
                  <span className="compliance-name">{report.name}</span>
                  <span className={`compliance-status ${report.status}`}>
                    {report.status === 'generated' && '✓ Generated'}
                    {report.status === 'pending' && '⏳ Pending'}
                    {report.status === 'submitted' && '📤 Submitted'}
                  </span>
                </div>
                <div className="compliance-details">
                  <div className="compliance-period">Period: {report.period}</div>
                  <div className="compliance-due">Due: {report.dueDate}</div>
                </div>
                <div className="compliance-actions">
                  <button className="wireframe-button-small">
                    {report.status === 'pending' ? 'Generate' : 'Download'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Retention Policy */}
        <div className="data-retention">
          <h4>Data Retention Policy</h4>
          <div className="retention-info">
            <div className="retention-item">
              <div className="retention-type">Active Records</div>
              <div className="retention-period">Current + 2 Years</div>
              <div className="retention-description">Readily accessible for reporting</div>
            </div>
            <div className="retention-item">
              <div className="retention-type">Archived Records</div>
              <div className="retention-period">3-7 Years</div>
              <div className="retention-description">Stored for compliance requirements</div>
            </div>
            <div className="retention-item">
              <div className="retention-type">Legal Hold</div>
              <div className="retention-period">Indefinite</div>
              <div className="retention-description">Records under legal review</div>
            </div>
          </div>
        </div>

        {/* Audit Trail */}
        <div className="audit-trail">
          <h4>Recent Audit Trail</h4>
          <div className="audit-log">
            {auditTrail.map((entry, index) => (
              <div key={index} className="audit-entry">
                <div className="audit-timestamp">{entry.date}</div>
                <div className="audit-details">
                  <div className="audit-action">{entry.action}</div>
                  <div className="audit-user">by {entry.user}</div>
                  <div className="audit-description">{entry.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Archive Old Records</button>
          <button className="wireframe-button-secondary">Export Records</button>
          <button className="wireframe-button">Generate Compliance Report</button>
        </div>
      </div>
    </div>
  );
}

export default MaintainPayrollRecords;
