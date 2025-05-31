import React from 'react';

const CheckLeaveBalance = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Check Leave Balance</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-stats-grid">
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">Annual Leave</div>
            <div className="wireframe-stat-value">██ / ██</div>
            <div className="wireframe-stat-label">Used / Total</div>
          </div>
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">Sick Leave</div>
            <div className="wireframe-stat-value">██ / ██</div>
            <div className="wireframe-stat-label">Used / Total</div>
          </div>
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">Personal Leave</div>
            <div className="wireframe-stat-value">██ / ██</div>
            <div className="wireframe-stat-label">Used / Total</div>
          </div>
        </div>
        
        <div className="wireframe-section">
          <h4>Recent Leave History</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Date</span>
              <span>Type</span>
              <span>Days</span>
              <span>Status</span>
            </div>
            <div className="wireframe-table-row">
              <span>████████</span>
              <span>████████</span>
              <span>██</span>
              <span className="wireframe-status-approved">Approved</span>
            </div>
            <div className="wireframe-table-row">
              <span>████████</span>
              <span>████████</span>
              <span>██</span>
              <span className="wireframe-status-pending">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckLeaveBalance;
