import React, { useState } from 'react';

const ResolveTickets = () => {
  const [resolvedTickets] = useState([
    {
      id: 'TK-001',
      title: 'Computer won\'t start',
      reporter: 'John Smith',
      assignee: 'Alex Rodriguez',
      priority: 'High',
      category: 'Hardware',
      startTime: '2024-01-15 10:00',
      resolvedTime: '2024-01-15 14:30',
      resolution: 'Replaced faulty power supply unit. System now boots normally.',
      resolutionMethod: 'Hardware Replacement',
      timeSpent: '4.5 hours',
      status: 'Resolved - Pending Closure'
    },
    {
      id: 'TK-005',
      title: 'Printer driver issue',
      reporter: 'Lisa Chen',
      assignee: 'Emma Johnson',
      priority: 'Low',
      category: 'Software',
      startTime: '2024-01-15 09:00',
      resolvedTime: '2024-01-15 11:15',
      resolution: 'Uninstalled old driver and installed latest version from manufacturer website.',
      resolutionMethod: 'Software Update',
      timeSpent: '2.25 hours',
      status: 'Resolved - Pending Closure'
    },
    {
      id: 'TK-008',
      title: 'Password reset request',
      reporter: 'Mark Davis',
      assignee: 'Maria Garcia',
      priority: 'Medium',
      category: 'Account',
      startTime: '2024-01-15 13:00',
      resolvedTime: '2024-01-15 13:30',
      resolution: 'Password reset completed. User notified of new temporary password.',
      resolutionMethod: 'Account Management',
      timeSpent: '0.5 hours',
      status: 'Resolved - Pending Closure'
    }
  ]);

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>✅ Resolve Support Tickets</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Filter by Category:</label>
            <div className="wireframe-select">
              <span>All Categories ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Filter by Technician:</label>
            <div className="wireframe-select">
              <span>All Technicians ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Date Range:</label>
            <div className="wireframe-input">
              <span>Select date range...</span>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>🔧 Resolved Tickets Pending Closure</h4>
          <div className="wireframe-list">
            {resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="wireframe-list-item">
                <div className="wireframe-list-header">
                  <span className="wireframe-list-title">{ticket.id} - {ticket.title}</span>
                  <span className="wireframe-status-resolved">
                    {ticket.status}
                  </span>
                </div>
                <div className="wireframe-list-details">
                  <span>Reporter: {ticket.reporter}</span>
                  <span>Resolved by: {ticket.assignee}</span>
                  <span>Category: {ticket.category}</span>
                  <span>Time Spent: {ticket.timeSpent}</span>
                </div>
                <div className="wireframe-resolution-section">
                  <div className="wireframe-resolution-method">
                    <strong>Resolution Method:</strong> {ticket.resolutionMethod}
                  </div>
                  <div className="wireframe-resolution-details">
                    <strong>Resolution Details:</strong> {ticket.resolution}
                  </div>
                  <div className="wireframe-resolution-times">
                    <span>Started: {ticket.startTime}</span>
                    <span>Resolved: {ticket.resolvedTime}</span>
                  </div>
                </div>
                <div className="wireframe-list-actions">
                  <button className="wireframe-button-small">View Full Details</button>
                  <button className="wireframe-button-small">Contact User</button>
                  <button className="wireframe-button-small">Close Ticket</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wireframe-section">
          <h4>📝 Bulk Resolution Actions</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Resolution Template:</label>
              <div className="wireframe-select">
                <span>Select resolution template ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Resolution Notes:</label>
              <div className="wireframe-textarea">
                <span>Enter resolution details...</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Follow-up Required:</label>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" /> Yes, schedule follow-up</label>
                <label><input type="checkbox" /> Send satisfaction survey</label>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>📊 Resolution Statistics</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Resolved Today</div>
              <div className="wireframe-stat-value">23</div>
              <div className="wireframe-stat-label">Tickets</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">First Contact</div>
              <div className="wireframe-stat-value">85%</div>
              <div className="wireframe-stat-label">Resolution Rate</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Avg Resolution</div>
              <div className="wireframe-stat-value">2.1 hrs</div>
              <div className="wireframe-stat-label">Time</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">User Satisfaction</div>
              <div className="wireframe-stat-value">4.8/5</div>
              <div className="wireframe-stat-label">Rating</div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button">Mark Selected as Resolved</button>
          <button className="wireframe-button-secondary">Send Resolution Notifications</button>
          <button className="wireframe-button-secondary">Generate Resolution Report</button>
        </div>
      </div>
    </div>
  );
};

export default ResolveTickets;
