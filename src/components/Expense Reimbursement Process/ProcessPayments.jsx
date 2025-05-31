import React, { useState } from 'react';

const ProcessPayments = () => {
  const [selectedClaims, setSelectedClaims] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('bank_transfer');
  const [batchMode, setBatchMode] = useState(false);

  const approvedClaims = [
    {
      id: 'CLM-001',
      employee: 'John Smith',
      department: 'Sales',
      amount: 250.00,
      currency: 'USD',
      priority: 'High',
      accountNumber: '****1234',
      bankName: 'First National Bank',
      approvedDate: '2024-01-15',
      urgency: 'Urgent'
    },
    {
      id: 'CLM-002',
      employee: 'Sarah Johnson',
      department: 'Marketing',
      amount: 180.50,
      currency: 'USD',
      priority: 'Medium',
      accountNumber: '****5678',
      bankName: 'City Bank',
      approvedDate: '2024-01-14',
      urgency: 'Standard'
    },
    {
      id: 'CLM-003',
      employee: 'Mike Wilson',
      department: 'IT',
      amount: 420.75,
      currency: 'USD',
      priority: 'Low',
      accountNumber: '****9012',
      bankName: 'Metro Bank',
      approvedDate: '2024-01-13',
      urgency: 'Standard'
    },
    {
      id: 'CLM-004',
      employee: 'Emily Davis',
      department: 'HR',
      amount: 95.25,
      currency: 'USD',
      priority: 'Medium',
      accountNumber: '****3456',
      bankName: 'Regional Bank',
      approvedDate: '2024-01-12',
      urgency: 'Standard'
    }
  ];

  const handleClaimSelection = (claimId) => {
    setSelectedClaims(prev => 
      prev.includes(claimId) 
        ? prev.filter(id => id !== claimId)
        : [...prev, claimId]
    );
  };

  const handleSelectAll = () => {
    if (selectedClaims.length === approvedClaims.length) {
      setSelectedClaims([]);
    } else {
      setSelectedClaims(approvedClaims.map(claim => claim.id));
    }
  };

  const getTotalAmount = () => {
    return approvedClaims
      .filter(claim => selectedClaims.includes(claim.id))
      .reduce((total, claim) => total + claim.amount, 0)
      .toFixed(2);
  };

  const handleProcessPayments = () => {
    if (selectedClaims.length === 0) {
      alert('Please select at least one claim to process');
      return;
    }
    alert(`Processing ${selectedClaims.length} payment(s) totaling $${getTotalAmount()}`);
  };

  return (
    <div className="wireframe-component">
      <div className="component-header">
        <h2>Process Payments</h2>
        <p>Process approved expense reimbursements and initiate payments</p>
      </div>

      <div className="wireframe-content">
        {/* Payment Summary */}
        <div className="wireframe-section">
          <h3>Payment Summary</h3>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-label">Total Claims</div>
              <div className="summary-value">{approvedClaims.length}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Selected</div>
              <div className="summary-value">{selectedClaims.length}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Total Amount</div>
              <div className="summary-value">${getTotalAmount()}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Payment Method</div>
              <div className="summary-value">{paymentMethod.replace('_', ' ').toUpperCase()}</div>
            </div>
          </div>
        </div>

        {/* Payment Configuration */}
        <div className="wireframe-section">
          <h3>Payment Configuration</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Payment Method</label>
              <select 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="wireframe-select"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="ach">ACH Transfer</option>
                <option value="wire_transfer">Wire Transfer</option>
                <option value="check">Check</option>
                <option value="payroll_integration">Payroll Integration</option>
              </select>
            </div>
            <div className="form-group">
              <label>Processing Date</label>
              <input type="date" className="wireframe-input" defaultValue="2024-01-16" />
            </div>
            <div className="form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={batchMode}
                  onChange={(e) => setBatchMode(e.target.checked)}
                />
                Batch Processing Mode
              </label>
            </div>
            <div className="form-group">
              <label>Reference Note</label>
              <input 
                type="text" 
                className="wireframe-input" 
                placeholder="Payment batch reference..."
              />
            </div>
          </div>
        </div>

        {/* Approved Claims List */}
        <div className="wireframe-section">
          <div className="section-header">
            <h3>Approved Claims Ready for Payment</h3>
            <div className="header-actions">
              <button 
                onClick={handleSelectAll}
                className="wireframe-button secondary"
              >
                {selectedClaims.length === approvedClaims.length ? 'Deselect All' : 'Select All'}
              </button>
              <button 
                onClick={handleProcessPayments}
                className="wireframe-button primary"
                disabled={selectedClaims.length === 0}
              >
                Process Selected Payments
              </button>
            </div>
          </div>

          <div className="wireframe-table">
            <table>
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      checked={selectedClaims.length === approvedClaims.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Claim ID</th>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Bank Details</th>
                  <th>Priority</th>
                  <th>Approved Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedClaims.map((claim) => (
                  <tr key={claim.id} className={selectedClaims.includes(claim.id) ? 'selected' : ''}>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={selectedClaims.includes(claim.id)}
                        onChange={() => handleClaimSelection(claim.id)}
                      />
                    </td>
                    <td>{claim.id}</td>
                    <td>{claim.employee}</td>
                    <td>{claim.department}</td>
                    <td>${claim.amount.toFixed(2)}</td>
                    <td>
                      <div className="bank-details">
                        <div>{claim.bankName}</div>
                        <div className="account-number">{claim.accountNumber}</div>
                      </div>
                    </td>
                    <td>
                      <span className={`priority-badge ${claim.priority.toLowerCase()}`}>
                        {claim.priority}
                      </span>
                    </td>
                    <td>{claim.approvedDate}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="wireframe-button small">View</button>
                        <button className="wireframe-button small">Hold</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Processing Status */}
        <div className="wireframe-section">
          <h3>Recent Payment Batches</h3>
          <div className="wireframe-table">
            <table>
              <thead>
                <tr>
                  <th>Batch ID</th>
                  <th>Claims Count</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Processed Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BATCH-2024-001</td>
                  <td>8</td>
                  <td>$1,245.50</td>
                  <td><span className="status-badge completed">Completed</span></td>
                  <td>2024-01-15</td>
                  <td>
                    <button className="wireframe-button small">View Report</button>
                  </td>
                </tr>
                <tr>
                  <td>BATCH-2024-002</td>
                  <td>5</td>
                  <td>$892.25</td>
                  <td><span className="status-badge processing">Processing</span></td>
                  <td>2024-01-16</td>
                  <td>
                    <button className="wireframe-button small">Track Status</button>
                  </td>
                </tr>
                <tr>
                  <td>BATCH-2024-003</td>
                  <td>3</td>
                  <td>$567.80</td>
                  <td><span className="status-badge failed">Failed</span></td>
                  <td>2024-01-16</td>
                  <td>
                    <button className="wireframe-button small">Retry</button>
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

export default ProcessPayments;
