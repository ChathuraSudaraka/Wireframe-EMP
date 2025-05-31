import React, { useState } from 'react';

function DisburseSalaries() {
  const [disbursementMethod, setDisbursementMethod] = useState('bank-transfer');
  const [disbursementDate, setDisbursementDate] = useState('2025-05-31');

  const disbursementData = [
    {
      id: 'EMP001',
      name: 'John Smith',
      bankAccount: '****1234',
      bankName: 'First National Bank',
      netSalary: 4270,
      status: 'processed',
      transactionId: 'TXN001234',
      disbursedDate: '2025-05-31'
    },
    {
      id: 'EMP002',
      name: 'Sarah Johnson',
      bankAccount: '****5678',
      bankName: 'City Bank',
      netSalary: 3700,
      status: 'pending',
      transactionId: null,
      disbursedDate: null
    },
    {
      id: 'EMP003',
      name: 'Mike Davis',
      bankAccount: '****9012',
      bankName: 'Metro Bank',
      netSalary: 3950,
      status: 'processed',
      transactionId: 'TXN001235',
      disbursedDate: '2025-05-31'
    },
    {
      id: 'EMP004',
      name: 'Lisa Wilson',
      bankAccount: '****3456',
      bankName: 'Regional Bank',
      netSalary: 4400,
      status: 'failed',
      transactionId: null,
      disbursedDate: null
    }
  ];

  const disbursementSummary = {
    totalAmount: 16320,
    processedAmount: 8220,
    pendingAmount: 3700,
    failedAmount: 4400,
    processedCount: 2,
    pendingCount: 1,
    failedCount: 1
  };

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Disburse Salaries</h3>
      </div>
      <div className="wireframe-content">
        {/* Disbursement Settings */}
        <div className="disbursement-settings">
          <h4>Disbursement Configuration</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Disbursement Method</label>
              <div className="wireframe-select">
                <span>Bank Transfer</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Disbursement Date</label>
              <div className="wireframe-input">May 31, 2025</div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Bank Processing Time</label>
              <div className="wireframe-input">1-2 Business Days</div>
            </div>

            <div className="wireframe-form-group">
              <label>Batch Reference</label>
              <div className="wireframe-input">PAY-MAY2025-001</div>
            </div>
          </div>
        </div>

        {/* Disbursement Summary */}
        <div className="disbursement-summary">
          <h4>Disbursement Summary</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">${disbursementSummary.totalAmount.toLocaleString()}</div>
              <div className="wireframe-stat-label">Total Amount</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">${disbursementSummary.processedAmount.toLocaleString()}</div>
              <div className="wireframe-stat-label">Processed</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">${disbursementSummary.pendingAmount.toLocaleString()}</div>
              <div className="wireframe-stat-label">Pending</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">${disbursementSummary.failedAmount.toLocaleString()}</div>
              <div className="wireframe-stat-label">Failed</div>
            </div>
          </div>
        </div>

        {/* Bank File Generation */}
        <div className="bank-file-section">
          <h4>Bank File Generation</h4>
          <div className="bank-file-info">
            <div className="file-details">
              <div className="file-item">
                <span className="file-label">File Format:</span>
                <span>ACH/NACHA Format</span>
              </div>
              <div className="file-item">
                <span className="file-label">File Size:</span>
                <span>2.3 KB</span>
              </div>
              <div className="file-item">
                <span className="file-label">Transaction Count:</span>
                <span>156 transactions</span>
              </div>
              <div className="file-item">
                <span className="file-label">Generated:</span>
                <span>May 30, 2025 10:30 AM</span>
              </div>
            </div>
            <div className="file-actions">
              <button className="wireframe-button-secondary">Download File</button>
              <button className="wireframe-button-secondary">Regenerate</button>
            </div>
          </div>
        </div>

        {/* Processing Status */}
        <div className="processing-status">
          <h4>Processing Status</h4>
          <div className="status-timeline">
            <div className="status-item completed">
              <div className="status-icon">✓</div>
              <div className="status-content">
                <div className="status-title">File Generated</div>
                <div className="status-time">May 30, 2025 10:30 AM</div>
              </div>
            </div>
            <div className="status-item completed">
              <div className="status-icon">✓</div>
              <div className="status-content">
                <div className="status-title">Sent to Bank</div>
                <div className="status-time">May 30, 2025 2:15 PM</div>
              </div>
            </div>
            <div className="status-item active">
              <div className="status-icon">⏳</div>
              <div className="status-content">
                <div className="status-title">Bank Processing</div>
                <div className="status-time">In Progress</div>
              </div>
            </div>
            <div className="status-item pending">
              <div className="status-icon">○</div>
              <div className="status-content">
                <div className="status-title">Funds Disbursed</div>
                <div className="status-time">Pending</div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Disbursement Details */}
        <div className="disbursement-details">
          <h4>Employee Disbursement Status</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Employee</span>
              <span>Bank Account</span>
              <span>Bank Name</span>
              <span>Net Salary</span>
              <span>Status</span>
              <span>Transaction ID</span>
              <span>Date</span>
              <span>Actions</span>
            </div>
            {disbursementData.map((employee) => (
              <div key={employee.id} className="wireframe-table-row">
                <span>
                  <div>{employee.name}</div>
                  <div style={{fontSize: '0.8rem', color: '#666'}}>{employee.id}</div>
                </span>
                <span>{employee.bankAccount}</span>
                <span>{employee.bankName}</span>
                <span>${employee.netSalary.toLocaleString()}</span>
                <span>
                  <div className={`disbursement-status ${employee.status}`}>
                    {employee.status === 'processed' && '✓ Processed'}
                    {employee.status === 'pending' && '⏳ Pending'}
                    {employee.status === 'failed' && '✗ Failed'}
                  </div>
                </span>
                <span>{employee.transactionId || '-'}</span>
                <span>{employee.disbursedDate || '-'}</span>
                <span>
                  <button className="wireframe-button-small">
                    {employee.status === 'failed' ? 'Retry' : 'View'}
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Retry Failed</button>
          <button className="wireframe-button-secondary">Export Report</button>
          <button className="wireframe-button">Process Disbursement</button>
        </div>
      </div>
    </div>
  );
}

export default DisburseSalaries;
