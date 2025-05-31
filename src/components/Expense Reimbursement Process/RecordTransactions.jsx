import React, { useState } from 'react';

const RecordTransactions = () => {
  const [selectedTab, setSelectedTab] = useState('record');
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    {
      id: 'TXN-2024-001',
      date: '2024-01-15',
      claimId: 'EXP-2024-001',
      employee: 'John Smith',
      amount: 450.00,
      category: 'Travel',
      paymentMethod: 'Bank Transfer',
      status: 'Recorded',
      glAccount: '6001-Travel Expenses',
      reference: 'REF-450-2024'
    },
    {
      id: 'TXN-2024-002',
      date: '2024-01-14',
      claimId: 'EXP-2024-002',
      employee: 'Sarah Johnson',
      amount: 125.50,
      category: 'Meals',
      paymentMethod: 'Petty Cash',
      status: 'Pending',
      glAccount: '6002-Meals & Entertainment',
      reference: 'REF-125-2024'
    },
    {
      id: 'TXN-2024-003',
      date: '2024-01-13',
      claimId: 'EXP-2024-003',
      employee: 'Mike Wilson',
      amount: 89.99,
      category: 'Office Supplies',
      paymentMethod: 'Credit Card',
      status: 'Recorded',
      glAccount: '6003-Office Supplies',
      reference: 'REF-089-2024'
    }
  ];

  const auditTrail = [
    {
      id: 1,
      transactionId: 'TXN-2024-001',
      action: 'Created',
      user: 'Finance Clerk',
      timestamp: '2024-01-15 09:30:00',
      details: 'Transaction record created for expense claim EXP-2024-001'
    },
    {
      id: 2,
      transactionId: 'TXN-2024-001',
      action: 'GL Account Updated',
      user: 'Finance Manager',
      timestamp: '2024-01-15 10:15:00',
      details: 'GL Account changed from 6000 to 6001-Travel Expenses'
    },
    {
      id: 3,
      transactionId: 'TXN-2024-001',
      action: 'Status Updated',
      user: 'System',
      timestamp: '2024-01-15 11:00:00',
      details: 'Status changed to Recorded after successful posting'
    }
  ];

  const glAccounts = [
    { code: '6001', name: 'Travel Expenses' },
    { code: '6002', name: 'Meals & Entertainment' },
    { code: '6003', name: 'Office Supplies' },
    { code: '6004', name: 'Training & Development' },
    { code: '6005', name: 'Communication' }
  ];

  const handleRecordTransaction = (transactionId) => {
    console.log('Recording transaction:', transactionId);
  };

  const handleViewAudit = (transactionId) => {
    setSelectedTransaction(transactionId);
    setSelectedTab('audit');
  };

  return (
    <div className="wireframe-component">
      <div className="component-header">
        <h2>Record Transactions</h2>
        <p>Record and track expense reimbursement transactions with audit trail</p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${selectedTab === 'record' ? 'active' : ''}`}
          onClick={() => setSelectedTab('record')}
        >
          Record Transactions
        </button>
        <button 
          className={`tab-button ${selectedTab === 'audit' ? 'active' : ''}`}
          onClick={() => setSelectedTab('audit')}
        >
          Audit Trail
        </button>
        <button 
          className={`tab-button ${selectedTab === 'accounts' ? 'active' : ''}`}
          onClick={() => setSelectedTab('accounts')}
        >
          GL Accounts
        </button>
      </div>

      {selectedTab === 'record' && (
        <div className="tab-content">
          {/* Summary Cards */}
          <div className="summary-grid">
            <div className="summary-card">
              <h3>Total Transactions</h3>
              <div className="metric-value">15</div>
              <div className="metric-label">This Month</div>
            </div>
            <div className="summary-card">
              <h3>Pending Records</h3>
              <div className="metric-value">3</div>
              <div className="metric-label">Need Recording</div>
            </div>
            <div className="summary-card">
              <h3>Recorded Amount</h3>
              <div className="metric-value">$12,450</div>
              <div className="metric-label">This Month</div>
            </div>
            <div className="summary-card">
              <h3>Failed Records</h3>
              <div className="metric-value">0</div>
              <div className="metric-label">System Errors</div>
            </div>
          </div>

          {/* Transaction Recording Form */}
          <div className="form-section">
            <h3>New Transaction Record</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Transaction ID</label>
                <input type="text" placeholder="Auto-generated" readOnly />
              </div>
              <div className="input-group">
                <label>Claim Reference</label>
                <select>
                  <option>Select Expense Claim</option>
                  <option>EXP-2024-004 - Alice Brown</option>
                  <option>EXP-2024-005 - David Lee</option>
                </select>
              </div>
              <div className="input-group">
                <label>GL Account</label>
                <select>
                  <option>Select GL Account</option>
                  {glAccounts.map(account => (
                    <option key={account.code} value={account.code}>
                      {account.code} - {account.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label>Payment Method</label>
                <select>
                  <option>Bank Transfer</option>
                  <option>Check</option>
                  <option>Credit Card</option>
                  <option>Petty Cash</option>
                </select>
              </div>
              <div className="input-group">
                <label>Transaction Date</label>
                <input type="date" defaultValue="2024-01-15" />
              </div>
              <div className="input-group">
                <label>Reference Number</label>
                <input type="text" placeholder="Enter reference number" />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-primary">Record Transaction</button>
              <button className="btn-secondary">Save as Draft</button>
              <button className="btn-outline">Clear Form</button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="table-section">
            <div className="table-header">
              <h3>Recent Transactions</h3>
              <div className="table-actions">
                <input type="text" placeholder="Search transactions..." className="search-input" />
                <button className="btn-outline">Export</button>
              </div>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Claim ID</th>
                  <th>Employee</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>GL Account</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td className="transaction-id">{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td className="claim-link">{transaction.claimId}</td>
                    <td>{transaction.employee}</td>
                    <td className="amount">${transaction.amount.toFixed(2)}</td>
                    <td>{transaction.category}</td>
                    <td className="gl-account">{transaction.glAccount}</td>
                    <td>
                      <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        {transaction.status === 'Pending' && (
                          <button 
                            className="btn-sm btn-primary"
                            onClick={() => handleRecordTransaction(transaction.id)}
                          >
                            Record
                          </button>
                        )}
                        <button 
                          className="btn-sm btn-outline"
                          onClick={() => handleViewAudit(transaction.id)}
                        >
                          Audit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedTab === 'audit' && (
        <div className="tab-content">
          <div className="audit-section">
            <div className="section-header">
              <h3>Transaction Audit Trail</h3>
              <div className="filter-controls">
                <select>
                  <option>All Transactions</option>
                  <option>TXN-2024-001</option>
                  <option>TXN-2024-002</option>
                  <option>TXN-2024-003</option>
                </select>
                <input type="date" />
                <button className="btn-outline">Filter</button>
              </div>
            </div>

            <div className="audit-timeline">
              {auditTrail.map(entry => (
                <div key={entry.id} className="audit-entry">
                  <div className="audit-marker"></div>
                  <div className="audit-content">
                    <div className="audit-header">
                      <span className="audit-action">{entry.action}</span>
                      <span className="audit-time">{entry.timestamp}</span>
                    </div>
                    <div className="audit-details">
                      <strong>Transaction:</strong> {entry.transactionId}<br />
                      <strong>User:</strong> {entry.user}<br />
                      <strong>Details:</strong> {entry.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'accounts' && (
        <div className="tab-content">
          <div className="accounts-section">
            <div className="section-header">
              <h3>General Ledger Accounts</h3>
              <button className="btn-primary">Add New Account</button>
            </div>

            <div className="accounts-grid">
              {glAccounts.map(account => (
                <div key={account.code} className="account-card">
                  <div className="account-code">{account.code}</div>
                  <div className="account-name">{account.name}</div>
                  <div className="account-stats">
                    <div className="stat">
                      <span className="stat-label">Transactions</span>
                      <span className="stat-value">5</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Amount</span>
                      <span className="stat-value">$2,450</span>
                    </div>
                  </div>
                  <div className="account-actions">
                    <button className="btn-sm btn-outline">Edit</button>
                    <button className="btn-sm btn-outline">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordTransactions;
