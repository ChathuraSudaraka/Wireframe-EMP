import React, { useState } from 'react';

function ReceiveExpenseClaims() {
  const [filterStatus, setFilterStatus] = useState('pending');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const expenseClaims = [
    {
      id: 'EXP-2025-001',
      employee: 'John Smith',
      employeeId: 'EMP001',
      department: 'Sales',
      submitDate: '2025-05-28',
      category: 'Travel',
      amount: 850.00,
      status: 'pending',
      receipts: 3,
      description: 'Client meeting travel expenses'
    },
    {
      id: 'EXP-2025-002',
      employee: 'Sarah Johnson',
      employeeId: 'EMP002',
      department: 'Marketing',
      submitDate: '2025-05-27',
      category: 'Meals',
      amount: 120.50,
      status: 'under-review',
      receipts: 2,
      description: 'Business lunch with vendors'
    },
    {
      id: 'EXP-2025-003',
      employee: 'Mike Davis',
      employeeId: 'EMP003',
      department: 'IT',
      submitDate: '2025-05-25',
      category: 'Equipment',
      amount: 299.99,
      status: 'pending',
      receipts: 1,
      description: 'Software license for project'
    },
    {
      id: 'EXP-2025-004',
      employee: 'Lisa Wilson',
      employeeId: 'EMP004',
      department: 'Finance',
      submitDate: '2025-05-24',
      category: 'Training',
      amount: 450.00,
      status: 'approved',
      receipts: 4,
      description: 'Professional certification course'
    }
  ];

  const claimCategories = [
    { name: 'Travel', count: 15, totalAmount: 12750 },
    { name: 'Meals', count: 8, totalAmount: 980 },
    { name: 'Equipment', count: 6, totalAmount: 2400 },
    { name: 'Training', count: 4, totalAmount: 1800 },
    { name: 'Office Supplies', count: 12, totalAmount: 560 }
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Receive Expense Claims</h3>
      </div>
      <div className="wireframe-content">
        {/* Claim Filters */}
        <div className="claim-filters">
          <h4>Filter Claims</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Status</label>
              <div className="wireframe-select">
                <span>Pending Review</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Department</label>
              <div className="wireframe-select">
                <span>All Departments</span>
                <span>▼</span>
              </div>
            </div>
            
            <div className="wireframe-form-group">
              <label>Date Range</label>
              <div className="wireframe-input">Last 30 Days</div>
            </div>

            <div className="wireframe-form-group">
              <label>Amount Range</label>
              <div className="wireframe-select">
                <span>All Amounts</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Claims Summary */}
        <div className="claims-summary">
          <h4>Claims Overview</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">45</div>
              <div className="wireframe-stat-label">Total Claims</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">$18,490</div>
              <div className="wireframe-stat-label">Total Amount</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">28</div>
              <div className="wireframe-stat-label">Pending Review</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">3.2 days</div>
              <div className="wireframe-stat-label">Avg Processing Time</div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="category-breakdown">
          <h4>Claims by Category</h4>
          <div className="category-grid">
            {claimCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count} claims</span>
                </div>
                <div className="category-amount">${category.totalAmount.toLocaleString()}</div>
                <div className="category-actions">
                  <button className="wireframe-button-small">View All</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Claims Table */}
        <div className="recent-claims">
          <h4>Recent Expense Claims</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Claim ID</span>
              <span>Employee</span>
              <span>Department</span>
              <span>Category</span>
              <span>Amount</span>
              <span>Submit Date</span>
              <span>Status</span>
              <span>Receipts</span>
              <span>Actions</span>
            </div>
            {expenseClaims.map((claim) => (
              <div key={claim.id} className="wireframe-table-row">
                <span>{claim.id}</span>
                <span>
                  <div>{claim.employee}</div>
                  <div style={{fontSize: '0.8rem', color: '#666'}}>{claim.employeeId}</div>
                </span>
                <span>{claim.department}</span>
                <span>{claim.category}</span>
                <span>${claim.amount.toFixed(2)}</span>
                <span>{claim.submitDate}</span>
                <span>
                  <div className={`claim-status ${claim.status}`}>
                    {claim.status === 'pending' && '⏳ Pending'}
                    {claim.status === 'under-review' && '👀 Under Review'}
                    {claim.status === 'approved' && '✓ Approved'}
                  </div>
                </span>
                <span>{claim.receipts} files</span>
                <span>
                  <button className="wireframe-button-small">Review</button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h4>Quick Actions</h4>
          <div className="action-buttons">
            <button className="wireframe-button-secondary">Bulk Review</button>
            <button className="wireframe-button-secondary">Export Claims</button>
            <button className="wireframe-button">Process Next Claim</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Refresh Claims</button>
          <button className="wireframe-button-secondary">Generate Report</button>
          <button className="wireframe-button">Start Processing</button>
        </div>
      </div>
    </div>
  );
}

export default ReceiveExpenseClaims;
