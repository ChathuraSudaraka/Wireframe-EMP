import React, { useState } from 'react';

const TrackProgress = () => {
  const [tickets] = useState([
    {
      id: 'TK-001',
      title: 'Computer won\'t start',
      assignee: 'Alex Rodriguez',
      priority: 'High',
      status: 'In Progress',
      progress: 60,
      startTime: '2024-01-15 10:00',
      estimatedCompletion: '2024-01-15 14:00',
      lastUpdate: '2024-01-15 12:30',
      notes: 'Hardware diagnosis complete, replacing power supply'
    },
    {
      id: 'TK-002',
      title: 'Email not working',
      assignee: 'Maria Garcia',
      priority: 'Medium',
      status: 'Pending User',
      progress: 80,
      startTime: '2024-01-15 11:00',
      estimatedCompletion: '2024-01-15 13:00',
      lastUpdate: '2024-01-15 12:45',
      notes: 'Waiting for user to confirm email settings'
    },
    {
      id: 'TK-005',
      title: 'Printer driver issue',
      assignee: 'Emma Johnson',
      priority: 'Low',
      status: 'Resolved',
      progress: 100,
      startTime: '2024-01-15 09:00',
      estimatedCompletion: '2024-01-15 11:00',
      lastUpdate: '2024-01-15 11:15',
      notes: 'Driver reinstalled and tested successfully'
    }
  ]);

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>📈 Track Ticket Progress</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Filter by Status:</label>
            <div className="wireframe-select">
              <span>All Status ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Filter by Assignee:</label>
            <div className="wireframe-select">
              <span>All Technicians ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Search Tickets:</label>
            <div className="wireframe-input">
              <span>Search by ticket ID or title...</span>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>📋 Active Tickets Progress</h4>
          <div className="wireframe-list">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="wireframe-list-item">
                <div className="wireframe-list-header">
                  <span className="wireframe-list-title">{ticket.id} - {ticket.title}</span>
                  <span className={`wireframe-status-${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="wireframe-list-details">
                  <span>Assignee: {ticket.assignee}</span>
                  <span>Priority: {ticket.priority}</span>
                  <span>Started: {ticket.startTime}</span>
                  <span>Est. Completion: {ticket.estimatedCompletion}</span>
                </div>
                <div className="wireframe-progress-section">
                  <div className="wireframe-progress-label">
                    <span>Progress: {ticket.progress}%</span>
                    <span>Last Update: {ticket.lastUpdate}</span>
                  </div>
                  <div className="wireframe-progress-bar">
                    <div 
                      className="wireframe-progress-fill" 
                      style={{width: `${ticket.progress}%`}}
                    ></div>
                  </div>
                  <div className="wireframe-progress-notes">
                    <strong>Latest Notes:</strong> {ticket.notes}
                  </div>
                </div>
                <div className="wireframe-list-actions">
                  <button className="wireframe-button-small">View Details</button>
                  <button className="wireframe-button-small">Add Update</button>
                  <button className="wireframe-button-small">Contact User</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wireframe-section">
          <h4>📊 Progress Overview</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">In Progress</div>
              <div className="wireframe-stat-value">15</div>
              <div className="wireframe-stat-label">Active Tickets</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">On Schedule</div>
              <div className="wireframe-stat-value">12</div>
              <div className="wireframe-stat-label">Tickets</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Delayed</div>
              <div className="wireframe-stat-value">3</div>
              <div className="wireframe-stat-label">Tickets</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Avg Resolution</div>
              <div className="wireframe-stat-value">2.5 hrs</div>
              <div className="wireframe-stat-label">Time</div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button">Send Progress Updates</button>
          <button className="wireframe-button-secondary">Export Progress Report</button>
          <button className="wireframe-button-secondary">Schedule Review</button>
        </div>
      </div>
    </div>
  );
};

export default TrackProgress;
