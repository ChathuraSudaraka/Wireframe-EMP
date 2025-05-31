import React from 'react';

const MonitorUserActivity = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Monitor User Activity</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-search-section">
          <div className="wireframe-search-box">
            <input type="text" placeholder="Search user, IP address, or activity type..." />
            <button className="wireframe-button">Search</button>
          </div>
          <div className="wireframe-filters">
            <div className="wireframe-select">
              <span>[All Users]</span>
              <span>▼</span>
            </div>
            <div className="wireframe-select">
              <span>[All Activities]</span>
              <span>▼</span>
            </div>
            <div className="wireframe-select">
              <span>[Last 7 Days]</span>
              <span>▼</span>
            </div>
          </div>
        </div>
        
        <div className="wireframe-stats-grid">
          <div className="wireframe-stat-card">
            <h4>Active Users</h4>
            <div className="wireframe-stat-number">247</div>
            <small>Currently online</small>
          </div>
          <div className="wireframe-stat-card">
            <h4>Failed Logins</h4>
            <div className="wireframe-stat-number">12</div>
            <small>Last 24 hours</small>
          </div>
          <div className="wireframe-stat-card">
            <h4>Suspicious Activity</h4>
            <div className="wireframe-stat-number">3</div>
            <small>Requires attention</small>
          </div>
          <div className="wireframe-stat-card">
            <h4>Session Duration</h4>
            <div className="wireframe-stat-number">4.2h</div>
            <small>Average today</small>
          </div>
        </div>
        
        <div className="wireframe-two-column">
          <div className="wireframe-column">
            <h4>Recent Activity Log</h4>
            <div className="wireframe-table">
              <div className="wireframe-table-header">
                <span>Time</span>
                <span>User</span>
                <span>Activity</span>
                <span>Status</span>
              </div>
              <div className="wireframe-table-row">
                <span>10:45 AM</span>
                <span>John Doe</span>
                <span>Login</span>
                <span>✓ Success</span>
              </div>
              <div className="wireframe-table-row">
                <span>10:42 AM</span>
                <span>Jane Smith</span>
                <span>File Access</span>
                <span>✓ Success</span>
              </div>
              <div className="wireframe-table-row">
                <span>10:40 AM</span>
                <span>Mike Johnson</span>
                <span>Failed Login</span>
                <span>⚠ Failed</span>
              </div>
              <div className="wireframe-table-row">
                <span>10:38 AM</span>
                <span>Sarah Wilson</span>
                <span>Password Change</span>
                <span>✓ Success</span>
              </div>
              <div className="wireframe-table-row">
                <span>10:35 AM</span>
                <span>David Brown</span>
                <span>System Access</span>
                <span>✓ Success</span>
              </div>
            </div>
          </div>
          
          <div className="wireframe-column">
            <h4>User Session Details</h4>
            <div className="wireframe-table">
              <div className="wireframe-table-row">
                <span>Selected User:</span>
                <span>[John Doe]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Current Status:</span>
                <span>[Online]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Login Time:</span>
                <span>[10:45 AM]</span>
              </div>
              <div className="wireframe-table-row">
                <span>IP Address:</span>
                <span>[192.168.1.100]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Device:</span>
                <span>[Windows 11 - Chrome]</span>
              </div>
              <div className="wireframe-table-row">
                <span>Location:</span>
                <span>[Office Building A]</span>
              </div>
            </div>
            
            <h4>Security Alerts</h4>
            <div className="wireframe-list">
              <div className="wireframe-list-item wireframe-alert">
                <span>⚠ Multiple failed login attempts</span>
                <small>Mike Johnson - 3 attempts</small>
              </div>
              <div className="wireframe-list-item wireframe-warning">
                <span>🔍 Unusual login time detected</span>
                <small>Lisa Davis - 2:30 AM login</small>
              </div>
              <div className="wireframe-list-item wireframe-info">
                <span>📍 New location login</span>
                <small>Tom Anderson - Remote access</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wireframe-button-group">
          <button className="wireframe-button">Export Report</button>
          <button className="wireframe-button-secondary">Refresh Data</button>
          <button className="wireframe-button-secondary">Set Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default MonitorUserActivity;
