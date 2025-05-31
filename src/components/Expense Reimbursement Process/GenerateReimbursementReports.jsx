import React, { useState } from 'react';

const GenerateReimbursementReports = () => {
  const [reportType, setReportType] = useState('summary');
  const [dateRange, setDateRange] = useState('monthly');
  const [department, setDepartment] = useState('all');
  const [status, setStatus] = useState('all');
  const [generatingReport, setGeneratingReport] = useState(false);

  const reportTypes = [
    { value: 'summary', label: 'Expense Summary Report' },
    { value: 'detailed', label: 'Detailed Transaction Report' },
    { value: 'compliance', label: 'Compliance & Audit Report' },
    { value: 'trend', label: 'Expense Trend Analysis' },
    { value: 'budget', label: 'Budget vs Actual Report' },
    { value: 'employee', label: 'Employee Expense Report' }
  ];

  const departments = [
    'All Departments',
    'Sales',
    'Marketing', 
    'IT',
    'HR',
    'Finance',
    'Operations'
  ];

  const recentReports = [
    {
      id: 'RPT-001',
      name: 'Monthly Expense Summary - January 2024',
      type: 'Summary',
      generatedBy: 'Jane Smith',
      generatedDate: '2024-01-31',
      fileSize: '2.4 MB',
      status: 'Ready'
    },
    {
      id: 'RPT-002', 
      name: 'Q4 2023 Compliance Report',
      type: 'Compliance',
      generatedBy: 'John Doe',
      generatedDate: '2024-01-15',
      fileSize: '5.8 MB',
      status: 'Ready'
    },
    {
      id: 'RPT-003',
      name: 'IT Department Expense Analysis',
      type: 'Detailed',
      generatedBy: 'Mike Wilson',
      generatedDate: '2024-01-10',
      fileSize: '1.2 MB',
      status: 'Ready'
    }
  ];

  const reportMetrics = [
    {
      label: 'Total Claims Processed',
      value: '1,247',
      change: '+12%',
      period: 'This Month'
    },
    {
      label: 'Total Amount Reimbursed',
      value: '$45,680',
      change: '+8%',
      period: 'This Month'
    },
    {
      label: 'Average Processing Time',
      value: '3.2 days',
      change: '-15%',
      period: 'This Month'
    },
    {
      label: 'Compliance Rate',
      value: '98.5%',
      change: '+2%',
      period: 'This Month'
    }
  ];

  const handleGenerateReport = () => {
    setGeneratingReport(true);
    setTimeout(() => {
      setGeneratingReport(false);
      alert(`Report generated successfully! Check the downloads section.`);
    }, 3000);
  };

  const handleDownloadReport = (reportId) => {
    alert(`Downloading report ${reportId}...`);
  };

  const handleScheduleReport = () => {
    alert('Report scheduling configured successfully!');
  };

  return (
    <div className="wireframe-component">
      <div className="component-header">
        <h2>Generate Reimbursement Reports</h2>
        <p>Create comprehensive reports and analytics for expense reimbursements</p>
      </div>

      <div className="wireframe-content">
        {/* Report Generation */}
        <div className="wireframe-section">
          <h3>Generate New Report</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Report Type</label>
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="wireframe-select"
              >
                {reportTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Date Range</label>
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="wireframe-select"
              >
                <option value="weekly">Last 7 Days</option>
                <option value="monthly">Last 30 Days</option>
                <option value="quarterly">Last Quarter</option>
                <option value="yearly">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <div className="form-group">
              <label>Department</label>
              <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="wireframe-select"
              >
                <option value="all">All Departments</option>
                {departments.slice(1).map(dept => (
                  <option key={dept} value={dept.toLowerCase()}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Claim Status</label>
              <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="wireframe-select"
              >
                <option value="all">All Statuses</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>

          {dateRange === 'custom' && (
            <div className="form-grid">
              <div className="form-group">
                <label>Start Date</label>
                <input type="date" className="wireframe-input" />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="date" className="wireframe-input" />
              </div>
            </div>
          )}

          <div className="form-actions">
            <button 
              onClick={handleGenerateReport}
              className="wireframe-button primary"
              disabled={generatingReport}
            >
              {generatingReport ? 'Generating Report...' : 'Generate Report'}
            </button>
            <button 
              onClick={handleScheduleReport}
              className="wireframe-button secondary"
            >
              Schedule Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="wireframe-section">
          <h3>Key Metrics Overview</h3>
          <div className="metrics-grid">
            {reportMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-label">{metric.label}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-change">
                  <span className={metric.change.startsWith('+') ? 'positive' : 'negative'}>
                    {metric.change}
                  </span>
                  <span className="metric-period"> vs {metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Templates */}
        <div className="wireframe-section">
          <h3>Report Templates</h3>
          <div className="template-grid">
            <div className="template-card">
              <h4>Executive Summary</h4>
              <p>High-level overview of expense trends and key metrics</p>
              <div className="template-actions">
                <button className="wireframe-button small">Use Template</button>
                <button className="wireframe-button small secondary">Preview</button>
              </div>
            </div>
            <div className="template-card">
              <h4>Detailed Analysis</h4>
              <p>Comprehensive breakdown of all expense transactions</p>
              <div className="template-actions">
                <button className="wireframe-button small">Use Template</button>
                <button className="wireframe-button small secondary">Preview</button>
              </div>
            </div>
            <div className="template-card">
              <h4>Compliance Report</h4>
              <p>Audit-ready report with policy compliance details</p>
              <div className="template-actions">
                <button className="wireframe-button small">Use Template</button>
                <button className="wireframe-button small secondary">Preview</button>
              </div>
            </div>
            <div className="template-card">
              <h4>Budget Variance</h4>
              <p>Comparison of actual expenses vs budget allocations</p>
              <div className="template-actions">
                <button className="wireframe-button small">Use Template</button>
                <button className="wireframe-button small secondary">Preview</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="wireframe-section">
          <div className="section-header">
            <h3>Recent Reports</h3>
            <div className="header-actions">
              <button className="wireframe-button secondary">Export All</button>
              <button className="wireframe-button secondary">Archive Old Reports</button>
            </div>
          </div>

          <div className="wireframe-table">
            <table>
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Generated By</th>
                  <th>Date</th>
                  <th>File Size</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>{report.type}</td>
                    <td>{report.generatedBy}</td>
                    <td>{report.generatedDate}</td>
                    <td>{report.fileSize}</td>
                    <td>
                      <span className="status-badge ready">{report.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          onClick={() => handleDownloadReport(report.id)}
                          className="wireframe-button small"
                        >
                          Download
                        </button>
                        <button className="wireframe-button small secondary">Share</button>
                        <button className="wireframe-button small secondary">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="wireframe-section">
          <h3>Scheduled Reports</h3>
          <div className="wireframe-table">
            <table>
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Frequency</th>
                  <th>Next Run</th>
                  <th>Recipients</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Expense Summary</td>
                  <td>Summary</td>
                  <td>Monthly</td>
                  <td>2024-02-01</td>
                  <td>finance@company.com</td>
                  <td><span className="status-badge active">Active</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="wireframe-button small">Edit</button>
                      <button className="wireframe-button small secondary">Pause</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Quarterly Compliance Report</td>
                  <td>Compliance</td>
                  <td>Quarterly</td>
                  <td>2024-04-01</td>
                  <td>audit@company.com</td>
                  <td><span className="status-badge active">Active</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="wireframe-button small">Edit</button>
                      <button className="wireframe-button small secondary">Pause</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReimbursementReports;
