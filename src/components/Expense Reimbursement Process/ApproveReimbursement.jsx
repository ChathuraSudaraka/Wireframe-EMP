import React, { useState } from 'react';

const ApproveReimbursement = () => {
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 'CLM-001',
      employeeName: 'John Smith',
      department: 'Sales',
      manager: 'Alice Brown',
      claimAmount: 1250.00,
      submissionDate: '2024-01-15',
      category: 'Travel',
      description: 'Client meeting in Chicago - airfare and hotel',
      verificationStatus: 'Verified',
      approvalLevel: 'Manager',
      businessJustification: 'Essential client meeting for Q1 sales targets',
      budgetImpact: 'Within department travel budget'
    },
    {
      id: 'CLM-004',
      employeeName: 'Lisa Davis',
      department: 'Marketing',
      manager: 'Bob Wilson',
      claimAmount: 2100.00,
      submissionDate: '2024-01-14',
      category: 'Training',
      description: 'Digital Marketing Conference attendance',
      verificationStatus: 'Verified',
      approvalLevel: 'Director',
      businessJustification: 'Professional development for team lead',
      budgetImpact: 'Requires director approval (>$2000)'
    },
    {
      id: 'CLM-005',
      employeeName: 'Tom Anderson',
      department: 'IT',
      manager: 'Carol Johnson',
      claimAmount: 450.00,
      submissionDate: '2024-01-13',
      category: 'Equipment',
      description: 'Software licenses and development tools',
      verificationStatus: 'Verified',
      approvalLevel: 'Manager',
      businessJustification: 'Required tools for project development',
      budgetImpact: 'Within IT equipment budget'
    }
  ]);

  const [selectedClaim, setSelectedClaim] = useState(null);
  const [approvalNotes, setApprovalNotes] = useState('');
  const [currentUser] = useState({
    name: 'Alice Brown',
    role: 'Department Manager',
    approvalLevel: 'Manager'
  });

  const approvalHistory = [
    { date: '2024-01-15', approver: 'System', action: 'Document Verification', status: 'Completed' },
    { date: '2024-01-15', approver: 'Finance Team', action: 'Budget Check', status: 'Approved' },
    { date: '2024-01-16', approver: 'Alice Brown', action: 'Manager Approval', status: 'Pending' }
  ];

  const handleApprovalAction = (claimId, action) => {
    setPendingApprovals(prev => 
      prev.map(claim => 
        claim.id === claimId 
          ? { ...claim, approvalStatus: action, approvedBy: currentUser.name, approvedDate: new Date().toISOString().split('T')[0] }
          : claim
      )
    );
  };

  const getApprovalLevelColor = (level) => {
    switch(level) {
      case 'Manager': return 'blue';
      case 'Director': return 'orange';
      case 'VP': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h1>Approve Reimbursement</h1>
        <p>Review and approve verified expense claims</p>
        <div className="user-info">
          <span>Logged in as: {currentUser.name} ({currentUser.role})</span>
        </div>
      </div>

      <div className="approval-dashboard">
        <div className="approval-stats">
          <div className="stat-card">
            <h3>Pending My Approval</h3>
            <div className="stat-number">
              {pendingApprovals.filter(c => c.approvalLevel === currentUser.approvalLevel).length}
            </div>
          </div>
          <div className="stat-card">
            <h3>Total Amount</h3>
            <div className="stat-number">
              ${pendingApprovals.reduce((sum, claim) => sum + claim.claimAmount, 0).toFixed(2)}
            </div>
          </div>
          <div className="stat-card">
            <h3>Avg Processing Time</h3>
            <div className="stat-number">2.3 days</div>
          </div>
          <div className="stat-card">
            <h3>This Month Approved</h3>
            <div className="stat-number">47</div>
          </div>
        </div>

        <div className="approval-content">
          <div className="approval-queue">
            <h2>Claims Requiring Approval</h2>
            <div className="filter-controls">
              <select className="wireframe-select">
                <option>All Departments</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>Finance</option>
              </select>
              <select className="wireframe-select">
                <option>All Amount Ranges</option>
                <option>Under $500</option>
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>Over $2000</option>
              </select>
              <input 
                type="date" 
                className="wireframe-input"
                placeholder="From Date"
              />
            </div>

            <table className="wireframe-table">
              <thead>
                <tr>
                  <th>Claim ID</th>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Approval Level</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map((claim) => (
                  <tr key={claim.id} className={selectedClaim?.id === claim.id ? 'selected' : ''}>
                    <td>{claim.id}</td>
                    <td>{claim.employeeName}</td>
                    <td>{claim.department}</td>
                    <td>${claim.claimAmount.toFixed(2)}</td>
                    <td>{claim.category}</td>
                    <td>
                      <span className={`approval-level ${getApprovalLevelColor(claim.approvalLevel)}`}>
                        {claim.approvalLevel}
                      </span>
                    </td>
                    <td>
                      <span className="status-badge verified">
                        {claim.verificationStatus}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="wireframe-button secondary small"
                        onClick={() => setSelectedClaim(claim)}
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedClaim && (
            <div className="approval-panel">
              <h2>Approval Review - {selectedClaim.id}</h2>
              
              <div className="approval-details">
                <div className="claim-summary">
                  <h3>Claim Summary</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <label>Employee:</label>
                      <span>{selectedClaim.employeeName}</span>
                    </div>
                    <div className="info-item">
                      <label>Department:</label>
                      <span>{selectedClaim.department}</span>
                    </div>
                    <div className="info-item">
                      <label>Manager:</label>
                      <span>{selectedClaim.manager}</span>
                    </div>
                    <div className="info-item">
                      <label>Amount:</label>
                      <span className="amount-highlight">${selectedClaim.claimAmount.toFixed(2)}</span>
                    </div>
                    <div className="info-item">
                      <label>Category:</label>
                      <span>{selectedClaim.category}</span>
                    </div>
                    <div className="info-item">
                      <label>Submitted:</label>
                      <span>{selectedClaim.submissionDate}</span>
                    </div>
                  </div>
                </div>

                <div className="business-justification">
                  <h3>Business Justification</h3>
                  <div className="justification-content">
                    <p><strong>Description:</strong> {selectedClaim.description}</p>
                    <p><strong>Business Purpose:</strong> {selectedClaim.businessJustification}</p>
                    <p><strong>Budget Impact:</strong> {selectedClaim.budgetImpact}</p>
                  </div>
                </div>

                <div className="approval-workflow">
                  <h3>Approval Workflow</h3>
                  <div className="workflow-steps">
                    {approvalHistory.map((step, index) => (
                      <div key={index} className={`workflow-step ${step.status.toLowerCase()}`}>
                        <div className="step-icon">
                          {step.status === 'Completed' ? '✓' : step.status === 'Pending' ? '⏱' : '○'}
                        </div>
                        <div className="step-details">
                          <div className="step-action">{step.action}</div>
                          <div className="step-info">{step.approver} - {step.date}</div>
                        </div>
                        <div className={`step-status ${step.status.toLowerCase()}`}>
                          {step.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="policy-compliance">
                  <h3>Policy Compliance Check</h3>
                  <div className="compliance-checklist">
                    <div className="compliance-item">
                      <span className="check-icon">✓</span>
                      <span>Within spending limits</span>
                    </div>
                    <div className="compliance-item">
                      <span className="check-icon">✓</span>
                      <span>Valid business purpose</span>
                    </div>
                    <div className="compliance-item">
                      <span className="check-icon">✓</span>
                      <span>Proper documentation</span>
                    </div>
                    <div className="compliance-item">
                      <span className="check-icon">✓</span>
                      <span>Budget availability confirmed</span>
                    </div>
                  </div>
                </div>

                <div className="approval-notes">
                  <h3>Approval Notes</h3>
                  <textarea
                    className="wireframe-textarea"
                    rows="3"
                    placeholder="Add approval notes or comments..."
                    value={approvalNotes}
                    onChange={(e) => setApprovalNotes(e.target.value)}
                  />
                </div>

                <div className="approval-actions">
                  <button 
                    className="wireframe-button success"
                    onClick={() => handleApprovalAction(selectedClaim.id, 'Approved')}
                  >
                    Approve Claim
                  </button>
                  <button 
                    className="wireframe-button warning"
                    onClick={() => handleApprovalAction(selectedClaim.id, 'Conditional Approval')}
                  >
                    Conditional Approval
                  </button>
                  <button 
                    className="wireframe-button danger"
                    onClick={() => handleApprovalAction(selectedClaim.id, 'Rejected')}
                  >
                    Reject Claim
                  </button>
                  <button 
                    className="wireframe-button secondary"
                    onClick={() => setSelectedClaim(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApproveReimbursement;
