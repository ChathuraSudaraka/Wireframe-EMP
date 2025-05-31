import React, { useState } from 'react';

const VerifyDocuments = () => {
  const [pendingVerifications, setPendingVerifications] = useState([
    {
      id: 'CLM-001',
      employeeName: 'John Smith',
      claimAmount: 1250.00,
      submissionDate: '2024-01-15',
      category: 'Travel',
      documentsSubmitted: ['Receipt', 'Travel Itinerary', 'Boarding Pass'],
      verificationStatus: 'In Review',
      priority: 'High'
    },
    {
      id: 'CLM-002',
      employeeName: 'Sarah Johnson',
      claimAmount: 85.50,
      submissionDate: '2024-01-14',
      category: 'Meals',
      documentsSubmitted: ['Receipt', 'Business Purpose Form'],
      verificationStatus: 'Pending',
      priority: 'Medium'
    },
    {
      id: 'CLM-003',
      employeeName: 'Mike Wilson',
      claimAmount: 320.00,
      submissionDate: '2024-01-13',
      category: 'Office Supplies',
      documentsSubmitted: ['Invoice', 'Purchase Order'],
      verificationStatus: 'Requires Additional Info',
      priority: 'Low'
    }
  ]);

  const [selectedClaim, setSelectedClaim] = useState(null);
  const [verificationNotes, setVerificationNotes] = useState('');

  const handleVerificationAction = (claimId, action) => {
    setPendingVerifications(prev => 
      prev.map(claim => 
        claim.id === claimId 
          ? { ...claim, verificationStatus: action }
          : claim
      )
    );
  };

  const documentTypes = [
    'Receipt/Invoice',
    'Business Purpose Form',
    'Travel Itinerary',
    'Boarding Pass/Ticket',
    'Mileage Log',
    'Meeting Agenda',
    'Purchase Order',
    'Approval Email'
  ];

  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h1>Verify Documents</h1>
        <p>Review and verify submitted expense claim documents</p>
      </div>

      <div className="verification-dashboard">
        <div className="verification-stats">
          <div className="stat-card">
            <h3>Pending Verification</h3>
            <div className="stat-number">{pendingVerifications.filter(c => c.verificationStatus === 'Pending').length}</div>
          </div>
          <div className="stat-card">
            <h3>In Review</h3>
            <div className="stat-number">{pendingVerifications.filter(c => c.verificationStatus === 'In Review').length}</div>
          </div>
          <div className="stat-card">
            <h3>Need Info</h3>
            <div className="stat-number">{pendingVerifications.filter(c => c.verificationStatus === 'Requires Additional Info').length}</div>
          </div>
          <div className="stat-card">
            <h3>Total Claims</h3>
            <div className="stat-number">{pendingVerifications.length}</div>
          </div>
        </div>

        <div className="verification-content">
          <div className="claims-queue">
            <h2>Claims Verification Queue</h2>
            <div className="filter-controls">
              <select className="wireframe-select">
                <option>All Priorities</option>
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
              <select className="wireframe-select">
                <option>All Categories</option>
                <option>Travel</option>
                <option>Meals</option>
                <option>Office Supplies</option>
                <option>Training</option>
              </select>
            </div>

            <table className="wireframe-table">
              <thead>
                <tr>
                  <th>Claim ID</th>
                  <th>Employee</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Documents</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingVerifications.map((claim) => (
                  <tr key={claim.id} className={selectedClaim?.id === claim.id ? 'selected' : ''}>
                    <td>{claim.id}</td>
                    <td>{claim.employeeName}</td>
                    <td>${claim.claimAmount.toFixed(2)}</td>
                    <td>{claim.category}</td>
                    <td>
                      <div className="document-count">
                        {claim.documentsSubmitted.length} docs
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${claim.verificationStatus.toLowerCase().replace(/\s+/g, '-')}`}>
                        {claim.verificationStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`priority-badge ${claim.priority.toLowerCase()}`}>
                        {claim.priority}
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
            <div className="verification-panel">
              <h2>Document Verification - {selectedClaim.id}</h2>
              
              <div className="claim-details">
                <div className="detail-section">
                  <h3>Claim Information</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <label>Employee:</label>
                      <span>{selectedClaim.employeeName}</span>
                    </div>
                    <div className="info-item">
                      <label>Amount:</label>
                      <span>${selectedClaim.claimAmount.toFixed(2)}</span>
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

                <div className="document-verification">
                  <h3>Document Verification Checklist</h3>
                  <div className="verification-checklist">
                    {documentTypes.map((docType, index) => (
                      <div key={index} className="checklist-item">
                        <input 
                          type="checkbox" 
                          id={`doc-${index}`}
                          defaultChecked={selectedClaim.documentsSubmitted.some(doc => doc.includes(docType.split('/')[0]))}
                        />
                        <label htmlFor={`doc-${index}`}>{docType}</label>
                        <span className="verification-status">
                          {selectedClaim.documentsSubmitted.some(doc => doc.includes(docType.split('/')[0])) ? '✓ Provided' : '⚠ Missing'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="document-preview">
                  <h3>Submitted Documents</h3>
                  <div className="document-list">
                    {selectedClaim.documentsSubmitted.map((doc, index) => (
                      <div key={index} className="document-item">
                        <div className="document-icon">📄</div>
                        <div className="document-info">
                          <div className="document-name">{doc}.pdf</div>
                          <div className="document-size">245 KB</div>
                        </div>
                        <button className="wireframe-button secondary small">View</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="verification-notes">
                  <h3>Verification Notes</h3>
                  <textarea
                    className="wireframe-textarea"
                    rows="4"
                    placeholder="Add verification notes or comments..."
                    value={verificationNotes}
                    onChange={(e) => setVerificationNotes(e.target.value)}
                  />
                </div>

                <div className="verification-actions">
                  <button 
                    className="wireframe-button success"
                    onClick={() => handleVerificationAction(selectedClaim.id, 'Verified')}
                  >
                    Approve Documents
                  </button>
                  <button 
                    className="wireframe-button warning"
                    onClick={() => handleVerificationAction(selectedClaim.id, 'Requires Additional Info')}
                  >
                    Request More Info
                  </button>
                  <button 
                    className="wireframe-button danger"
                    onClick={() => handleVerificationAction(selectedClaim.id, 'Rejected')}
                  >
                    Reject Documents
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

export default VerifyDocuments;
