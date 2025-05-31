import React, { useState } from 'react';

const ReceiveTickets = () => {
  const [filter, setFilter] = useState('all');
  const [tickets] = useState([
    {
      id: 'TK-001',
      title: 'Computer won\'t start',
      reporter: 'John Smith',
      department: 'Accounting',
      priority: 'High',
      status: 'New',
      created: '2024-01-15 09:30',
      category: 'Hardware'
    },
    {
      id: 'TK-002',
      title: 'Email not working',
      reporter: 'Sarah Johnson',
      department: 'HR',
      priority: 'Medium',
      status: 'New',
      created: '2024-01-15 10:15',
      category: 'Software'
    },
    {
      id: 'TK-003',
      title: 'Network printer offline',
      reporter: 'Mike Wilson',
      department: 'Sales',
      priority: 'Low',
      status: 'New',
      created: '2024-01-15 11:00',
      category: 'Network'
    }
  ]);

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>📥 Receive Support Tickets</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Filter by Priority:</label>
            <div className="wireframe-select">
              <span>All Priorities ▼</span>
            </div>
          </div>
          <div className="wireframe-form-group">
            <label>Filter by Category:</label>
            <div className="wireframe-select">
              <span>All Categories ▼</span>
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
          <h4>📋 Incoming Tickets Queue</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Ticket ID</span>
              <span>Title</span>
              <span>Reporter</span>
              <span>Priority</span>
              <span>Category</span>
              <span>Created</span>
              <span>Actions</span>
            </div>
            {tickets.map((ticket) => (
              <div key={ticket.id} className="wireframe-table-row">
                <span>{ticket.id}</span>
                <span>{ticket.title}</span>
                <span>{ticket.reporter}</span>
                <span className={`wireframe-status-${ticket.priority.toLowerCase()}`}>
                  {ticket.priority}
                </span>
                <span>{ticket.category}</span>
                <span>{ticket.created}</span>
                <span>
                  <button className="wireframe-button-small">View</button>
                  <button className="wireframe-button-small">Assign</button>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="wireframe-stats-grid">
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">New Tickets</div>
            <div className="wireframe-stat-value">12</div>
            <div className="wireframe-stat-label">Today</div>
          </div>
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">High Priority</div>
            <div className="wireframe-stat-value">3</div>
            <div className="wireframe-stat-label">Urgent</div>
          </div>
          <div className="wireframe-stat-card">
            <div className="wireframe-stat-title">Avg Response</div>
            <div className="wireframe-stat-value">15 min</div>
            <div className="wireframe-stat-label">Time</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button">Refresh Queue</button>
          <button className="wireframe-button-secondary">Export List</button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveTickets;
